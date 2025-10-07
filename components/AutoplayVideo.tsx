interface AutoplayVideoProps {
  mp4Src: string
  movSrc?: string
  className?: string
  style?: React.CSSProperties
}

const AutoplayVideo = ({ mp4Src, movSrc, className = '', style = {} }: AutoplayVideoProps) => {
  return (
    <video
      // These three props are the key to making autoplay work!
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className={className}
      style={style}
    >
      {/* Providing multiple sources is good for browser compatibility */}
      <source src={mp4Src} type="video/mp4" />
      {movSrc && <source src={movSrc} type="video/quicktime" />}
      Your browser does not support the video tag.
    </video>
  )
}

export default AutoplayVideo
