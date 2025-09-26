import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="relative text-white py-16 sm:py-20 px-6 sm:px-8 select-text text-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=60"
        alt="Team collaborating"
        width={2000}
        height={1200}
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/80" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-widest mb-6 sm:mb-8">
          READY TO ELEVATE YOUR BUSINESS?
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto tracking-wide text-white/90">
          Experience seamless management and growth with sys.capital&#39;s integrated software and hardware solutions.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border-2 sm:border-4 border-white uppercase font-extrabold tracking-widest px-8 sm:px-12 md:px-14 py-4 sm:py-5 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-black transition-colors duration-300"
        >
          Get Started Now <ArrowRight className="size-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default CTA
