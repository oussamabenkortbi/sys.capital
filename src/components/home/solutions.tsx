const Solutions = () => {
  const solutions = [
    { name: 'CRM', tagline: 'Customer Relationship Management', url: 'crm.sys.capital' },
    { name: 'ERP', tagline: 'Enterprise Resource Planning', url: 'erp.sys.capital' },
    { name: 'POS', tagline: 'Point of Sale Systems', url: 'pos.sys.capital' },
    { name: 'HR', tagline: 'Human Resources Management', url: 'hr.sys.capital' },
  ]

  return (
    <section id="software" className="bg-white dark:bg-black min-h-screen px-6 py-24 sm:py-28 md:py-32 text-black dark:text-white select-text">
      <div className="max-w-6xl mx-auto text-center space-y-16 sm:space-y-24 md:space-y-32">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight leading-[1.05]">
          OUR <br /> SOFTWARE <br /> SOLUTIONS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-16 md:gap-24 uppercase font-black tracking-widest text-3xl sm:text-4xl md:text-5xl">
          {solutions.map(({ name, tagline, url }) => (
            <a 
              key={name} 
              href={`https://${url}`} 
              className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visit ${name} solution page`}
            >
              <div className="mb-4">{name}</div>
              <div className="text-base sm:text-lg md:text-xl font-thin tracking-normal opacity-60 dark:opacity-70">{tagline}</div>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm font-light tracking-wide text-gray-600 dark:text-gray-400 lowercase">{url}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
