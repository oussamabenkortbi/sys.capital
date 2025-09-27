import Image from 'next/image'
import { Boxes, CreditCard, Users, BriefcaseBusiness } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Heading } from '@/components/typography/heading'
import { GradientText } from '@/components/typography/gradient-text'

const Solutions = () => {
  const solutions = [
    {
      name: 'CRM',
      tagline: 'Customer Relationship Management',
      url: 'crm.sys.capital',
      color: '#0ea5e9', // sky-500
      Icon: Users,
      image:
        'https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1600&q=60',
    },
    {
      name: 'ERP',
      tagline: 'Enterprise Resource Planning',
      url: 'erp.sys.capital',
      color: '#22c55e', // green-500
      Icon: Boxes,
      image:
        'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=1600&q=60',
    },
    {
      name: 'POS',
      tagline: 'Point of Sale Systems',
      url: 'pos.sys.capital',
      color: '#f59e0b', // amber-500
      Icon: CreditCard,
      image:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=60',
    },
    {
      name: 'HR',
      tagline: 'Human Resources Management',
      url: 'hr.sys.capital',
      color: '#a855f7', // purple-500
      Icon: BriefcaseBusiness,
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=60',
    },
  ] as const

  return (
    <section
      id="software"
      className="relative min-h-screen px-6 sm:px-8 py-24 sm:py-28 md:py-32 select-text overflow-hidden"
    >
      {/* Enhanced background with gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-violet-50/30 dark:from-slate-950 dark:via-black dark:to-violet-950/30" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-200/30 to-purple-200/30 dark:from-violet-800/20 dark:to-purple-800/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-sky-200/30 to-violet-200/30 dark:from-sky-800/20 dark:to-violet-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Subtle texture overlay */}
        <div className={`absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')]`} />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
        
        {/* Enhanced section header */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-400"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse delay-300"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse delay-600"></div>
              <div className="h-px w-12 bg-gradient-to-r from-pink-400 to-transparent"></div>
            </div>
            
            <Heading level={2} gradient className="group">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-2 transform transition-all duration-500 group-hover:scale-105">
                Our Software
              </span>
              <GradientText className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                <span className="relative">
                  Solutions
                  {/* Text glow effect */}
                  <div className="absolute inset-0 blur-lg opacity-20 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Solutions
                  </div>
                </span>
              </GradientText>
            </Heading>
          </div>
          
          {/* Enhanced subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed font-inter">
            Powerful business management systems designed for 
            <span className="font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mx-1">
              modern enterprises
            </span>
          </p>
        </div>

        {/* Enhanced solutions grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {solutions.map(({ name, tagline, url, color, Icon, image }, index) => (
            <div key={name} className="group relative">
              <Card className="relative overflow-hidden p-0 border-0 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm">
                <a
                  href={`https://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${name} solution page`}
                  className="block relative"
                >
                  {/* Enhanced image with overlay effects */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <Image
                      src={image}
                      alt={`${name} illustrative background`}
                      width={800}
                      height={600}
                      priority={false}
                      className="absolute inset-0 size-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    
                    {/* Multi-layered gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
                    
                    {/* Animated color overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"
                      style={{ backgroundColor: color }}
                    />
                    
                    {/* Hover glow effect */}
                    <div className="absolute -inset-2 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" style={{ backgroundColor: color }} />
                  </div>

                  <CardContent className="relative p-6 space-y-4">
                    {/* Enhanced icon with glow */}
                    <div className="relative inline-flex">
                      <div
                        className="relative size-12 flex items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{ backgroundColor: color }}
                      >
                        <Icon className="size-6 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                      </div>
                      {/* Icon glow effect */}
                      <div 
                        className="absolute inset-0 size-12 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                        style={{ backgroundColor: color }}
                      />
                    </div>

                    {/* Enhanced typography */}
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {name}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium leading-relaxed font-inter">
                        {tagline}
                      </p>
                      
                      {/* Enhanced URL with typing effect */}
                      <div className="inline-flex items-center space-x-2 font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse group-hover:bg-green-300"></div>
                        <span className="lowercase tracking-wider">{url}</span>
                      </div>
                    </div>

                    {/* Enhanced decorative line */}
                    <div className="pt-2">
                      <div className="h-1 w-16 rounded-full bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-500" />
                    </div>
                  </CardContent>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-violet-500/50 group-hover:to-purple-500/50 transition-all duration-300" />
                </a>
              </Card>

              {/* Card number badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 z-10">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center space-y-6 pt-8">
          <div className="flex justify-center items-center space-x-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
            <p className="text-slate-600 dark:text-slate-400 font-inter text-lg">
              Integrated • Scalable • Enterprise-Ready
            </p>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 animate-bounce delay-1000 opacity-40"></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-bounce delay-2000 opacity-40"></div>
      <div className="absolute bottom-32 right-20 w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-violet-400 animate-bounce delay-3000 opacity-40"></div>
      <div className="absolute bottom-1/4 left-20 w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-400 animate-bounce delay-4000 opacity-40"></div>
    </section>
  )
}

export default Solutions