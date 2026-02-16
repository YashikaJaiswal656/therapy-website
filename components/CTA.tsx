import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-sage text-white">
      <div className="container-custom text-center">
        <h2 className="font-display text-4xl lg:text-5xl mb-6">
          Get started today.
        </h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto">
          My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living in a fast-paced environment—I may be a good fit.
        </p>
        <Link href="/contact" className="border-2 border-white text-white px-8 py-3 inline-block hover:bg-white hover:text-sage transition-all uppercase tracking-wider text-sm">
          GET IN TOUCH →
        </Link>
      </div>
    </section>
  )
}