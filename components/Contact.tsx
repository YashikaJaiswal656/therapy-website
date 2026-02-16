import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-6">
            Take the First Step
          </p>
          <h2 className="text-display-md font-bold mb-6 text-white">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Taking the first step toward therapy can feel vulnerable, but you don't have to do it alone. I'm here to support you every step of the way.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm border border-white/20">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-display text-lg font-semibold mb-2 text-white">Phone</h4>
              <a href="tel:+13105551234" className="text-accent hover:text-accent-light transition-colors">
                (310) 555-1234
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm border border-white/20">
              <div className="text-3xl mb-3">✉️</div>
              <h4 className="font-display text-lg font-semibold mb-2 text-white">Email</h4>
              <a href="mailto:hello@drmayareynolds.com" className="text-accent hover:text-accent-light transition-colors break-all">
                hello@drmayareynolds.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm border border-white/20">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-display text-lg font-semibold mb-2 text-white">Location</h4>
              <p className="text-white/80 text-sm">
                Santa Monica, CA<br />
                Telehealth Available
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="mailto:hello@drmayareynolds.com?subject=Therapy Inquiry" 
              className="btn bg-accent text-primary border-2 border-accent hover:bg-transparent hover:text-accent hover:border-accent px-10 py-4 text-lg"
            >
              Schedule Consultation
            </a>
            <a 
              href="tel:+13105551234" 
              className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary px-10 py-4 text-lg"
            >
              Call Now
            </a>
          </div>

          {/* Additional Info */}
          <div className="border-t border-white/20 pt-8">
            <h4 className="font-display text-xl font-semibold mb-4 text-white">
              What to Expect
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-accent font-semibold mb-2">1. Free Consultation</p>
                <p className="text-white/80">15-minute phone call to discuss your needs and answer questions</p>
              </div>
              <div>
                <p className="text-accent font-semibold mb-2">2. Initial Session</p>
                <p className="text-white/80">60-minute intake to understand your goals and create a treatment plan</p>
              </div>
              <div>
                <p className="text-accent font-semibold mb-2">3. Ongoing Support</p>
                <p className="text-white/80">Regular sessions tailored to your unique healing journey</p>
              </div>
            </div>
          </div>

          {/* Insurance Note */}
          <p className="text-sm text-white/70 mt-8 max-w-2xl mx-auto">
            Currently accepting new clients. Evening and weekend appointments available. Out-of-network provider with superbills available for insurance reimbursement.
          </p>
        </div>
      </div>
    </section>
  )
}
