'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white py-6">
      <nav className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-display text-2xl text-neutral-900">
            Dr. Maya Reynolds
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            <Link href="/blog" className="text-neutral-900 hover:text-neutral-600 transition-colors underline">
              Blog
            </Link>
            <Link href="/contact" className="text-neutral-900 hover:text-neutral-600 transition-colors underline">
              Contact
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 pb-4">
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}