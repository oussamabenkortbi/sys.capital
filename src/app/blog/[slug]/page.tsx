import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts } from '@/app/blog/posts'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post not found — Sys.Capital' }
  return {
    title: `${post.title} — Sys.Capital Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white select-text">
      <article className="max-w-3xl mx-auto py-16 sm:py-20 px-6">
        <header className="mb-8 sm:mb-10">
          <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-black/70 dark:text-white/70">
            <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: post.color }} aria-hidden="true" />
            {post.tag} • {post.date}
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">{post.title}</h1>
        </header>

        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-xl ring-1 ring-gray-200 dark:ring-gray-800">
          <Image src={post.image} alt="" fill className="object-cover" />
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>{post.excerpt}</p>
          <p>
            Full article content coming soon. We can switch to MDX or a CMS and render
            long-form content here, including headings, images, and code snippets.
          </p>
        </div>
      </article>
    </main>
  )
}
