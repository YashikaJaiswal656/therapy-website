import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds | Anxiety & Trauma Therapy Santa Monica',
  description: 'Licensed Clinical Psychologist specializing in anxiety, trauma, and burnout therapy for high-achieving adults in Santa Monica, CA.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}