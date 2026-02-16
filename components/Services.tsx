export default function Services() {
  const services = [
    {
      title: 'Anxiety & Stress',
      description: 'Navigate overwhelming anxiety, panic attacks, and chronic stress with evidence-based techniques including EMDR and somatic approaches that help you find peace and balance.',
    },
    {
      title: 'Trauma & PTSD',
      description: 'Heal from past traumas using specialized modalities like EMDR and Internal Family Systems in a safe, supportive environment designed for sustainable recovery.',
    },
    {
      title: 'Burnout',
      description: 'Address professional burnout and life transitions with compassionate support designed specifically for high-achieving adults seeking renewed energy and purpose.',
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-normal mb-4">
            My Specialties
          </h2>
        </div>

        {/* Services Grid - Simple cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-neutral-300 p-8 lg:p-10"
            >
              <h3 className="font-display text-2xl font-normal mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
