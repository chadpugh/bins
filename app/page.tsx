'use client'

import { useState } from 'react'
import Image from 'next/image'
import FloatingClothes from '../components/FloatingClothes'
import AutoplayVideo from '../components/AutoplayVideo'
import Modal from '../components/Modal'
import FAQContent from '../components/FAQContent'
import TermsContent from '../components/TermsContent'
import PrivacyContent from '../components/PrivacyContent'

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalType: string) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }
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
      <div className="flex flex-col items-center pt-8 sm:pt-12 md:pt-16 pb-8 px-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        
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
          {/* iPhone Container with Shadow */}
          <div className="relative drop-shadow-2xl">
            {/* Aggressive Autoplay Video behind iPhone */}
            {/* Video with correct positioning and proportions */}
            <AutoplayVideo
              mp4Src="/images/bins_new.mp4"
              movSrc="/images/bins_new.mov"
              className="absolute z-0"
              style={{
                height: 'calc(max(400px, min(calc(60vh - 120px), 70vh)) - 4px)',
                width: 'max(180px, calc((60vh - 120px) * 0.42))',
                objectFit: 'cover',
                borderRadius: 'max(20px, calc((60vh - 120px) * 0.051))',
                top: 'max(21px, calc((60vh - 120px) * 0.053))',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            />

            <Image
              src="/images/iphone-mockup.png"
              alt="Bins App on iPhone"
              width={268}
              height={583}
              className="relative z-10"
              style={{
                height: 'max(400px, min(calc(60vh - 120px), 70vh))',
                width: 'auto',
                minWidth: '184px'
              }}
              priority
            />
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-[#E5E5E5] rounded-[20px] sm:rounded-[24px] p-3 sm:p-4 mb-4 sm:mb-6 shadow-[8px_8px_16px_0_#D0D3D5,-8px_-8px_16px_0_rgba(255,255,255,0.8)] w-full max-w-lg">
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
              <button className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase hover:bg-blue-600 transition-colors">
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
              className="text-gray-700 text-sm sm:text-base font-medium border border-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded hover:bg-gray-100 transition-colors whitespace-nowrap font-inter relative z-20 pointer-events-auto"
            >
              <span className="hidden sm:inline">Seller + Buyer </span>FAQ
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <a
            href="mailto:support@bins.app"
            className="text-gray-700 px-2 sm:px-3 py-2 rounded hover:bg-gray-100 transition-colors font-inter text-sm sm:text-base"
          >
            Contact
          </a>
          <button
            onClick={() => {
              console.log('Terms button clicked')
              openModal('terms')
            }}
            className="text-gray-700 px-2 sm:px-3 py-2 rounded hover:bg-gray-100 transition-colors font-inter text-sm sm:text-base relative z-20 pointer-events-auto"
          >
            Terms
          </button>
          <button
            onClick={() => {
              console.log('Privacy button clicked')
              openModal('privacy')
            }}
            className="text-gray-700 px-2 sm:px-3 py-2 rounded hover:bg-gray-100 transition-colors font-inter text-sm sm:text-base relative z-20 pointer-events-auto"
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
