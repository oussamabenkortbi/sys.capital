const CTA = () => {
  return (
    <section className="bg-black dark:bg-black text-white py-16 sm:py-20 px-6 select-text text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest mb-6 sm:mb-8">
          READY TO ELEVATE YOUR BUSINESS?
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto tracking-wide opacity-90">
          Experience seamless management and growth with sys.capital&#39;s integrated software and hardware solutions.
        </p>
        <a 
          href="#contact" 
          className="inline-block border-2 sm:border-4 border-white uppercase font-extrabold tracking-widest px-8 sm:px-12 md:px-14 py-4 sm:py-5 hover:bg-white hover:text-black transition-colors duration-300"
        >
          GET STARTED NOW
        </a>
      </div>
    </section>
  )
}

export default CTA
