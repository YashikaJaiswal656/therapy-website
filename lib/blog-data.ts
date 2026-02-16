export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-anxiety-beyond-worry',
    title: 'Understanding Anxiety: Beyond Worry',
    excerpt: 'Anxiety isn\'t just feeling nervous before a big presentation. Learn about the different forms anxiety can take and when to seek professional support.',
    date: '3/7/19',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000',
    content: `It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.

Don't worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest. If you read the words back and don't hear your own voice in your head, that's a good sign you still have more work to do.

Be clear, be confident and don't overthink it. The beauty of your story is that it's going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.`
  },
  {
    slug: 'emdr-therapy-explained',
    title: 'EMDR Therapy: What to Expect',
    excerpt: 'EMDR therapy has transformed trauma treatment. Discover how this evidence-based approach helps process difficult memories and reduce emotional distress.',
    date: '3/11/19',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1000',
    content: `It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.

Don't worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest. If you read the words back and don't hear your own voice in your head, that's a good sign you still have more work to do.

Be clear, be confident and don't overthink it. The beauty of your story is that it's going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.`
  },
  {
    slug: 'recognizing-burnout-signs',
    title: 'Recognizing Burnout in High Achievers',
    excerpt: 'High achievers often push through exhaustion. Here are the warning signs of burnout and why addressing it early matters for your wellbeing.',
    date: '3/17/19',
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1000',
    content: `It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.

Don't worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest. If you read the words back and don't hear your own voice in your head, that's a good sign you still have more work to do.

Be clear, be confident and don't overthink it. The beauty of your story is that it's going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.`
  },
  {
    slug: 'healing-from-trauma',
    title: 'The Journey of Healing from Trauma',
    excerpt: 'Childhood experiences shape who we become. Learn how therapy can help you process past trauma and create healthier patterns for the future.',
    date: '3/21/19',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000',
    content: `It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.

Don't worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest. If you read the words back and don't hear your own voice in your head, that's a good sign you still have more work to do.

Be clear, be confident and don't overthink it. The beauty of your story is that it's going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.`
  }
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAdjacentPosts(slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const currentIndex = blogPosts.findIndex(post => post.slug === slug)
  return {
    prev: currentIndex > 0 ? blogPosts[currentIndex - 1] : null,
    next: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null,
  }
}
