"use client"

import React, { useState } from 'react'
import { Toggle } from '../toggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed h-16 top-0 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-100 dark:border-black z-50 select-text">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 sm:px-8 font-extrabold tracking-widest text-black dark:text-white">
        <a href="#" className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          sys<span className="text-gray-600 dark:text-gray-400">.</span>capital
        </a>

        <div className="flex items-center space-x-8">
          <nav className="hidden lg:flex space-x-8 text-xl">
            <a href="#software" className="hover:underline underline-offset-8 decoration-2 decoration-black dark:decoration-white transition">SOFTWARE</a>
            <a href="#services" className="hover:underline underline-offset-8 decoration-2 decoration-black dark:decoration-white transition">SERVICES</a>
            <a href="#products" className="hover:underline underline-offset-8 decoration-2 decoration-black dark:decoration-white transition">STORE</a>
            <a href="#about" className="hover:underline underline-offset-8 decoration-2 decoration-black dark:decoration-white transition">ABOUT</a>
            <a href="#contact" className="hover:underline underline-offset-8 decoration-2 decoration-black dark:decoration-white transition">CONTACT</a>
          </nav>
          
          <div className="hidden lg:block ml-4">
            <Toggle />
          </div>
        </div>

        <div className="flex items-center space-x-4 lg:hidden">
          <Toggle />
          <button 
            className="text-4xl font-black leading-none tracking-widest hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '×' : '≡'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-black uppercase font-black tracking-widest text-center py-8 space-y-10 text-2xl select-text">
          <a href="#software" className="block hover:underline decoration-black dark:decoration-white underline-offset-8 decoration-2">SOFTWARE</a>
          <a href="#services" className="block hover:underline decoration-black dark:decoration-white underline-offset-8 decoration-2">SERVICES</a>
          <a href="#products" className="block hover:underline decoration-black dark:decoration-white underline-offset-8 decoration-2">STORE</a>
          <a href="#about" className="block hover:underline decoration-black dark:decoration-white underline-offset-8 decoration-2">ABOUT</a>
          <a href="#contact" className="block hover:underline decoration-black dark:decoration-white underline-offset-8 decoration-2">CONTACT</a>
        </div>
      )}
    </header>
  )
}

export default Header
