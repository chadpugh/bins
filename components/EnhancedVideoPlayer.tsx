'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-[max(30px,calc((60vh-200px)*0.051))]" />
})

interface EnhancedVideoPlayerProps {
  videoSources: {
    mp4: string
    mov?: string
  }
  className?: string
  style?: React.CSSProperties
}

export default function EnhancedVideoPlayer({ videoSources, className = '', style = {} }: EnhancedVideoPlayerProps) {
  const [isClient, setIsClient] = useState(false)
  const [userHasInteracted, setUserHasInteracted] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [shouldPlay, setShouldPlay] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)

  // Handle client-side mounting
  useEffect(() => {
    setIsClient(true)
  }, [])

  // User interaction detection
  const trackUserInteraction = useCallback(() => {
    if (!userHasInteracted) {
      setUserHasInteracted(true)
      // Remove listeners after first interaction
      document.removeEventListener('click', trackUserInteraction, { capture: true })
      document.removeEventListener('touchstart', trackUserInteraction, { capture: true })
      document.removeEventListener('keydown', trackUserInteraction, { capture: true })
      document.removeEventListener('scroll', trackUserInteraction, { capture: true })
    }
  }, [userHasInteracted])

  // Set up user interaction listeners
  useEffect(() => {
    // Add multiple interaction types to catch user engagement
    document.addEventListener('click', trackUserInteraction, { capture: true })
    document.addEventListener('touchstart', trackUserInteraction, { capture: true })
    document.addEventListener('keydown', trackUserInteraction, { capture: true })
    document.addEventListener('scroll', trackUserInteraction, { capture: true })

    return () => {
      document.removeEventListener('click', trackUserInteraction, { capture: true })
      document.removeEventListener('touchstart', trackUserInteraction, { capture: true })
      document.removeEventListener('keydown', trackUserInteraction, { capture: true })
      document.removeEventListener('scroll', trackUserInteraction, { capture: true })
    }
  }, [trackUserInteraction])

  // Intersection Observer for viewport detection
  useEffect(() => {
    if (!videoRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: '0px 0px -10% 0px' // Start slightly before entering viewport
      }
    )

    observer.observe(videoRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Auto-play logic based on conditions
  useEffect(() => {
    if (userHasInteracted && isInView && !hasPlayedOnce) {
      const timer = setTimeout(() => {
        setShouldPlay(true)
        setShowPlayButton(false)
        setHasPlayedOnce(true)
      }, 500) // Small delay to ensure smooth transition

      return () => clearTimeout(timer)
    }
  }, [userHasInteracted, isInView, hasPlayedOnce])

  // Manual play handler for explicit user click
  const handleManualPlay = () => {
    setShouldPlay(true)
    setShowPlayButton(false)
    setHasPlayedOnce(true)
    setUserHasInteracted(true)
  }

  // Handle player ready
  const handleReady = () => {
    // Player is loaded and ready
  }

  // Handle play/pause events
  const handlePlay = useCallback(() => {
    setShowPlayButton(false)
  }, [])

  const handlePause = () => {
    // Don't show play button again for autoplay scenario
    if (!hasPlayedOnce) {
      setShowPlayButton(true)
    }
  }

  const handleError = (error: any) => {
    console.warn('Video playback error:', error)
    // Fallback: show play button for manual interaction
    setShowPlayButton(true)
    setShouldPlay(false)
  }

  if (!isClient) {
    // Server-side render placeholder
    return (
      <div 
        className={`relative ${className}`}
        style={style}
      >
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-[max(30px,calc((60vh-200px)*0.051))]" />
      </div>
    )
  }

  return (
    <div 
      ref={videoRef}
      className={`relative ${className}`}
      style={style}
    >
      <ReactPlayer
        ref={playerRef}
        url={videoSources.mp4}
        playing={shouldPlay}
        muted={true}
        loop={true}
        playsInline={true}
        width="100%"
        height="100%"
        onReady={handleReady}
        onPlay={handlePlay}
        onPause={handlePause}
        onError={handleError}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      
      {/* Play button overlay */}
      {showPlayButton && (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer z-10 bg-black/10 rounded-[max(30px,calc((60vh-200px)*0.051))]"
          onClick={handleManualPlay}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleManualPlay()
            }
          }}
          aria-label="Play video"
        >
          <div className="bg-white/90 rounded-full p-4 shadow-lg hover:bg-white/100 transition-colors">
            <svg
              className="w-8 h-8 text-gray-800 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* User interaction hint (shows until first interaction) */}
      {!userHasInteracted && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm bg-black/50 px-3 py-1 rounded-full">
          Click anywhere to enable autoplay
        </div>
      )}
    </div>
  )
}
