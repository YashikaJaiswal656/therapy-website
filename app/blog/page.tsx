import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export default function BlogPage() {
  return (
    <main>
      <Header />
      
      {/* Blog Hero */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <div className="absolute inset-0 hero-arch overflow-hidden bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000"
                    alt="Reading and journaling"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="font-display text-5xl lg:text-6xl mb-6">
                The Dr. Maya Reynolds Blog
              </h1>
              <p className="text-xl text-neutral-700 mb-4">
                My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
              </p>
              <p className="text-lg text-neutral-600">
                Glad you're here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {blogPosts.map((post) => (
              <article key={post.slug}>
                <div className="relative h-64 mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-neutral-500 mb-2">{post.date}</p>
                <h2 className="font-display text-3xl mb-4">
                  {post.title}
                </h2>
                <Link href={`/blog/${post.slug}`} className="text-neutral-900 underline hover:text-neutral-600">
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 lg:py-32 bg-sage text-white">
        <div className="container-custom max-w-3xl">
          <div className="border-2 border-white p-12 text-center">
            <h2 className="font-display text-4xl mb-6">
              Subscribe
            </h2>
            <p className="text-lg mb-8">
              Sign up with your email address to receive news and updates.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-6 py-3 text-neutral-900 bg-white"
              />
              <button
                type="submit"
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-sage transition-colors uppercase tracking-wider"
              >
                SIGN UP
              </button>
            </form>
            
            <p className="text-sm opacity-90">
              We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}