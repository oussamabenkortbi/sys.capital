import Image from 'next/image'
import Link from 'next/link'
import { posts as allPosts } from '@/app/blog/posts'

const posts = allPosts.slice(0, 3)

const BlogHighlights = () => {
  return (
    <section className="relative py-24 px-6 sm:px-8 max-w-6xl mx-auto text-black dark:text-white select-text overflow-hidden rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800">
      <Image
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=60"
        alt="Blog background"
        width={2000}
        height={1200}
        className="absolute inset-0 size-full object-cover object-center opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90 dark:from-black/90 dark:via-black/80 dark:to-black/90" />

      <div className="relative">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-14 sm:mb-16 md:mb-20 text-center">
          FROM OUR BLOG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {posts.map(({ slug, title, date, image, excerpt, tag, color }) => (
            <article
              key={slug}
              className="group relative isolate overflow-hidden rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800"
            >
              <div className="relative h-48">
                <Image src={image} alt="" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-black/70 dark:text-white/70">
                  <span
                    className="inline-flex h-2 w-2 rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  {tag} • {date}
                </div>
                <h2 className="text-2xl font-black tracking-tight group-hover:opacity-90">
                  {title}
                </h2>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">{excerpt}</p>
                <div className="mt-5">
                  <Link
                    href={`/blog/${slug}`}
                    className="inline-block text-sm font-semibold uppercase tracking-widest hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="inline-block text-sm font-semibold uppercase tracking-widest hover:underline">
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogHighlights
