const Services = () => {
  const services = [
    { title: 'WEB DEVELOPMENT', sub: 'Custom apps & systems', description: 'React, Node.js, API Integration' },
    { title: 'MOBILE DEVELOPMENT', sub: 'iOS & Android apps', description: 'React Native, Flutter, Deployment' },
    { title: 'SYSTEM INTEGRATION', sub: 'Connect & automate', description: 'API, Data Migration, Workflow' },
    { title: 'SUPPORT & MAINTENANCE', sub: '24/7 expert help', description: 'Priority response, updates, training' }
  ]

  return (
    <section id="services" className="bg-white dark:bg-black py-24 sm:py-28 md:py-32 px-6 sm:px-8 text-black dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-24">
        {services.map(({ title, sub, description }, i) => (
          <div key={i} className="flex flex-col select-text">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3 sm:mb-4">{title}</h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold uppercase mb-4 sm:mb-6 tracking-widest opacity-70 dark:opacity-80">{sub}</h3>
            <p className="text-base sm:text-lg md:text-xl font-light tracking-wide opacity-60 dark:opacity-70">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
