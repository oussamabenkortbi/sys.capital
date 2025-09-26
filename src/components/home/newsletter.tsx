"use client"

import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      // Integration logic here: send email to newsletter API/backend
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-white dark:bg-black py-24 px-6 max-w-4xl mx-auto text-black dark:text-white select-text text-center">
      <h2 className="text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-8">
        STAY UPDATED
      </h2>
      <p className="text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto opacity-80 dark:opacity-70">
        Subscribe to sys.capital newsletter for the latest updates on software releases, hardware offers, and business solutions.
      </p>

      {submitted ? (
        <div className="space-y-4">
          <p className="text-2xl font-semibold uppercase tracking-wide text-green-600 dark:text-green-400">
            Thank you for subscribing! 🎉
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            You&#39;ll receive our next update soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <div className="flex-grow relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full text-lg md:text-xl uppercase font-light tracking-wide px-6 py-4 border-2 border-black dark:border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-black/40 dark:placeholder-white/40 bg-transparent transition-all"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-black dark:text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="px-8 py-4 text-lg md:text-xl font-extrabold uppercase tracking-widest border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300 flex-shrink-0"
            >
              SUBSCRIBE
            </button>
          </div>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </section>
  )
}

export default Newsletter
