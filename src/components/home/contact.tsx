"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const firstName = form.firstName.trim()
    const lastName = form.lastName.trim()
    const email = form.email.trim().toLowerCase()
    const company = form.company.trim()
    const interest = form.interest.trim()
    const message = form.message.trim()

    if (!firstName || !lastName || !email || !interest || !message) {
      setError('Please fill in all required fields.')
      return
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, company, interest, message }),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}))
        if (!res.ok) {
          throw new Error(data?.error || 'Message failed to send')
        }
        setSubmitted(true)
        setForm({ firstName: '', lastName: '', email: '', company: '', interest: '', message: '' })
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : 'Something went wrong. Please try again later.'
        setError(message)
      })
      .finally(() => setLoading(false))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28 md:py-32 px-6 sm:px-8 text-black dark:text-white max-w-5xl mx-auto select-text overflow-hidden rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=60"
        alt="Contact background"
        width={2000}
        height={1200}
        className="absolute inset-0 size-full object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90 dark:from-black/90 dark:via-black/80 dark:to-black/90" />

      <div className="relative">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-center mb-12 sm:mb-14 md:mb-16">
          GET IN TOUCH
        </h2>
        
        <p className="text-center text-sm sm:text-base font-light tracking-wide uppercase text-black/70 dark:text-white/70 mb-14 sm:mb-18 md:mb-24">
          Reach out to us to explore custom software solutions and premium business equipment.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14 md:gap-16 text-base sm:text-lg leading-relaxed">
          <div className="space-y-8">
            <div className="flex items-start gap-3">
              <Mail className="size-5 mt-0.5 text-sky-600" aria-hidden="true" />
              <div>
                <p className="uppercase tracking-widest opacity-60 dark:opacity-50 mb-1 text-xs sm:text-sm">Email</p>
                <p className="font-medium">contact@sys.capital</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="size-5 mt-0.5 text-emerald-600" aria-hidden="true" />
              <div>
                <p className="uppercase tracking-widest opacity-60 dark:opacity-50 mb-1 text-xs sm:text-sm">Phone</p>
                <p className="font-medium">+213 550 89 43 48</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-5 mt-0.5 text-purple-600" aria-hidden="true" />
              <div>
                <p className="uppercase tracking-widest opacity-60 dark:opacity-50 mb-1 text-xs sm:text-sm">Address</p>
                <p className="font-medium">Mohammadia Algiers, Algeria</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="size-5 mt-0.5 text-amber-600" aria-hidden="true" />
              <div>
                <p className="font-medium">24/7 Support Available</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="space-y-4 sm:space-y-6">
              <p className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-green-600 dark:text-green-400 text-center">
                Thank you for reaching out! 🎉
              </p>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 font-light tracking-wide">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full border-b-2 border-black dark:border-white/30 text-lg sm:text-xl uppercase py-2 focus:outline-none focus:ring-0 placeholder-black/30 dark:placeholder-white/30 bg-transparent transition-colors"
                required
                value={form.firstName}
                onChange={handleChange}
                aria-label="First Name"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full border-b-2 border-black dark:border-white/30 text-lg sm:text-xl uppercase py-2 focus:outline-none focus:ring-0 placeholder-black/30 dark:placeholder-white/30 bg-transparent transition-colors"
                required
                value={form.lastName}
                onChange={handleChange}
                aria-label="Last Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border-b-2 border-black dark:border-white/30 text-lg sm:text-xl uppercase py-2 focus:outline-none focus:ring-0 placeholder-black/30 dark:placeholder-white/30 bg-transparent transition-colors"
                required
                value={form.email}
                onChange={handleChange}
                aria-label="Email"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full border-b-2 border-black dark:border-white/30 text-lg sm:text-xl uppercase py-2 focus:outline-none focus:ring-0 placeholder-black/30 dark:placeholder-white/30 bg-transparent transition-colors"
                value={form.company}
                onChange={handleChange}
                aria-label="Company"
              />
              <div className="relative">
                <select
                  name="interest"
                  className="w-full border-b-2 border-black dark:border-white/30 text-lg sm:text-xl uppercase py-2 bg-transparent appearance-none focus:outline-none focus:ring-0 cursor-pointer pr-8"
                  required
                  value={form.interest}
                  onChange={handleChange}
                  aria-label="Interest"
                >
                  <option value="" disabled hidden>
                    Interest
                  </option>
                  <option value="crm">CRM Software</option>
                  <option value="erp">ERP System</option>
                  <option value="pos">POS Solution</option>
                  <option value="hr">HR Management</option>
                  <option value="hardware">Hardware & Equipment</option>
                  <option value="custom">Custom Development</option>
                </select>
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-black dark:text-white">▾</div>
              </div>
              <textarea
                rows={4}
                name="message"
                placeholder="Your Message"
                className="w-full border-b-2 border-black dark:border-white/30 text-lg sm:text-xl uppercase py-2 resize-none focus:outline-none focus:ring-0 placeholder-black/30 dark:placeholder-white/30 bg-transparent transition-colors"
                required
                value={form.message}
                onChange={handleChange}
                aria-label="Message"
              ></textarea>

              {error && (
                <p className="text-sm text-red-600 dark:text-red-400" role="status" aria-live="polite">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 text-black dark:text-white text-lg sm:text-xl font-extrabold uppercase tracking-widest border-2 sm:border-4 border-black dark:border-white py-3 sm:py-4 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                aria-busy={loading}
              >
                {loading ? 'Sending…' : 'Send Message'} <Send className="size-5" aria-hidden="true" />
              </button>
            </form>
          )}
          </div>
        </div>
    </section>
  )
}
export default Contact
