'use client'

import { useEffect, useRef } from 'react'

interface AutoplayVideoProps {
  mp4Src: string
  movSrc?: string
  className?: string
  style?: React.CSSProperties
}

export default function AutoplayVideo({ mp4Src, movSrc, className = '', style = {} }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Force mute and setup for autoplay
    video.muted = true
    video.playsInline = true
    video.autoplay = true
    video.loop = true

    // Aggressive autoplay attempt
    const attemptAutoplay = async () => {
      try {
        // Wait a moment for video to load
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // Force play
        const promise = video.play()
        
        if (promise !== undefined) {
          await promise
          console.log('Video autoplay successful')
        }
      } catch (error) {
        console.warn('Autoplay prevented, will require user interaction:', error)
        
        // Try again on any user interaction
        const enableAutoplay = async () => {
          try {
            await video.play()
            document.removeEventListener('click', enableAutoplay)
            document.removeEventListener('touchstart', enableAutoplay)
            document.removeEventListener('keydown', enableAutoplay)
          } catch (e) {
            console.warn('Manual play also failed:', e)
          }
        }

        document.addEventListener('click', enableAutoplay, { once: true })
        document.addEventListener('touchstart', enableAutoplay, { once: true })
        document.addEventListener('keydown', enableAutoplay, { once: true })
      }
    }

    // Try autoplay when video can play
    video.addEventListener('canplay', attemptAutoplay)
    
    // Also try immediately if video is already ready
    if (video.readyState >= 3) {
      attemptAutoplay()
    }

    return () => {
      video.removeEventListener('canplay', attemptAutoplay)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      autoPlay
      loop
      preload="auto"
      className={className}
      style={style}
    >
      <source src={mp4Src} type="video/mp4" />
      {movSrc && <source src={movSrc} type="video/quicktime" />}
      <p>Your browser does not support the video tag.</p>
    </video>
  )
}
