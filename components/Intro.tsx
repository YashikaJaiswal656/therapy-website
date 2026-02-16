import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
              Live a fulfilling life.
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Many of my clients are functional on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              You don't have to navigate this alone. I'm here to help you understand what you're experiencing and develop more sustainable ways of living and working.
            </p>
            <Link href="/contact" className="btn btn-primary">
              GET IN TOUCH →
            </Link>
          </div>

          <div className="relative h-96 lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000"
              alt="Peaceful workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}