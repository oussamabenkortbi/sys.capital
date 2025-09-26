import Image from 'next/image'
import Link from 'next/link'
import { posts } from '@/app/blog/posts'

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white select-text">
      <section className="relative py-24 sm:py-28 md:py-32 px-6 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-14 sm:mb-16 md:mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight">
              Blog
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl font-light tracking-wide text-black/80 dark:text-white/80">
              Insights on CRM, ERP, POS, and HR for Algerian businesses.
            </p>
          </header>

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

          <div className="mt-16 text-center text-xs text-black/60 dark:text-white/60">
            This blog is a static preview. We can switch to MDX or a CMS anytime.
          </div>
        </div>
      </section>
    </main>
  )
}
