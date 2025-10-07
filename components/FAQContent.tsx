'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How do I list an item for sale?",
    answer: "Simply take clear photos of your item, add a detailed description including brand, size, condition, and any flaws. Set a competitive price and choose your preferred shipping method. Our app guides you through each step to ensure your listing attracts buyers."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, debit cards, PayPal, Apple Pay, and Google Pay. All transactions are processed securely through our payment partners to ensure your financial information stays protected."
  },
  {
    question: "What fees will I be charged for selling?",
    answer: "We charge a small 10% service fee on successful sales, plus a 3% payment processing fee. This covers secure transactions, buyer protection, customer support, and platform maintenance. There are no listing fees or monthly charges."
  },
  {
    question: "When will I get paid?",
    answer: "You'll receive payment within 2-3 business days after the buyer confirms they've received the item and are satisfied with their purchase. For expedited payouts, we offer same-day transfers for a small additional fee."
  },
  {
    question: "How do I handle returns?",
    answer: "If an item significantly differs from your description, buyers can request a return within 3 days of delivery. You'll be notified and can choose to accept the return or work with the buyer to resolve the issue. Our support team is always available to help mediate."
  },
  {
    question: "How do I handle shipping?",
    answer: "You can either ship items yourself or use our prepaid shipping labels. We provide packaging guidelines and partner with major carriers for discounted rates. Tracking information is automatically shared with buyers for transparency."
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. We use bank-level encryption to protect your data and never share your personal information with buyers or third parties. Your address is only used for shipping labels and isn't visible to other users on the platform."
  }
]

export default function FAQContent() {
  const [expandedItem, setExpandedItem] = useState<number>(0)

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? -1 : index)
  }

  return (
    <div className="space-y-2">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(index)}
            aria-expanded={expandedItem === index}
          >
            <span className="text-lg font-bold text-gray-900 font-jost pr-4">
              {item.question}
            </span>
            <div className="flex-shrink-0">
              {expandedItem === index ? (
                <svg
                  width="20"
                  height="2"
                  viewBox="0 0 20 2"
                  fill="none"
                  className="text-gray-600"
                >
                  <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-gray-600"
                >
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
              )}
            </div>
          </button>
          
          {expandedItem === index && (
            <div className="px-6 pb-6">
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-700 leading-relaxed font-inter">
                  {item.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
