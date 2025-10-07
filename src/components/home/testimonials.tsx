import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Heading } from '@/components/typography/heading'

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
    <section className="relative py-24 px-6 sm:px-8 max-w-7xl mx-auto select-text overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=60"
          alt="Team meeting background"
          width={2000}
          height={1200}
          className="absolute inset-0 size-full object-cover object-center opacity-15 scale-105 animate-slow-zoom"
        />
        
        {/* Multi-layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/95 to-purple-50/80 dark:from-blue-950/40 dark:via-black/90 dark:to-purple-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent dark:from-black/95 dark:via-transparent dark:to-transparent" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 dark:from-blue-800/15 dark:to-indigo-800/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-800/15 dark:to-pink-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Subtle hexagon pattern overlay */}
        <div className={`absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]`} />
      </div>

      <div className="relative space-y-16 sm:space-y-20 md:space-y-24">
        
        {/* Enhanced section header */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse delay-300"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse delay-600"></div>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-transparent"></div>
            </div>
            
            <Heading level={2} gradient className="group">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white transform transition-all duration-500 group-hover:scale-105">
                Client
                <span className="mx-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-black">
                  Testimonials
                </span>
              </span>
            </Heading>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed font-inter">
              Hear from businesses that have transformed their operations with
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mx-1">
                our solutions
              </span>
            </p>
          </div>
        </div>

        {/* Enhanced testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {testimonials.map(({ name, title, quote }, i) => {
            const colors = [
              { bg: '#0ea5e9', gradient: 'from-sky-500 to-blue-500', light: 'from-sky-50 to-blue-50', dark: 'from-sky-900/20 to-blue-900/20' },
              { bg: '#22c55e', gradient: 'from-green-500 to-emerald-500', light: 'from-green-50 to-emerald-50', dark: 'from-green-900/20 to-emerald-900/20' },
              { bg: '#a855f7', gradient: 'from-purple-500 to-violet-500', light: 'from-purple-50 to-violet-50', dark: 'from-purple-900/20 to-violet-900/20' }
            ]
            const colorScheme = colors[i % colors.length]
            
            return (
              <div key={i} className="group relative">
                <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/95 dark:bg-black/95 backdrop-blur-sm h-full">
                  
                  {/* Enhanced accent border with glow */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-xl bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${colorScheme.bg}, ${colorScheme.bg}90)` }}>
                    <div className="absolute inset-0 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: colorScheme.bg }} />
                  </div>

                  <CardContent className="relative p-8 sm:p-10 space-y-6 h-full flex flex-col">
                    
                    {/* Enhanced quote icon with background */}
                    <div className="relative">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg bg-gradient-to-r ${colorScheme.gradient} group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                        <Quote className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                      </div>
                      {/* Quote icon glow effect */}
                      <div className={`absolute inset-0 w-12 h-12 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-r ${colorScheme.gradient}`} />
                    </div>

                    {/* Enhanced quote text */}
                    <div className="flex-1 space-y-4">
                      <blockquote className="text-xl sm:text-2xl font-light leading-relaxed text-slate-700 dark:text-slate-300 italic group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300 font-inter">
                        <span className="text-3xl font-bold text-slate-400 dark:text-slate-600 mr-1">&quot;</span>
                        {quote}
                        <span className="text-3xl font-bold text-slate-400 dark:text-slate-600 ml-1">&quot;</span>
                      </blockquote>
                      
                      {/* Quote highlight line */}
                      <div className="w-16 h-1 rounded-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                        <div className={`absolute top-0 left-0 h-full w-0 rounded-full group-hover:w-full transition-all duration-700 bg-gradient-to-r ${colorScheme.gradient}`} />
                      </div>
                    </div>

                    {/* Enhanced author section */}
                    <footer className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center space-x-3">
                        {/* Author avatar placeholder */}
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${colorScheme.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <span className="text-white font-bold text-sm">
                            {name.charAt(0)}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <p className="text-lg font-bold tracking-wide text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: i === 0 ? 'linear-gradient(to right, #0ea5e9, #3b82f6)' : i === 1 ? 'linear-gradient(to right, #22c55e, #10b981)' : 'linear-gradient(to right, #a855f7, #8b5cf6)' }}>
                            {name}
                          </p>
                          <p className="text-sm font-light text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300 font-inter">
                            {title}
                          </p>
                        </div>
                      </div>
                      
                      {/* Client type badge */}
                      <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${colorScheme.light} dark:${colorScheme.dark} px-3 py-1 rounded-full backdrop-blur-sm border border-opacity-50`} style={{ borderColor: colorScheme.bg + '30' }}>
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: colorScheme.bg }}></div>
                        <span className="text-xs font-medium font-inter" style={{ color: colorScheme.bg }}>
                          {i === 0 ? 'Technology' : i === 1 ? 'Retail' : 'Manufacturing'}
                        </span>
                      </div>
                    </footer>
                  </CardContent>

                  {/* Testimonial number badge */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-white/20 dark:border-black/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-slate-600 dark:text-slate-400 font-bold text-xs font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Card glow effect */}
                  <div className={`absolute -inset-2 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 bg-gradient-to-r ${colorScheme.gradient}`} />
                </Card>
              </div>
            )
          })}
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center space-y-6 pt-8">
          <div className="flex justify-center items-center space-x-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            <p className="text-lg font-inter text-slate-600 dark:text-slate-400 font-light">
              <span className="font-semibold">Trusted</span> • <span className="font-semibold">Proven</span> • <span className="font-semibold">Recommended</span>
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>
          
          {/* Client satisfaction indicator */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 px-6 py-3 rounded-full backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
              ))}
            </div>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300 font-inter">
              100% Client Satisfaction
            </span>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-40 left-16 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 animate-bounce delay-1000 opacity-30"></div>
      <div className="absolute top-2/3 right-20 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-bounce delay-2000 opacity-30"></div>
      <div className="absolute bottom-32 left-24 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-bounce delay-3000 opacity-30"></div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Testimonials