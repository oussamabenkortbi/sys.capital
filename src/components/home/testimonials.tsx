import Image from 'next/image'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amine B.',
      title: 'CEO, Tech Solutions',
      quote: 'sys.capital transformed our business workflow with their CRM and ERP. Intuitive and powerful software!'
    },
    {
      name: 'Sofia K.',
      title: 'Owner, Retail Shop',
      quote: 'Their POS and hardware bundles boosted our sales efficiency significantly. Highly recommended.'
    },
    {
      name: 'Nadjib M.',
      title: 'HR Manager, Industrie Co.',
      quote: 'The HR management system simplified our processes and improved employee satisfaction.'
    }
  ]

  return (
    <section className="relative py-24 px-6 sm:px-8 text-black dark:text-white max-w-6xl mx-auto select-text overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=60"
        alt="Team meeting background"
        width={2000}
        height={1200}
        className="absolute inset-0 size-full object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 dark:from-black/90 dark:via-black/80 dark:to-black/90" />

      <div className="relative">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-14 sm:mb-16 md:mb-20 text-center">
          CLIENT <br /> TESTIMONIALS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14 md:gap-20 text-lg sm:text-xl font-light tracking-wide">
          {testimonials.map(({ name, title, quote }, i) => {
            const colors = ['#0ea5e9', '#22c55e', '#a855f7'] as const
            const color = colors[i % colors.length]
            return (
              <article
                key={i}
                className="relative space-y-4 sm:space-y-6 rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 p-6 sm:p-8"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl" style={{ backgroundColor: color }} aria-hidden="true" />
                <Quote className="size-6" style={{ color }} aria-hidden="true" />
                <blockquote className="italic leading-relaxed text-black dark:text-gray-200">&ldquo;{quote}&rdquo;</blockquote>
                <footer className="font-semibold uppercase tracking-widest text-sm sm:text-base">
                  {name}, <span className="font-light normal-case opacity-80">{title}</span>
                </footer>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
