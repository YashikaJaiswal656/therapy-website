export default function Testimonials() {
  const testimonials = [
    {
      text: "Dr. Reynolds helped me navigate one of the darkest periods of my life with such compassion and skill. Her EMDR approach was transformative for my trauma recovery. I finally feel like myself again.",
      author: "— Sarah M.",
      role: "Client"
    },
    {
      text: "As a high-achieving professional, I struggled with burnout and anxiety for years. Dr. Reynolds gave me practical tools and deep insights that changed my relationship with work and stress. Highly recommend.",
      author: "— James K.",
      role: "Client"
    },
    {
      text: "I was skeptical about therapy, but Dr. Reynolds created such a safe, judgment-free space. Her somatic approach helped me understand the mind-body connection in ways talk therapy never did.",
      author: "— Maria L.",
      role: "Client"
    },
    {
      text: "Working with Dr. Reynolds has been life-changing. She's warm, insightful, and truly cares about her clients. The progress I've made in managing my anxiety is remarkable.",
      author: "— David R.",
      role: "Client"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label">Client Experiences</p>
          <h2 className="text-display-md font-bold mb-6">
            What Clients Are Saying
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real stories from individuals who've found healing, growth, and renewed hope through our work together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 lg:p-10 border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="text-5xl text-secondary/30 mb-4 font-serif leading-none">"</div>
              
              {/* Testimonial Text */}
              <p className="text-lg text-neutral-800 italic mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-neutral-500 text-center mt-12 max-w-3xl mx-auto">
          * Client names and identifying details have been changed to protect confidentiality. These testimonials represent the experiences of individual clients and may not reflect the experience of all clients.
        </p>
      </div>
    </section>
  )
}
