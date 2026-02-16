import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function ContactPage() {
  const socialImages = [
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800',
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800',
  ]

  return (
    <main>
      <Header />
      
      {/* Contact Hero */}
      <section className="py-20 lg:py-32 bg-lavender-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-display text-5xl lg:text-6xl mb-6 text-sage-dark">
                Let's Connect
              </h1>
              <p className="text-lg text-neutral-700 mb-4">
                Starting therapy is courageous.
              </p>
              <p className="text-lg text-neutral-700 mb-8">
                Get in touch for questions, or to book a free 15-minute consultation.
              </p>
              
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 hero-arch overflow-hidden">
                  <Image
                    src="https://drive.google.com/uc?export=view&id=1koVGhvD8mkiRXRukqrklo0HbB48p9PIa"
                    alt="Flowers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-sage text-white p-8">
              <p className="font-semibold mb-2">PLEASE NOTE:</p>
              <p className="text-sm leading-relaxed">
                If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address: hello@drmayareynolds.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="font-display text-4xl lg:text-5xl mb-6 text-sage-dark">
            Book an appointment.
          </h2>
          <p className="text-lg text-neutral-700 mb-12 max-w-2xl mx-auto">
            Schedule your first session or free 15-minute consultation using the booking widget below. You can also reach out directly via email or phone.
          </p>

          <div className="bg-white border border-neutral-300 p-12 min-h-[400px] flex flex-col items-center justify-center">
            <p className="text-neutral-600 mb-4">Booking calendar would appear here</p>
            <p className="text-sm text-neutral-500 mb-6">
              Powered by SimplePractice or Acuity Scheduling
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-neutral-700">Or contact me directly:</p>
              <p className="text-lg">
                <a href="mailto:hello@drmayareynolds.com" className="text-sage underline">
                  hello@drmayareynolds.com
                </a>
              </p>
              <p className="text-lg">
                <a href="tel:3105551234" className="text-sage underline">
                  (310) 555-1234
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Office Section */}
      <section className="py-20 bg-sage text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl mb-6">
                My Office
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="mb-2">123th Street 45 W</p>
                  <p>Santa Monica, CA 90401</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Hours</p>
                  <p>Monday – Friday</p>
                  <p>10am – 6pm</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-200 h-96 flex items-center justify-center text-neutral-700">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52917.37900167579!2d-118.56966149641562!3d34.00958049974342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4ce02caf1cb%3A0x13cfb8fbc0fcfaaf!2sSanta%20Monica%2C%20CA%2090401%2C%20USA!5e0!3m2!1sen!2sin!4v1771229508337!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>
          </div>
        </div>
      </section>

      {/* Social Media Grid */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="font-display text-4xl mb-12">
            Find me on social.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialImages.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`Social post ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}