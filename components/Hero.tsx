import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 hero-arch overflow-hidden bg-neutral-200">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1koVGhvD8mkiRXRukqrklo0HbB48p9PIa
"
                  alt="Flowers representing growth and healing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
              Compassionate Therapy for Anxiety, Trauma & Burnout
            </h1>
            <p className="text-lg text-neutral-700 mb-8">
              Therapy for Adults in Santa Monica, CA.
            </p>
            <Link href="/contact" className="btn btn-primary">
              CONNECT WITH ME →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
