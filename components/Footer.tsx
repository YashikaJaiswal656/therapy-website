import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-50 py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-display text-xl mb-4">Dr. Maya Reynolds</h4>
            <div className="space-y-2 text-neutral-700">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="mt-4">
                <a href="mailto:hello@drmayareynolds.com" className="hover:text-neutral-900 underline">
                  hello@drmayareynolds.com
                </a>
              </p>
              <p>
                <a href="tel:3105551234" className="hover:text-neutral-900 underline">
                  (310) 555-1234
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-4">Hours</h4>
            <div className="space-y-2 text-neutral-700">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
              <p className="text-sm mt-2">By appointment only</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-4">Find</h4>
            <div className="space-y-2">
              <p>
                <Link href="/" className="text-neutral-700 hover:text-neutral-900 underline">
                  Home
                </Link>
              </p>
              <p>
                <Link href="/contact" className="text-neutral-700 hover:text-neutral-900 underline">
                  Contact
                </Link>
              </p>
              <p>
                <Link href="/blog" className="text-neutral-700 hover:text-neutral-900 underline">
                  Blog
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-300 pt-8 text-center text-sm text-neutral-600 space-x-4">
          <a href="#" className="hover:text-neutral-900">Privacy & Cookies Policy</a>
          <a href="#" className="hover:text-neutral-900">Good Faith Estimate</a>
          <a href="#" className="hover:text-neutral-900">Website Terms & Conditions</a>
          <a href="#" className="hover:text-neutral-900">Disclaimer</a>
        </div>

        <p className="text-center text-sm text-neutral-500 mt-6">
          All Rights Reserved © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD.
        </p>
      </div>
    </footer>
  )
}