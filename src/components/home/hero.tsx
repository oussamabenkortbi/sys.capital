const Hero = () => {
  return (
    <section className="min-h-screen mt-6 flex flex-col justify-center items-center bg-white dark:bg-black px-6 text-black dark:text-white">
      <div className="max-w-5xl text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight mb-8 select-text">
          BUSINESS
          <br />
          <span className="text-gray-700 dark:text-gray-300 block mt-2">MANAGEMENT</span> 
          <br />
          <span className="text-black/80 dark:text-white/80 block mt-2 tracking-widest">SOLUTIONS</span>
        </h1>

        <p className="font-light text-xl sm:text-2xl max-w-3xl mx-auto tracking-wide uppercase opacity-70 dark:opacity-80 leading-relaxed">
          CRM | ERP | POS | HR <br />
          SOFTWARE & HARDWARE FOR ALGERIAN BUSINESSES
        </p>
      </div>

      <div className="mt-24 flex justify-center gap-16 uppercase font-semibold tracking-wider text-sm">
        <a href="#software" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition">Explore Software</a>
        <a href="#services" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition">Our Services</a>
        <a href="#products" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition">Store</a>
      </div>
    </section>
  )
}

export default Hero
