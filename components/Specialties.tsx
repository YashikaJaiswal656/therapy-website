import Image from 'next/image'

export default function Specialties() {
  const specialties = [
    {
      title: 'Anxiety & Stress',
      description: 'Navigate constant worry, panic attacks, tension in your body, and difficulty sleeping. I help clients who feel they\'re always bracing for something to go wrong using evidence-based techniques including CBT, EMDR and mindfulness-based practices.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800'
    },
    {
      title: 'Trauma & PTSD',
      description: 'Heal from single-incident trauma as well as complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with emphasis on safety, stabilization, and helping you feel more regulated in daily life.',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800'
    },
    {
      title: 'Burnout & Perfectionism',
      description: 'Support for entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800'
    }
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl mb-4">
            My Specialties
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {specialties.map((specialty, index) => (
            <div key={index} className="border border-neutral-300 p-8">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl mb-4 text-center">
                {specialty.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed text-center">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}