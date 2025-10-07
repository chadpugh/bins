import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-radial from-white via-white to-gray-200 flex flex-col items-center">
      {/* Main Content Container */}
      <div className="flex flex-col items-center pt-16 pb-8 px-4 max-w-2xl mx-auto">
        
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
            <Image
              src="/images/iphone-mockup.png"
              alt="Bins App on iPhone"
              width={268}
              height={583}
              className="relative z-10"
              priority
            />
            
            {/* Logo Overlay */}
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 z-20">
              <Image
                src="/images/logo.svg"
                alt="Bins Logo"
                width={100}
                height={44}
              />
            </div>

            {/* Send Link Button */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
            <button className="bg-black/60 backdrop-blur-sm text-white px-4 py-3 rounded-full text-base font-medium hover:bg-black/70 transition-colors font-inter">
              Send a link to my phone
            </button>
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-gray-200 rounded-3xl p-4 mb-6 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(208,211,213,1)] w-full max-w-lg">
          <div className="flex items-center justify-between gap-6">
            
            {/* App Store Card */}
            <div className="flex items-center gap-4 flex-1">
              {/* App Icon */}
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
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
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gray-700 text-xs">⭐</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-700">1.4K</span>
                </div>
              </div>

              {/* GET Button */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase hover:bg-blue-600 transition-colors">
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
  )
}
