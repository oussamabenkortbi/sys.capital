import Image from 'next/image'
import { Rocket, Layers } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen mt-6 flex flex-col justify-center items-center bg-white dark:bg-black px-6 sm:px-8 text-black dark:text-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=60"
        alt="Abstract business systems background"
        width={2000}
        height={1200}
        priority
        className="absolute inset-0 size-full object-cover object-center opacity-70 dark:opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-black dark:via-black/70" />

      <div className="relative max-w-5xl text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight mb-8 select-text">
          BUSINESS
          <br />
          <span className="block mt-2 text-gray-700 dark:text-gray-300">MANAGEMENT</span>
          <br />
          <span className="block mt-2 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-emerald-500 to-purple-500">
            SOLUTIONS
          </span>
        </h1>

        <p className="font-light text-xl sm:text-2xl max-w-3xl mx-auto tracking-wide uppercase text-black/80 dark:text-white/80 leading-relaxed">
          CRM | ERP | POS | HR <br />
          SOFTWARE & HARDWARE FOR ALGERIAN BUSINESSES
        </p>
      </div>

      <div className="relative mt-16 sm:mt-24 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <a
          href="#software"
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black transition"
        >
          <Rocket className="size-4" aria-hidden="true" /> Explore Software
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wider bg-white/80 dark:bg-black/60 text-black dark:text-white ring-1 ring-gray-300 dark:ring-gray-700 hover:bg-white/90 dark:hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black transition"
        >
          <Layers className="size-4" aria-hidden="true" /> Our Services
        </a>
      </div>
    </section>
  )
}

export default Hero

