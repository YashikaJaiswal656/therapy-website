import Image from 'next/image'

export default function Office() {
  return (
    <section className="py-20 lg:py-32 bg-neutral-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="relative h-96">
              <Image
                src="https://drive.google.com/uc?export=view&id=1EqlCJsSNzGI93VgaQULRIwoFP2xiFioy"
                alt="Therapy office space"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-48">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1DwpoQD0VWsfGsl4J1CwtSb3Wxy5ePVJW"
                  alt="Cozy seating area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1EqlCJsSNzGI93VgaQULRIwoFP2xiFioy"
                  alt="Peaceful waiting area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl lg:text-5xl mb-6">
              A Calm Space for Healing
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              My office in Santa Monica is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Clients often share that the space itself helps them feel more at ease when they arrive. It's designed to support the kind of deep, meaningful therapeutic work we do together.
            </p>

            <div className="border-l-4 border-sage pl-6 space-y-4">
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Location</p>
                <p className="text-neutral-600">123th Street 45 W, Santa Monica, CA 90401</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Session Options</p>
                <p className="text-neutral-600">In-person & secure telehealth available throughout California</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Privacy & Accessibility</p>
                <p className="text-neutral-600">Soundproof rooms, private entrance, free parking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}