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
    <section className="bg-white dark:bg-black py-24 px-6 sm:px-8 text-black dark:text-white max-w-6xl mx-auto select-text">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-14 sm:mb-16 md:mb-20 text-center">
        CLIENT <br /> TESTIMONIALS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14 md:gap-20 text-lg sm:text-xl font-light tracking-wide">
        {testimonials.map(({ name, title, quote }, i) => (
          <article key={i} className="space-y-4 sm:space-y-6 border-l-4 border-black dark:border-white pl-6 sm:pl-8">
            <blockquote className="italic leading-relaxed text-black dark:text-gray-200">&ldquo;{quote}&rdquo;</blockquote>
            <footer className="font-semibold uppercase tracking-widest text-sm sm:text-base">
              {name}, <span className="font-light normal-case opacity-80">{title}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
