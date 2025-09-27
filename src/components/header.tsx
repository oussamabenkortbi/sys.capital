"use client"

import React, { useState } from 'react'
import { Toggle } from './toggle'
import { Menu, X } from 'lucide-react'
import SysCapitalLogo from './home/logo'
import { Button } from '@/components/ui/button'
import { GradientText } from '@/components/typography/gradient-text'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 select-text">
      {/* Glassmorphism backdrop with enhanced blur */}
      <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/20 dark:border-white/10">
        
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 opacity-60 animate-pulse" />
        
        {/* Subtle noise texture overlay */}
        <div className={`absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')]`} />

        <div className="relative max-w-7xl mx-auto flex items-center justify-between py-5 px-6 sm:px-8">
          
          {/* Logo section with enhanced typography */}
          <a href="#" className="group relative tracking-tight leading-none transition-all duration-300 flex items-center gap-4 hover:scale-105">
            <div className="relative">
              <SysCapitalLogo />
              {/* Logo glow effect */}
              <div className="absolute inset-0 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <SysCapitalLogo />
              </div>
            </div>
            <span className="sr-only">Sys.Capital</span>
          </a>

          {/* Desktop Navigation with enhanced typography */}
          <div className="flex items-center space-x-10">
            <div className="hidden lg:flex items-center gap-8">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="#software" className="group relative px-4 py-2 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105">
                        <span className="relative z-10 font-inter">Software</span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="#services" className="group relative px-4 py-2 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105">
                        <span className="relative z-10 font-inter">Services</span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="#products" className="group relative px-4 py-2 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105">
                        <span className="relative z-10 font-inter">Store</span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="#about" className="group relative px-4 py-2 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105">
                        <span className="relative z-10 font-inter">About</span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="#contact" className="group relative px-4 py-2 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105">
                        <span className="relative z-10 font-inter">Contact</span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              {/* Elegant divider */}
              <span className="hidden xl:inline-block h-6 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
              
              {/* Enhanced CTA Button */}
              <div className="relative group">
                <Button variant="gradient" className="relative overflow-hidden !px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <GradientText className="relative z-10 text-sm font-semibold tracking-wide text-white font-inter">
                    Launch a Project
                  </GradientText>
                  {/* Button glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
                </Button>
              </div>
            </div>
            
            {/* Theme toggle with enhanced styling */}
            <div className="hidden lg:block ml-6">
              <div className="relative group">
                <Toggle />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>
          </div>

          {/* Mobile menu controls */}
          <div className="flex items-center space-x-4 lg:hidden">
            <div className="relative group">
              <Toggle />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <button 
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 group hover:scale-105"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isMenuOpen ? 
                <X className="w-6 h-6 text-slate-700 dark:text-slate-300 relative z-10 transition-transform duration-300 rotate-90 group-hover:rotate-180" aria-hidden="true" /> : 
                <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300 relative z-10 transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden relative">
          {/* Mobile menu backdrop */}
          <div className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-t border-white/20 dark:border-white/10" />
          
          {/* Mobile menu content */}
          <div className="relative text-center py-8 space-y-6 select-text">
            <div className="space-y-4">
              <a href="#software" className="group block py-3 px-6 text-lg font-medium tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 font-inter">
                <span className="relative">
                  Software
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </span>
              </a>
              <a href="#services" className="group block py-3 px-6 text-lg font-medium tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 font-inter">
                <span className="relative">
                  Services
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </span>
              </a>
              <a href="#products" className="group block py-3 px-6 text-lg font-medium tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 font-inter">
                <span className="relative">
                  Store
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </span>
              </a>
              <a href="#about" className="group block py-3 px-6 text-lg font-medium tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 font-inter">
                <span className="relative">
                  About
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </span>
              </a>
              <a href="#contact" className="group block py-3 px-6 text-lg font-medium tracking-wide text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 font-inter">
                <span className="relative">
                  Contact
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </span>
              </a>
            </div>
            
            {/* Mobile CTA */}
            <div className="pt-4">
              <div className="relative group inline-block">
                <Button variant="gradient" className="relative overflow-hidden !px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <GradientText className="relative z-10 text-base font-semibold tracking-wide text-white font-inter">
                    Launch a Project
                  </GradientText>
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header