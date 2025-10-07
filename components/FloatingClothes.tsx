'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const clothingItems = [
  {
    name: 'dress1',
    src: '/images/clothes/dress1.png',
    alt: 'Dress',
    startPosition: { x: 'calc(100vw + 50px)', y: '50%' }, // from right
    endPosition: { x: 'calc(100vw - 120px)', y: '50%' }, // less hang-off
    rotation: { start: 15, end: -5 },
    delay: 300
  },
  {
    name: 'glasses',
    src: '/images/clothes/glasses.png', 
    alt: 'Glasses',
    startPosition: { x: 'calc(100vw + 30px)', y: '-50px' }, // from top right
    endPosition: { x: 'calc(100vw - 450px)', y: '100px' }, // fully on screen
    rotation: { start: -20, end: 10 },
    delay: 600
  },
  {
    name: 'purse',
    src: '/images/clothes/purse.png',
    alt: 'Purse', 
    startPosition: { x: 'calc(100vw + 40px)', y: 'calc(100vh + 40px)' }, // from bottom right
    endPosition: { x: 'calc(100vw - 200px)', y: 'calc(100vh - 100px)' }, // fully on screen
    rotation: { start: 25, end: -8 },
    delay: 900
  },
  {
    name: 'shirt1',
    src: '/images/clothes/shirt1.png',
    alt: 'Shirt',
    startPosition: { x: '-80px', y: '-60px' }, // from top left
    endPosition: { x: '200px', y: '280px' }, // minimal hang-off
    rotation: { start: -30, end: 12 },
    delay: 450
  },
  {
    name: 'shirt2',
    src: '/images/clothes/shirt2.png',
    alt: 'Shirt 2',
    startPosition: { x: '-70px', y: 'calc(100vh + 50px)' }, // from bottom left
    endPosition: { x: '130px', y: 'calc(100vh - 180px)' }, // minimal hang-off
    rotation: { start: 20, end: -6 },
    delay: 750
  }
]

export default function FloatingClothes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle SSR
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  // Calculate mouse influence for each item
  const getMouseInfluence = (itemName: string) => {
    // Guard against SSR - return no influence if window is not available
    if (typeof window === 'undefined') {
      return { x: 0, y: 0, rotation: 0 }
    }
    
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    
    // Calculate distance from center
    const deltaX = (mousePosition.x - centerX) / centerX
    const deltaY = (mousePosition.y - centerY) / centerY
    
    // Different sensitivity for each item
    const sensitivity = itemName === 'glasses' ? 3 : itemName === 'purse' ? 4 : 2
    
    return {
      x: deltaX * sensitivity,
      y: deltaY * sensitivity,
      rotation: (deltaX + deltaY) * 0.5
    }
  }

  // Don't render during SSR
  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {clothingItems.map((item) => {
        const mouseInfluence = getMouseInfluence(item.name)
        
        return (
          <div
            key={item.name}
            className="absolute transition-all duration-1000 ease-out"
            style={{
              left: isLoaded ? item.endPosition.x : item.startPosition.x,
              top: isLoaded ? item.endPosition.y : item.startPosition.y,
              transform: `
                translate(-50%, -50%) 
                translate(${mouseInfluence.x}px, ${mouseInfluence.y}px)
                rotate(${isLoaded ? item.rotation.end + mouseInfluence.rotation : item.rotation.start}deg)
              `,
              opacity: isLoaded ? 1 : 0,
              transitionDelay: `${item.delay}ms`,
              willChange: 'transform, opacity'
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={item.name === 'glasses' ? 'transition-all duration-300 mix-blend-multiply' : 'drop-shadow-lg hover:drop-shadow-xl transition-all duration-300'}
              style={{
                width: item.name === 'glasses' ? '60vw' : item.name === 'purse' ? '80vw' : '55vw',
                height: 'auto',
                maxWidth: '550px',
                maxHeight: 'none',
                filter: item.name === 'glasses' ? 'none' : 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
              }}
              draggable={false}
            />
          </div>
        )
      })}
      
    </div>
  )
}
