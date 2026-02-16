'use client'

import { useState } from 'react'

export default function ProfessionalBG() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = [
    {
      title: 'Education',
      content: [
        'Doctor of Psychology (PsyD) - California School of Professional Psychology',
        'Master of Arts in Clinical Psychology - Pepperdine University',
        'Bachelor of Science in Psychology - UCLA'
      ]
    },
    {
      title: 'Licensure',
      content: [
        'Licensed Clinical Psychologist - California (PSY 12345)',
        'EMDR Certified Therapist - EMDR International Association',
        'IFS Trained Therapist - Internal Family Systems Institute'
      ]
    },
    {
      title: 'Professional Memberships',
      content: [
        'American Psychological Association (APA)',
        'California Psychological Association (CPA)',
        'Los Angeles County Psychological Association'
      ]
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-neutral-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-4xl lg:text-5xl mb-12 text-center">
          My Professional Background
        </h2>

        <div className="space-y-1">
          {items.map((item, index) => (
            <div key={index} className="border-b border-neutral-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left"
              >
                <h3 className="font-display text-2xl">{item.title}</h3>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {openIndex === index && (
                <div className="pb-6">
                  <ul className="space-y-2">
                    {item.content.map((line, idx) => (
                      <li key={idx} className="text-neutral-700">{line}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
