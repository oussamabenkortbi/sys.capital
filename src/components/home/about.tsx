import Image from 'next/image'
import { Building2, Award, Headphones } from 'lucide-react'
import { Heading } from '@/components/typography/heading'
import { GradientText } from '@/components/typography/gradient-text'

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-28 md:py-32 px-6 sm:px-8 select-text overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=60"
          alt="Team collaborating in a modern office"
          width={2000}
          height={1200}
          className="absolute inset-0 size-full object-cover object-center opacity-20 scale-105 animate-slow-zoom"
        />
        
        {/* Multi-layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-white/95 to-teal-50/90 dark:from-emerald-950/60 dark:via-black/90 dark:to-teal-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/98 via-transparent to-transparent dark:from-black/98 dark:via-transparent dark:to-transparent" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 dark:from-emerald-800/20 dark:to-teal-800/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-200/30 to-cyan-200/30 dark:from-teal-800/20 dark:to-cyan-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center space-y-16 sm:space-y-20 md:space-y-24">
        
        {/* Enhanced section header with dramatic typography */}
        <div className="space-y-8">
          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 animate-pulse delay-300"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 animate-pulse delay-600"></div>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>
          
          <Heading level={2} gradient className="group space-y-2">
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white transform transition-all duration-500 group-hover:scale-105">
              Empowering
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 dark:text-slate-200 transform transition-all duration-500 group-hover:scale-105">
              <span className="inline-block hover:animate-bounce delay-75">A</span>
              <span className="inline-block hover:animate-bounce delay-100">l</span>
              <span className="inline-block hover:animate-bounce delay-125">g</span>
              <span className="inline-block hover:animate-bounce delay-150">e</span>
              <span className="inline-block hover:animate-bounce delay-175">r</span>
              <span className="inline-block hover:animate-bounce delay-200">i</span>
              <span className="inline-block hover:animate-bounce delay-225">a</span>
              <span className="inline-block hover:animate-bounce delay-250">n</span>
              <span className="mx-3"></span>
              <span className="inline-block hover:animate-bounce delay-300">b</span>
              <span className="inline-block hover:animate-bounce delay-325">u</span>
              <span className="inline-block hover:animate-bounce delay-350">s</span>
              <span className="inline-block hover:animate-bounce delay-375">i</span>
              <span className="inline-block hover:animate-bounce delay-400">n</span>
              <span className="inline-block hover:animate-bounce delay-425">e</span>
              <span className="inline-block hover:animate-bounce delay-450">s</span>
              <span className="inline-block hover:animate-bounce delay-475">s</span>
              <span className="inline-block hover:animate-bounce delay-500">e</span>
              <span className="inline-block hover:animate-bounce delay-525">s</span>
            </span>
            <GradientText className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              <span className="relative">
                Since 2020
                {/* Text glow effect */}
                <div className="absolute inset-0 blur-lg opacity-30 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                  Since 2020
                </div>
              </span>
            </GradientText>
          </Heading>
        </div>

        {/* Enhanced description with better typography */}
        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-slate-700 dark:text-slate-300 font-inter">
            <span className="font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              sys.capital
            </span>
            {' '}provides world-class management software and premium hardware tailored to local business needs
          </p>
          
          {/* Enhanced service breakdown */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-lg font-medium">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-slate-700 dark:text-slate-300 font-inter">CRM</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-teal-200/50 dark:border-teal-700/50">
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <span className="text-slate-700 dark:text-slate-300 font-inter">ERP</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-100 to-emerald-100 dark:from-cyan-900/30 dark:to-emerald-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span className="text-slate-700 dark:text-slate-300 font-inter">POS</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-slate-700 dark:text-slate-300 font-inter">HR</span>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed font-inter">
            Integrating comprehensive solutions with 
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mx-1">
              expert services
            </span>
            and reliable support.
          </p>
        </div>

        {/* Enhanced statistics with premium design */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 md:gap-20">
          {[
            { Icon: Building2, value: '100+', label: 'Happy Clients', color: 'emerald', gradient: 'from-emerald-500 to-teal-500' },
            { Icon: Award, value: '5+', label: 'Years Experience', color: 'teal', gradient: 'from-teal-500 to-cyan-500' },
            { Icon: Headphones, value: '24/7', label: 'Support', color: 'cyan', gradient: 'from-cyan-500 to-emerald-500' }
          ].map(({ Icon, value, label, color, gradient }, index) => (
            <div key={index} className="group text-center space-y-6">
              {/* Enhanced icon with glow effects */}
              <div className="relative inline-flex">
                <div className={`relative size-16 flex items-center justify-center rounded-2xl shadow-xl bg-gradient-to-r ${gradient} group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <Icon className="size-8 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </div>
                {/* Icon glow effect */}
                <div className={`absolute inset-0 size-16 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-r ${gradient}`} />
              </div>

              {/* Enhanced statistics typography */}
              <div className="space-y-3">
                <div className="relative">
                  <p className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${gradient} group-hover:bg-clip-text transition-all duration-500`}>
                    {value}
                  </p>
                  
                  {/* Number glow effect */}
                  <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                    {value}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="uppercase text-sm sm:text-base font-bold text-slate-600 dark:text-slate-400 tracking-[0.2em] group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 font-inter">
                    {label}
                  </p>
                  
                  {/* Decorative line that expands */}
                  <div className="mx-auto">
                    <div className="h-1 w-12 rounded-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                      <div className={`absolute top-0 left-0 h-full w-0 rounded-full group-hover:w-full transition-all duration-700 bg-gradient-to-r ${gradient}`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistic badge */}
              <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-${color}-50 to-${color}-100 dark:from-${color}-900/20 dark:to-${color}-900/30 px-3 py-1 rounded-full backdrop-blur-sm border border-${color}-200/50 dark:border-${color}-700/50`}>
                <div className={`w-1.5 h-1.5 rounded-full bg-${color}-400 animate-pulse`}></div>
                <span className={`text-xs font-medium text-${color}-700 dark:text-${color}-300 font-inter`}>
                  {index === 0 ? 'Trusted' : index === 1 ? 'Experienced' : 'Available'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center space-y-6 pt-8">
          <div className="flex justify-center items-center space-x-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
            <p className="text-lg font-inter text-slate-600 dark:text-slate-400 font-light">
              <span className="font-semibold">Local Expertise</span> • <span className="font-semibold">Global Standards</span>
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>
          </div>
          
          {/* Company founding highlight */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 px-6 py-3 rounded-full backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300 font-inter">
              Proudly Algerian • Est. 2020
            </span>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-16 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-bounce delay-1000 opacity-30"></div>
      <div className="absolute top-2/3 right-20 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-bounce delay-2000 opacity-30"></div>
      <div className="absolute bottom-40 left-24 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 animate-bounce delay-3000 opacity-30"></div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default About