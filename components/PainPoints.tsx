import Image from 'next/image'

export default function PainPoints() {
  const struggles = [
    'Feeling functional on the outside but struggling internally with constant worry or tension',
    'Stuck in overthinking or emotionally on edge',
    'Difficulty sleeping or body tension from stress',
    'Lingering effects of past traumatic experiences',
    'Feeling disconnected from yourself after years of pushing through',
    'Professional burnout or high internal pressure'
  ]

  return (
    <section className="py-20 lg:py-32 bg-neutral-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[500px] lg:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000"
              alt="Person in contemplation"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="font-display text-4xl lg:text-5xl mb-8">
              You don't have to do this all <em className="italic">alone.</em>
            </h2>
            <p className="text-xl text-neutral-700 mb-6">
              If you are facing any of these, there's hope:
            </p>
            <ul className="space-y-3">
              {struggles.map((struggle, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-neutral-900">•</span>
                  <span className="text-neutral-700">{struggle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}