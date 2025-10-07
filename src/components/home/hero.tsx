"use client"
import Image from 'next/image'
import { Rocket, Layers } from 'lucide-react'
import { Heading } from '@/components/typography/heading'
import { GradientText } from '@/components/typography/gradient-text'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative min-h-screen mt-6 flex flex-col justify-center items-center overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=60"
          alt="Abstract business systems background"
          width={2000}
          height={1200}
          priority
          className="absolute inset-0 size-full object-cover object-center opacity-40 dark:opacity-30 scale-105 animate-slow-zoom"
        />
        
        {/* Multi-layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 via-white/90 to-purple-50/80 dark:from-violet-950/40 dark:via-black/85 dark:to-purple-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent dark:from-black/95 dark:via-transparent dark:to-transparent" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-violet-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Subtle noise texture */}
        <div className={`absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')]`} />
      </div>

      {/* Main content with enhanced typography */}
      <div className="relative max-w-6xl px-6 sm:px-8 text-center space-y-8 z-10">
        
        {/* Enhanced heading with dramatic typography */}
        <div className="space-y-2">
          <Heading level={1} gradient className="mb-6 group">
            <span className="block text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white transform transition-all duration-700 group-hover:scale-105">
              <span className="inline-block hover:animate-bounce delay-75">B</span>
              <span className="inline-block hover:animate-bounce delay-100">u</span>
              <span className="inline-block hover:animate-bounce delay-125">s</span>
              <span className="inline-block hover:animate-bounce delay-150">i</span>
              <span className="inline-block hover:animate-bounce delay-175">n</span>
              <span className="inline-block hover:animate-bounce delay-200">e</span>
              <span className="inline-block hover:animate-bounce delay-225">s</span>
              <span className="inline-block hover:animate-bounce delay-250">s</span>
            </span>
            
            <span className="block text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-slate-800 dark:text-slate-100 transform transition-all duration-700 group-hover:scale-105 mt-2">
              <span className="inline-block hover:animate-bounce delay-300">M</span>
              <span className="inline-block hover:animate-bounce delay-325">a</span>
              <span className="inline-block hover:animate-bounce delay-350">n</span>
              <span className="inline-block hover:animate-bounce delay-375">a</span>
              <span className="inline-block hover:animate-bounce delay-400">g</span>
              <span className="inline-block hover:animate-bounce delay-425">e</span>
              <span className="inline-block hover:animate-bounce delay-450">m</span>
              <span className="inline-block hover:animate-bounce delay-475">e</span>
              <span className="inline-block hover:animate-bounce delay-500">n</span>
              <span className="inline-block hover:animate-bounce delay-525">t</span>
            </span>
            
            <div className="relative mt-6">
              <div className="relative">
                {/* Border layer - created with multiple text-shadows */}
                <div className="absolute inset-0">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-transparent" 
                        style={{
                          textShadow: [
                            '0.5px 0 0 #777',
                            '-0.5px 0 0 #777',
                            '0 0.5px 0 #777',
                            '0 -0.5px 0 #777',
                            '0.5px 0.5px 0 #777',
                            '-0.5px -0.5px 0 #777',
                            '0.5px -0.5px 0 #777',
                            '-0.5px 0.5px 0 #777',
                            '0.5px 0.5px 2px rgba(0,0,0,0.2)'
                          ].join(',')
                        }}>
                    Solutions
                  </span>
                </div>
                {/* Main gradient text */}
                <GradientText className="relative z-10 text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-violet-500 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  Solutions
                </GradientText>
              </div>
            </div>
          </Heading>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4 mt-8 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-400"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 animate-pulse"></div>
            <div className="h-px w-32 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse delay-500"></div>
            <div className="h-px w-16 bg-gradient-to-r from-pink-400 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced subtitle with better typography */}
        <div className="relative max-w-4xl mx-auto">
          <p className="font-light text-xl sm:text-2xl lg:text-3xl tracking-wide text-slate-700 dark:text-slate-300 leading-relaxed font-inter">
            <span className="relative inline-block">
              <span className="font-medium text-slate-900 dark:text-white">CRM</span>
              <span className="mx-2 text-violet-500">•</span>
              <span className="font-medium text-slate-900 dark:text-white">ERP</span>
              <span className="mx-2 text-purple-500">•</span>
              <span className="font-medium text-slate-900 dark:text-white">POS</span>
              <span className="mx-2 text-pink-500">•</span>
              <span className="font-medium text-slate-900 dark:text-white">HR</span>
            </span>
            <br className="sm:hidden" />
            <span className="block sm:inline mt-2 sm:mt-0 sm:ml-3">
              systems tailored for 
              <span className="relative mx-2 font-semibold">
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  ambitious businesses
                </span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 opacity-60"></div>
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Enhanced CTA buttons with premium styling */}
      <div className="relative mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 z-10 px-6 sm:px-8">
        
        {/* Primary CTA */}
        <div className="group relative">
          <Button asChild size="lg" className="relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 border-0 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
            <a href="#software" className="inline-flex items-center gap-3 text-white font-semibold text-lg tracking-wide relative z-10">
              <div className="relative">
                <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" aria-hidden="true" />
                <div className="absolute inset-0 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <Rocket className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
              <span className="font-inter">Explore Software</span>
            </a>
          </Button>
          {/* Button glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
        </div>

        {/* Secondary CTA */}
        <div className="group relative">
          <Button asChild variant="outline" size="lg" className="relative overflow-hidden px-8 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <a href="#services" className="inline-flex items-center gap-3 text-slate-900 dark:text-white font-semibold text-lg tracking-wide relative z-10 group-hover:text-purple-600 dark:group-hover:text-purple-400">
              <div className="relative">
                <Layers className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" aria-hidden="true" />
                <div className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 text-purple-500">
                  <Layers className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
              <span className="font-inter">Our Services</span>
            </a>
          </Button>
          {/* Subtle glow for secondary button */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-200 to-violet-200 dark:from-purple-800 dark:to-violet-800 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute bottom-20 left-10 w-4 h-4 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 animate-bounce delay-1000 opacity-60"></div>
      <div className="absolute top-40 right-16 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-bounce delay-2000 opacity-60"></div>
      <div className="absolute bottom-40 right-20 w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-violet-400 animate-bounce delay-3000 opacity-60"></div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero