'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import AutoplayVideo from '../components/AutoplayVideo'
import Modal from '../components/Modal'
import FAQContent from '../components/FAQContent'
import TermsContent from '../components/TermsContent'
import PrivacyContent from '../components/PrivacyContent'

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [animatedImages, setAnimatedImages] = useState({
    shirt1: false,
    glasses: false,
    dress1: false,
    shirt2: false,
    purse: false
  })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const openModal = (modalType: string) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  useEffect(() => {
    // Staggered animation timing - twice as fast
    const timings = [
      { image: 'shirt1', delay: 0 },
      { image: 'glasses', delay: 150 },
      { image: 'dress1', delay: 300 },
      { image: 'shirt2', delay: 450 },
      { image: 'purse', delay: 600 }
    ]

    timings.forEach(({ image, delay }) => {
      setTimeout(() => {
        setAnimatedImages(prev => ({ ...prev, [image]: true }))
      }, delay)
    })

    // Mouse parallax tracking
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2 // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2 // -1 to 1
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  return (
    <>
      {/* Decorative Clothing Images */}
      {/* Desktop Layout (1024px+) */}
      <img
        src="/images/clothes/shirt1.png"
        alt="Shirt 1"
        className="hidden lg:block fixed top-0 left-0 pointer-events-none"
        style={{ 
          zIndex: 15,
          left: animatedImages.shirt1 ? '-3%' : '-25%', 
          top: '-12%',
          maxWidth: '620px',
          maxHeight: '620px',
          opacity: animatedImages.shirt1 ? 1 : 0,
          transition: animatedImages.shirt1 ? 'left 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: animatedImages.shirt1 ? `translate(${mousePos.x * 2}px, ${mousePos.y * 1}px)` : 'none'
        }}
      />
      <img
        src="/images/clothes/shirt2.png"
        alt="Shirt 2"
        className="hidden lg:block fixed bottom-0 left-0 pointer-events-none"
        style={{ 
          zIndex: 15,
          left: animatedImages.shirt2 ? '-3%' : '-25%',
          bottom: '-3px',
          maxWidth: '420px',
          maxHeight: '420px',
          opacity: animatedImages.shirt2 ? 1 : 0,
          transition: animatedImages.shirt2 ? 'left 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), bottom 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: animatedImages.shirt2 ? `translate(${mousePos.x * 3}px, ${mousePos.y * 1.6}px)` : 'none'
        }}
      />
      <img
        src="/images/clothes/dress1.png"
        alt="Dress"
        className="hidden lg:block fixed right-0 pointer-events-none"
        style={{ 
          top: '50%', 
          transform: animatedImages.dress1 ? `translateY(-50%) translate(${mousePos.x * -1.6}px, ${mousePos.y * 2.4}px)` : 'translateY(-50%)', 
          right: animatedImages.dress1 ? '-3px' : '-20%',
          zIndex: 15,
          maxWidth: '600px',
          maxHeight: '600px',
          opacity: animatedImages.dress1 ? 1 : 0,
          transition: animatedImages.dress1 ? 'right 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />
      <img
        src="/images/clothes/glasses.png"
        alt="Glasses"
        className="hidden lg:block fixed top-0 right-0 pointer-events-none"
        style={{ 
          zIndex: 15,
          right: animatedImages.glasses ? '0%' : '-15%',
          top: animatedImages.glasses ? '0%' : '-15%',
          maxWidth: '220px',
          maxHeight: '220px',
          transform: animatedImages.glasses ? `rotate(-135deg) translate(${mousePos.x * -2.4}px, ${mousePos.y * 1.6}px)` : 'rotate(-135deg)',
          opacity: animatedImages.glasses ? 1 : 0,
          transition: animatedImages.glasses ? 'right 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), top 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />
      <img
        src="/images/clothes/purse.png"
        alt="Purse"
        className="hidden lg:block fixed bottom-0 right-0 pointer-events-none"
        style={{ 
          zIndex: 15,
          right: animatedImages.purse ? '-12%' : '-30%', 
          bottom: animatedImages.purse ? '-8%' : '-25%', 
          maxWidth: '600px',
          maxHeight: '600px',
          opacity: animatedImages.purse ? 1 : 0,
          transition: animatedImages.purse ? 'right 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), bottom 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: animatedImages.purse ? `translate(${mousePos.x * -1}px, ${mousePos.y * -3}px)` : 'none'
        }}
      />

      {/* iPad Layout (768px-1023px) */}
      <img
        src="/images/clothes/shirt1.png"
        alt="Shirt 1 iPad"
        className="hidden md:block lg:hidden fixed top-0 left-0 pointer-events-none"
        style={{ 
          zIndex: 15,
          left: animatedImages.shirt1 ? '-5%' : '-25%', 
          top: '8%',
          maxWidth: '450px',
          maxHeight: '450px',
          opacity: animatedImages.shirt1 ? 1 : 0,
          transition: animatedImages.shirt1 ? 'left 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: animatedImages.shirt1 ? `translate(${mousePos.x * 1.6}px, ${mousePos.y * 0.8}px)` : 'none'
        }}
      />
      <img
        src="/images/clothes/shirt2.png"
        alt="Shirt 2 iPad"
        className="hidden md:block lg:hidden fixed bottom-0 left-0 pointer-events-none"
        style={{ 
          zIndex: 15,
          left: animatedImages.shirt2 ? '-15%' : '-35%',
          bottom: '-3px',
          maxWidth: '350px',
          maxHeight: '350px',
          opacity: animatedImages.shirt2 ? 1 : 0,
          transition: animatedImages.shirt2 ? 'left 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), bottom 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: animatedImages.shirt2 ? `translate(${mousePos.x * 2.4}px, ${mousePos.y * 1.2}px)` : 'none'
        }}
      />
      <img
        src="/images/clothes/dress1.png"
        alt="Dress iPad"
        className="hidden md:block lg:hidden fixed right-0 pointer-events-none"
        style={{ 
          top: '50%', 
          transform: animatedImages.dress1 ? `translateY(-50%) translate(${mousePos.x * -1.2}px, ${mousePos.y * 2}px)` : 'translateY(-50%)', 
          right: animatedImages.dress1 ? '-3px' : '-18%',
          zIndex: 15,
          maxWidth: '500px',
          maxHeight: '500px',
          opacity: animatedImages.dress1 ? 1 : 0,
          transition: animatedImages.dress1 ? 'right 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />
      <img
        src="/images/clothes/glasses.png"
        alt="Glasses iPad"
        className="hidden md:block lg:hidden fixed top-0 right-0 pointer-events-none"
        style={{ 
          zIndex: 15,
          right: animatedImages.glasses ? '-5%' : '-20%',
          top: animatedImages.glasses ? '-5%' : '-20%',
          maxWidth: '200px',
          maxHeight: '200px',
          transform: animatedImages.glasses ? `rotate(-135deg) translate(${mousePos.x * -2}px, ${mousePos.y * 1.2}px)` : 'rotate(-135deg)',
          opacity: animatedImages.glasses ? 1 : 0,
          transition: animatedImages.glasses ? 'right 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), top 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />
      <img
        src="/images/clothes/purse.png"
        alt="Purse iPad"
        className="hidden md:block lg:hidden fixed bottom-0 right-0 pointer-events-none"
        style={{ 
          zIndex: 15,
          right: animatedImages.purse ? '-10%' : '-28%', 
          bottom: animatedImages.purse ? '-5%' : '-20%', 
          maxWidth: '450px',
          maxHeight: '450px',
          opacity: animatedImages.purse ? 1 : 0,
          transition: animatedImages.purse ? 'right 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), bottom 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: animatedImages.purse ? `translate(${mousePos.x * -0.8}px, ${mousePos.y * -2.4}px)` : 'none'
        }}
      />

      {/* Mobile Layout */}
      <img
        src="/images/clothes/shirt1.png"
        alt="Shirt 1 Mobile"
        className="block md:hidden fixed left-0 pointer-events-none"
        style={{ 
          top: '15%',
          left: animatedImages.shirt1 ? '-50%' : '-70%',  
          zIndex: 11,
          maxWidth: '500px',
          maxHeight: '500px',
          opacity: animatedImages.shirt1 ? 1 : 0,
          transition: animatedImages.shirt1 ? 'left 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), top 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: animatedImages.shirt1 ? `translate(${Math.max(mousePos.x * 1, -4)}px, ${mousePos.y * 0.6}px)` : 'none'
        }}
      />
      <img
        src="/images/clothes/glasses.png"
        alt="Glasses Mobile"
        className="block md:hidden fixed pointer-events-none"
        style={{ 
          top: animatedImages.glasses ? '-10%' : '-25%', 
          right: animatedImages.glasses ? '-10%' : '-25%', 
          zIndex: 15,
          maxWidth: '140px',
          maxHeight: '140px',
          transform: animatedImages.glasses ? `rotate(-135deg) translate(${Math.min(mousePos.x * -1.6, 4)}px, ${Math.max(mousePos.y * 1, -4)}px)` : 'rotate(-135deg)',
          opacity: animatedImages.glasses ? 1 : 0,
          transition: animatedImages.glasses ? 'top 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), right 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />
      <img
        src="/images/clothes/purse.png"
        alt="Purse Mobile"
        className="block md:hidden fixed right-0 pointer-events-none"
        style={{ 
          bottom: '6%', 
          right: animatedImages.purse ? '-180px' : '-220px',
          zIndex: 50,
          maxWidth: '400px',
          maxHeight: '400px',
          opacity: animatedImages.purse ? 1 : 0,
          transition: animatedImages.purse ? 'bottom 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), right 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms ease-out' : 'all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: animatedImages.purse ? `translate(${Math.min(mousePos.x * -0.6, 6)}px, ${mousePos.y * -1.6}px)` : 'none'
        }}
      />

      <div 
        className="min-h-screen flex flex-col items-center justify-center relative z-10"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 0%, #FFFFFF 0%, #F5F5F5 40%, #E5E5E5 100%)'
        }}
      >
      {/* Main Content Container */}
      <div className="flex flex-col items-center py-8 px-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 max-w-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 mb-3 sm:mb-4 leading-tight font-jost">
            Rediscover Thrifting
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-medium font-inter">
            Buyer and seller marketplace with xyz
          </p>
        </div>

        {/* iPhone Section */}
        <div className="relative mb-6 sm:mb-8">
          {/* iPhone Container */}
          <div className="relative">
            {/* Aggressive Autoplay Video behind iPhone */}
            <AutoplayVideo
              mp4Src="/images/bins_new.mp4"
              movSrc="/images/bins_new.mov"
              className="absolute z-0"
              style={{
                height: '533px',
                width: '246px',
                objectFit: 'contain',
                borderRadius: '25px',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgb(252, 251, 253)',
                boxShadow: '91.052px 184.105px 57.033px 0 rgba(0, 0, 0, 0.00), 58.033px 118.068px 52.03px 0 rgba(0, 0, 0, 0.01), 33.019px 66.038px 44.025px 0 rgba(0, 0, 0, 0.05), 15.009px 29.017px 33.019px 0 rgba(0, 0, 0, 0.09), 4.002px 7.004px 18.01px 0 rgba(0, 0, 0, 0.10)'
              }}
            />

            <Image
              src="/images/iphone-mockup.png"
              alt="Bins App on iPhone"
              width={268}
              height={583}
              className="relative z-10"
              style={{
                height: '550px',
                width: 'auto'
              }}
              priority
            />
          </div>
        </div>

        {/* Info Bar - Desktop/iPad */}
        <div className="hidden md:block bg-[#E5E5E5] rounded-[20px] sm:rounded-[24px] p-3 sm:p-4 mb-4 sm:mb-6 shadow-[8px_8px_16px_0_#D0D3D5,-8px_-8px_16px_0_rgba(255,255,255,0.8)] w-full max-w-lg">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* App Store Card */}
            <div className="flex items-center gap-2 sm:gap-4 flex-1">
              {/* App Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center">
                <Image
                  src="/images/logo.svg"
                  alt="Bins App Icon"
                  width={32}
                  height={14}
                  className="sm:w-10 sm:h-[17px]"
                />
              </div>
              
              {/* App Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-normal text-black text-base sm:text-lg leading-tight font-inter">Bins</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-tight font-inter">Shop, Sell, Share</p>
                <div className="flex items-center gap-1 sm:gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 sm:w-3 sm:h-3">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-700">1.4K</span>
                </div>
              </div>

              {/* GET Button */}
              <button className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase hover:bg-blue-600 transition-colors cursor-pointer">
                GET
              </button>
            </div>

            {/* Separator - Hidden on mobile */}
            <div className="hidden sm:block w-px h-16 bg-gray-400"></div>

            {/* FAQ Button */}
            <button 
              onClick={() => {
                console.log('FAQ button clicked')
                openModal('faq')
              }}
              className="text-gray-700 text-sm sm:text-base font-medium border border-gray-300 px-2 sm:px-3 h-16 rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap font-inter relative z-20 pointer-events-auto flex items-center cursor-pointer"
            >
              <span className="hidden sm:inline">Seller + Buyer </span>FAQ
            </button>
          </div>
        </div>

        {/* Footer Links - Desktop/iPad */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 sm:gap-4">
          <a
            href="mailto:support@bins.app"
            className="text-gray-700 px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors font-inter text-sm sm:text-base cursor-pointer"
          >
            Contact
          </a>
          <button
            onClick={() => {
              console.log('Terms button clicked')
              openModal('terms')
            }}
            className="text-gray-700 px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors font-inter text-sm sm:text-base relative z-20 pointer-events-auto cursor-pointer"
          >
            Terms
          </button>
          <button
            onClick={() => {
              console.log('Privacy button clicked')
              openModal('privacy')
            }}
            className="text-gray-700 px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors font-inter text-sm sm:text-base relative z-20 pointer-events-auto cursor-pointer"
          >
            Privacy
          </button>
        </div>
      </div>

      {/* Mobile Bottom Overlay Container */}
      <div 
        className="block lg:hidden fixed bottom-0 left-0 right-0 px-4 py-4"
        style={{
          backgroundColor: '#E2E2E2',
          borderTop: '1px solid white',
          zIndex: 20
        }}
      >
        {/* Info Bar - Mobile */}
        <div className="bg-[#E5E5E5] rounded-[20px] p-3 mb-4 shadow-[8px_8px_16px_0_#D0D3D5,-8px_-8px_16px_0_rgba(255,255,255,0.8)] w-full">
          <div className="flex items-center justify-between gap-3">
            
            {/* App Store Card */}
            <div className="flex items-center gap-2 flex-1">
              {/* App Icon */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/images/logo.svg"
                  alt="Bins App Icon"
                  width={32}
                  height={14}
                />
              </div>
              
              {/* App Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-normal text-black text-base leading-tight font-inter">Bins</h3>
                <p className="text-xs text-gray-700 leading-tight font-inter">Shop, Sell, Share</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-700">1.4K</span>
                </div>
              </div>

              {/* GET Button */}
              <button className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold uppercase hover:bg-blue-600 transition-colors cursor-pointer">
                GET
              </button>
            </div>

            {/* FAQ Button */}
            <button 
              onClick={() => {
                console.log('FAQ button clicked')
                openModal('faq')
              }}
              className="text-gray-700 text-sm font-medium border border-gray-300 px-2 py-1 rounded hover:bg-gray-100 transition-colors whitespace-nowrap font-inter relative z-20 pointer-events-auto cursor-pointer"
            >
              FAQ
            </button>
          </div>
        </div>

        {/* Footer Links - Mobile */}
        <div className="flex flex-wrap justify-center gap-2">
          <a
            href="mailto:support@bins.app"
            className="text-gray-700 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors font-inter text-sm cursor-pointer"
          >
            Contact
          </a>
          <button
            onClick={() => {
              console.log('Terms button clicked')
              openModal('terms')
            }}
            className="text-gray-700 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors font-inter text-sm relative z-20 pointer-events-auto cursor-pointer"
          >
            Terms
          </button>
          <button
            onClick={() => {
              console.log('Privacy button clicked')
              openModal('privacy')
            }}
            className="text-gray-700 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors font-inter text-sm relative z-20 pointer-events-auto cursor-pointer"
          >
            Privacy
          </button>
        </div>
      </div>
      
      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'faq'} 
        onClose={closeModal} 
        title="Seller + Buyer FAQ"
      >
        <FAQContent />
      </Modal>
      
      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={closeModal} 
        title="Terms of Service"
      >
        <TermsContent />
      </Modal>
      
      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        title="Privacy Policy"
      >
        <PrivacyContent />
      </Modal>
      </div>
    </>
  )
}
