const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-black py-24 sm:py-28 md:py-32 px-6 text-black dark:text-white select-text">
      <div className="max-w-5xl mx-auto text-center space-y-10 sm:space-y-14 md:space-y-16">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight uppercase leading-[1.05]">
          EMPOWERING <br />
          ALGERIAN BUSINESSES <br />
          SINCE 2020
        </h2>

        <p className="text-base sm:text-lg md:text-xl font-light max-w-4xl mx-auto tracking-widest opacity-60 dark:opacity-70 leading-relaxed">
          sys.capital provides world-class management software and premium hardware tailored<br />
          to local business needs — integrating CRM, ERP, POS & HR solutions with expert<br />
          services and reliable support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 md:gap-24 text-center">
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2">100+</p>
            <p className="uppercase text-xs sm:text-sm font-semibold opacity-70 dark:opacity-80 tracking-wide">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2">5+</p>
            <p className="uppercase text-xs sm:text-sm font-semibold opacity-70 dark:opacity-80 tracking-wide">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2">24/7</p>
            <p className="uppercase text-xs sm:text-sm font-semibold opacity-70 dark:opacity-80 tracking-wide">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
