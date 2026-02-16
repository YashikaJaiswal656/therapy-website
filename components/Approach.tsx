export default function Approach() {
  const approaches = [
    {
      title: 'EMDR Therapy',
      description: 'Process traumatic memories and reduce their emotional impact through structured eye movement techniques backed by extensive research.'
    },
    {
      title: 'Internal Family Systems',
      description: 'Explore and heal different parts of yourself, fostering self-compassion and integration of your internal experiences.'
    },
    {
      title: 'Somatic Approaches',
      description: 'Address trauma and anxiety stored in the body through mindful awareness and body-based interventions.'
    },
    {
      title: 'Cognitive Behavioral',
      description: 'Identify and transform unhelpful thought patterns that contribute to anxiety, depression, and distress.'
    }
  ]

  return (
    <section id="approach" className="py-20 lg:py-28 bg-primary text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-4">
            My Approach
          </p>
          <h2 className="text-display-md font-bold mb-6 text-white">
            Evidence-Based Modalities for Lasting Change
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            I integrate proven therapeutic approaches to create a treatment plan uniquely suited to your needs, goals, and healing journey. My methods are grounded in research and refined through years of clinical practice.
          </p>
        </div>

        {/* Approaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {approaches.map((approach, index) => (
            <div key={index} className="text-center group">
              {/* Number indicator */}
              <div className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center font-display text-xl font-semibold mx-auto mb-4 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                {index + 1}
              </div>
              
              <h4 className="font-display text-xl font-semibold mb-3 text-accent">
                {approach.title}
              </h4>
              <p className="text-white/85 leading-relaxed text-sm">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto mt-16 pt-16 border-t border-white/20">
          <h3 className="font-display text-2xl font-semibold mb-6 text-center text-white">
            My Therapeutic Philosophy
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-white/90">
            <div>
              <h5 className="font-semibold text-accent mb-3">Collaborative & Personalized</h5>
              <p className="text-sm leading-relaxed">
                Therapy is a partnership. I work with you to understand your unique experiences, strengths, and goals, creating a treatment approach that feels authentic and empowering.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-accent mb-3">Trauma-Informed Care</h5>
              <p className="text-sm leading-relaxed">
                I prioritize safety, trust, and empowerment in every session. My approach recognizes how trauma impacts the whole person—mind, body, and spirit.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-accent mb-3">Holistic & Integrative</h5>
              <p className="text-sm leading-relaxed">
                True healing addresses all aspects of your wellbeing. I integrate mind-body approaches that honor the connection between your thoughts, emotions, and physical experience.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-accent mb-3">Culturally Sensitive</h5>
              <p className="text-sm leading-relaxed">
                I respect and honor your cultural background, identity, and lived experiences. Therapy should feel inclusive, affirming, and tailored to who you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
