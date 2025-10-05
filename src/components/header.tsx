"use client";

import React, { useState } from 'react';
import { Toggle } from './toggle';
import { Menu, X } from 'lucide-react';
import SysCapitalLogo from './home/logo';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/typography/gradient-text';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Software', href: '#software' },
    { name: 'Services', href: '#services' },
    { name: 'Store', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 select-none">
      {/* Glassmorphism backdrop with enhanced blur */}
      <div className="relative bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl backdrop-saturate-150 border-b border-gray-200/50 dark:border-white/10">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600" />
        
        {/* Subtle noise texture overlay */}
        <div className={`absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')]`} />

        <div className="relative max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo section */}
          <a 
            href="#" 
            className="group relative flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label="Sys.Capital Home"
          >
            <div className="w-full h-full flex items-center justify-center">
              <SysCapitalLogo />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className="group relative px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                      >
                        <span className="relative z-10 flex items-center gap-1.5">
                          {item.name}
                          {item.name === 'Store' && (
                            <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                              New
                            </span>
                          )}
                        </span>
                        <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Divider */}
            <span className="mx-4 h-6 w-px bg-gray-200 dark:bg-gray-800" />
            
            {/* Theme Toggle */}
            <div className="relative group">
              <Toggle />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            
            {/* CTA Button */}
            <Button
              asChild
              className="ml-2 bg-gradient-to-r rounded-b-2xl from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <a href="#contact">
                Get Started
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="container mx-auto px-6 py-24">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-medium text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  {item.name}
                </a>
              ))}
              <Button
                asChild
                size="lg"
                className="mt-8 w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-lg py-6 shadow-lg"
              >
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;