import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl mb-6">
              Hi, I'm Dr. Maya Reynolds.
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              I take a warm, collaborative, and grounded approach to therapy. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.
            </p>
            <Link href="/contact" className="btn btn-primary">
              LET'S CHAT →
            </Link>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1000"
                  alt="Dr. Maya Reynolds"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}