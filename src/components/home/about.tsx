import Image from 'next/image'
import { Building2, Award, Headphones } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-28 md:py-32 px-6 sm:px-8 text-black dark:text-white select-text overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=60"
        alt="Team collaborating in a modern office"
        width={2000}
        height={1200}
        className="absolute inset-0 size-full object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/90 dark:from-black dark:via-black/70 dark:to-black/80" />

      <div className="relative max-w-5xl mx-auto text-center space-y-10 sm:space-y-14 md:space-y-16">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[1.05]">
          EMPOWERING <br />
          ALGERIAN BUSINESSES <br />
          SINCE 2020
        </h2>

        <p className="text-base sm:text-lg md:text-xl font-light max-w-4xl mx-auto tracking-widest text-black/80 dark:text-white/80 leading-relaxed">
          sys.capital provides world-class management software and premium hardware tailored
          to local business needs — integrating CRM, ERP, POS & HR solutions with expert
          services and reliable support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 md:gap-24 text-center">
          <div>
            <div className="mx-auto mb-3 inline-flex size-10 items-center justify-center rounded-full bg-sky-500 text-white">
              <Building2 className="size-5" aria-hidden="true" />
            </div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2">100+</p>
            <p className="uppercase text-xs sm:text-sm font-semibold opacity-80 tracking-wide">Happy Clients</p>
          </div>
          <div>
            <div className="mx-auto mb-3 inline-flex size-10 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Award className="size-5" aria-hidden="true" />
            </div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2">5+</p>
            <p className="uppercase text-xs sm:text-sm font-semibold opacity-80 tracking-wide">Years Experience</p>
          </div>
          <div>
            <div className="mx-auto mb-3 inline-flex size-10 items-center justify-center rounded-full bg-purple-500 text-white">
              <Headphones className="size-5" aria-hidden="true" />
            </div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2">24/7</p>
            <p className="uppercase text-xs sm:text-sm font-semibold opacity-80 tracking-wide">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
