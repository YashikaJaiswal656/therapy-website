'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Do you have any openings?',
      answer: 'Yes! I currently have limited availability for new clients. I offer sessions on weekdays and some evening appointments. Please contact me to discuss scheduling options that work best for you.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'I am an out-of-network provider. I can provide you with a superbill that you can submit to your insurance for potential reimbursement. Many PPO plans offer out-of-network benefits.'
    },
    {
      question: 'What are your session fees?',
      answer: 'Individual therapy sessions (50 minutes) are $250 per session. Initial consultation sessions (60 minutes) are $275. Payment is due at the time of service.'
    },
    {
      question: 'Do you offer telehealth sessions?',
      answer: 'Yes! I offer secure telehealth sessions for clients located anywhere in California. The therapeutic relationship and outcomes are just as strong with telehealth as with in-person sessions.'
    }
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-4xl lg:text-5xl mb-12 text-center">
          FAQs
        </h2>

        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-neutral-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left"
              >
                <h3 className="font-display text-xl">{faq.question}</h3>
                <span className="text-2xl ml-4">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
