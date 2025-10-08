import { useState } from 'react'
import Image from 'next/image'

interface AutoplayVideoProps {
  mp4Src: string
  movSrc?: string
  className?: string
  style?: React.CSSProperties
}

const AutoplayVideo = ({ mp4Src, movSrc, className = '', style = {} }: AutoplayVideoProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoadedData = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <>
      {/* Loading Background with Bins Logo */}
      {(isLoading || hasError) && (
        <div 
          className={className}
          style={{
            ...style,
            backgroundColor: '#C8A2C8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 5,
            boxShadow: '0 100px 237px 0 rgba(0, 0, 0, 0.19), 0 46.233px 109.572px 0 rgba(0, 0, 0, 0.14), 0 26.453px 62.695px 0 rgba(0, 0, 0, 0.12), 0 16.057px 38.055px 0 rgba(0, 0, 0, 0.10), 0 9.675px 22.93px 0 rgba(0, 0, 0, 0.09), 0 5.388px 12.769px 0 rgba(0, 0, 0, 0.07), 0 2.317px 5.492px 0 rgba(0, 0, 0, 0.05)'
          }}
        >
          <Image
            src="/images/logo.svg"
            alt="Bins Logo"
            width={60}
            height={26}
            className="filter brightness-0 invert"
            priority
          />
        </div>
      )}
      
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={className}
        style={style}
        onLoadedData={handleLoadedData}
        onError={handleError}
      >
        <source src={mp4Src} type="video/mp4" />
        {movSrc && <source src={movSrc} type="video/quicktime" />}
        Your browser does not support the video tag.
      </video>
    </>
  )
}

export default AutoplayVideo
