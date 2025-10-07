import Image from 'next/image'
import FloatingClothes from '../components/FloatingClothes'

export default function Home() {
  return (
    <>
      <FloatingClothes />
      <div 
        className="min-h-screen flex flex-col items-center relative z-10"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 0%, #FFFFFF 0%, #F5F5F5 40%, #E5E5E5 100%)'
        }}
      >
      {/* Main Content Container */}
      <div className="flex flex-col items-center pt-16 pb-8 px-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8 max-w-md">
          <h1 className="text-5xl font-semibold text-gray-700 mb-4 leading-tight font-jost">
            Rediscover Thrifting
          </h1>
          <p className="text-lg text-gray-500 font-medium font-inter">
            Buyer and seller marketplace with xyz
          </p>
        </div>

        {/* iPhone Section */}
        <div className="relative mb-8">
          {/* iPhone Container with Shadow */}
          <div className="relative drop-shadow-2xl">
            {/* Simple Video behind iPhone with click-to-play fallback */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute z-0 cursor-pointer"
              onClick={(e) => {
                const video = e.target as HTMLVideoElement;
                if (video.paused) {
                  video.play().catch(() => {
                    // Silently handle autoplay failures
                  });
                }
              }}
              style={{
                height: 'calc(max(583px, min(calc(60vh - 200px), 70vh)) - 4px)',
                width: 'max(240px, calc((60vh - 200px) * 0.41))',
                objectFit: 'cover',
                borderRadius: 'max(30px, calc((60vh - 200px) * 0.051))',
                top: 'max(31px, calc((60vh - 200px) * 0.053))',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              <source src="/images/bins_new.mp4" type="video/mp4" />
              <source src="/images/bins_new.mov" type="video/quicktime" />
              <p>Your browser does not support the video tag.</p>
            </video>

            <Image
              src="/images/iphone-mockup.png"
              alt="Bins App on iPhone"
              width={268}
              height={583}
              className="relative z-10"
              style={{
                height: 'max(583px, min(calc(60vh - 200px), 70vh))',
                width: 'auto',
                minWidth: '268px'
              }}
              priority
            />
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-[#E5E5E5] rounded-[24px] p-4 mb-6 shadow-[8px_8px_16px_0_#D0D3D5,-8px_-8px_16px_0_rgba(255,255,255,0.8)] w-full max-w-lg">
          <div className="flex items-center justify-between gap-6">
            
            {/* App Store Card */}
            <div className="flex items-center gap-4 flex-1">
              {/* App Icon */}
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/images/logo.svg"
                  alt="Bins App Icon"
                  width={40}
                  height={17}
                />
              </div>
              
              {/* App Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-normal text-black text-lg leading-tight font-inter">Bins</h3>
                <p className="text-sm text-gray-700 leading-tight font-inter">Shop, Sell, Share</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-700">1.4K</span>
                </div>
              </div>

              {/* GET Button */}
              <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase hover:bg-blue-600 transition-colors">
                GET
              </button>
            </div>

            {/* Separator */}
            <div className="w-px h-16 bg-gray-400"></div>

            {/* FAQ Button */}
            <button className="text-gray-700 text-base font-medium border border-gray-300 px-3 py-2 rounded hover:bg-gray-100 transition-colors whitespace-nowrap font-inter">
              Seller + Buyer FAQ
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex gap-2">
          {['Contact', 'Terms', 'Privacy'].map((link) => (
            <button
              key={link}
              className="text-gray-700 px-3 py-2 rounded hover:bg-gray-100 transition-colors font-inter"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}
