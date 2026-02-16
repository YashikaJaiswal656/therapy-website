import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getBlogPost, getAdjacentPosts, blogPosts } from '@/lib/blog-data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const { prev, next } = getAdjacentPosts(params.slug)

  return (
    <main>
      <Header />
      
      {/* Blog Post Content */}
      <article className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm text-neutral-500 mb-4 uppercase tracking-wider text-center">
            MAR 11
          </p>
          
          <h1 className="font-display text-5xl lg:text-6xl mb-12 text-center text-sage-dark">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-neutral-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Previous/Next Navigation */}
      <section className="py-12 border-t border-neutral-200">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div>
              {prev && (
                <Link 
                  href={`/blog/${prev.slug}`}
                  className="flex items-center gap-2 text-neutral-900 hover:text-neutral-600"
                >
                  <span className="text-2xl">←</span>
                  <span className="font-display text-2xl">{prev.title}</span>
                </Link>
              )}
            </div>
            
            <div>
              {next && (
                <Link 
                  href={`/blog/${next.slug}`}
                  className="flex items-center gap-2 text-neutral-900 hover:text-neutral-600"
                >
                  <span className="font-display text-2xl">{next.title}</span>
                  <span className="text-2xl">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}