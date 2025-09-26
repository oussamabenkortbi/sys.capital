"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Mail } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by rendering only after the component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const trimmed = email.trim().toLowerCase()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)
    fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: trimmed }),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}))
        if (!res.ok) {
          throw new Error(data?.error || 'Subscription failed')
        }
        setSubmitted(true)
        setEmail('')
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : 'Something went wrong. Please try again later.'
        setError(message)
      })
      .finally(() => setLoading(false))
  }

  return (
    <section className="relative bg-white dark:bg-black py-24 px-6 sm:px-8 max-w-4xl mx-auto text-black dark:text-white select-text text-center overflow-hidden rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800">
      <Image
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=60"
        alt="Subtle code background"
        width={1600}
        height={900}
        className="absolute inset-0 size-full object-cover object-center opacity-10"
        priority
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90 dark:from-black/90 dark:via-black/80 dark:to-black/90" />

      <div className="relative">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight mb-6 sm:mb-8">
          STAY UPDATED
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-light tracking-wide mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto text-black/80 dark:text-white/80">
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
                  placeholder="Enter your email"
                  className="w-full text-lg lg:text-xl uppercase font-light tracking-wide pl-12 pr-6 py-4 border-2 border-black dark:border-white/30 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder-black/40 dark:placeholder-white/40 bg-transparent transition-all"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-black/60 dark:text-white/50 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 text-lg lg:text-xl font-extrabold uppercase tracking-widest border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300 flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'SUBSCRIBING…' : 'SUBSCRIBE'}
              </button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="status" aria-live="polite">
                {error}
              </p>
            )}
            <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter

