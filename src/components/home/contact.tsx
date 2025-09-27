"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Heading } from '@/components/typography/heading'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

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
    <section id="contact" className="relative py-24 sm:py-28 md:py-32 px-6 sm:px-8 max-w-7xl mx-auto select-text overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 dark:border-black/10 shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=60"
          alt="Contact background"
          width={2000}
          height={1200}
          className="absolute inset-0 size-full object-cover object-center opacity-12 scale-105 animate-slow-zoom"
        />
        
        {/* Multi-layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/90 via-white/95 to-cyan-50/90 dark:from-teal-950/60 dark:via-black/90 dark:to-cyan-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/98 via-transparent to-transparent dark:from-black/98 dark:via-transparent dark:to-transparent" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-200/30 to-cyan-200/30 dark:from-teal-800/20 dark:to-cyan-800/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 dark:from-cyan-800/20 dark:to-blue-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Subtle wave pattern overlay */}
        <div className={`absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000" fill-opacity="0.05"%3E%3Cpath d="M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243L8.2 0H5.373zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657l1.415 1.414L13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM6.686 0L0 6.686 1.414 8.1 8.1 1.414 6.686 0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]`} />
      </div>

      <div className="relative space-y-16 sm:space-y-20 md:space-y-24">
        
        {/* Enhanced section header */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-teal-400"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse delay-300"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 animate-pulse delay-600"></div>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>
            </div>
            
            <Heading level={2} gradient className="group">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white transform transition-all duration-500 group-hover:scale-105">
                Get in
                <span className="mx-3 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent font-black">
                  Touch
                </span>
              </span>
            </Heading>
          </div>
          
          {/* Enhanced subtitle */}
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed font-inter">
              Reach out to explore 
              <span className="font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mx-1">
                custom software solutions
              </span>
              and premium business equipment
            </p>
            
            {/* Contact methods overview */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm font-medium">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 px-3 py-1 rounded-full backdrop-blur-sm border border-teal-200/50 dark:border-teal-700/50">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span className="text-slate-700 dark:text-slate-300 font-inter">Email</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 px-3 py-1 rounded-full backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-slate-700 dark:text-slate-300 font-inter">Phone</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 px-3 py-1 rounded-full backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-slate-700 dark:text-slate-300 font-inter">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          
          {/* Enhanced contact information */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-8">
                Contact Information
              </h3>
              
              {[
                { Icon: Mail, label: 'Email', value: 'contact@sys.capital', color: 'sky', gradient: 'from-sky-500 to-blue-500' },
                { Icon: Phone, label: 'Phone', value: '+213 550 89 43 48', color: 'emerald', gradient: 'from-emerald-500 to-teal-500' },
                { Icon: MapPin, label: 'Address', value: 'Mohammadia Algiers, Algeria', color: 'purple', gradient: 'from-purple-500 to-violet-500' },
                { Icon: Clock, label: 'Support', value: '24/7 Support Available', color: 'amber', gradient: 'from-amber-500 to-orange-500' }
              ].map(({ Icon, label, value, color, gradient }, index) => (
                <div key={index} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                  {/* Enhanced icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`relative size-12 flex items-center justify-center rounded-2xl shadow-lg bg-gradient-to-r ${gradient} group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                      <Icon className="size-6 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    </div>
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 size-12 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-r ${gradient}`} />
                  </div>

                  {/* Enhanced content */}
                  <div className="flex-1 space-y-1">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300 font-inter">
                      {label}
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--${color}-500), var(--${color}-600))` }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact stats */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 p-6 rounded-2xl backdrop-blur-sm border border-teal-200/50 dark:border-teal-700/50">
              <h4 className="text-lg font-bold text-teal-700 dark:text-teal-300 mb-4 font-inter">
                Response Time
              </h4>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium font-inter">
                  Typically within 2 hours during business days
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced form section */}
          <div className="relative">
            {submitted ? (
              <div className="text-center space-y-8 p-8 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200/50 dark:border-green-700/50">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-green-700 dark:text-green-300">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-inter">
                    Thank you for reaching out. We'll get back to you within 2 business hours.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-8">
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Enhanced form inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        aria-label="First Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-black/80 backdrop-blur-sm focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 group-hover:border-teal-300 dark:group-hover:border-teal-600"
                      />
                    </div>
                    <div className="relative group">
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        aria-label="Last Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-black/80 backdrop-blur-sm focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 group-hover:border-teal-300 dark:group-hover:border-teal-600"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={handleChange}
                      aria-label="Email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-black/80 backdrop-blur-sm focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 group-hover:border-teal-300 dark:group-hover:border-teal-600"
                    />
                  </div>

                  <div className="relative group">
                    <Input
                      type="text"
                      name="company"
                      placeholder="Company Name (Optional)"
                      value={form.company}
                      onChange={handleChange}
                      aria-label="Company"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-black/80 backdrop-blur-sm focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 group-hover:border-teal-300 dark:group-hover:border-teal-600"
                    />
                  </div>

                  <div className="relative group">
                    <select
                      name="interest"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-black/80 backdrop-blur-sm focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 group-hover:border-teal-300 dark:group-hover:border-teal-600 cursor-pointer text-slate-900 dark:text-white"
                      required
                      value={form.interest}
                      onChange={handleChange}
                      aria-label="Interest"
                    >
                      <option value="" disabled hidden>
                        What are you interested in?
                      </option>
                      <option value="crm">CRM Software</option>
                      <option value="erp">ERP System</option>
                      <option value="pos">POS Solution</option>
                      <option value="hr">HR Management</option>
                      <option value="hardware">Hardware & Equipment</option>
                      <option value="custom">Custom Development</option>
                    </select>
                  </div>

                  <div className="relative group">
                    <Textarea
                      rows={4}
                      name="message"
                      placeholder="Tell us about your project or requirements..."
                      required
                      value={form.message}
                      onChange={handleChange}
                      aria-label="Message"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-black/80 backdrop-blur-sm focus:border-teal-400 dark:focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 group-hover:border-teal-300 dark:group-hover:border-teal-600 resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                      <p className="text-sm text-red-600 dark:text-red-400" role="status" aria-live="polite">
                        {error}
                      </p>
                    </div>
                  )}

                  {/* Enhanced submit button */}
                  <div className="relative group">
                    <Button 
                      type="submit" 
                      disabled={loading} 
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-500 hover:via-cyan-500 hover:to-blue-500 border-0 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 text-white font-semibold text-lg tracking-wide"
                      aria-busy={loading}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <span className="font-inter">
                          {loading ? 'Sending Message...' : 'Send Message'}
                        </span>
                        <div className="relative">
                          <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                          {!loading && (
                            <div className="absolute inset-0 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                              <Send className="w-5 h-5" aria-hidden="true" />
                            </div>
                          )}
                        </div>
                      </div>
                    </Button>
                    {/* Button glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div className="text-center space-y-6 pt-8">
                    <div className="flex justify-center items-center space-x-8">
                      <div className="h-px w-24 bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>
                      <p className="text-lg font-inter text-slate-600 dark:text-slate-400 font-light">
                        <span className="font-semibold">Professional</span> • <span className="font-semibold">Responsive</span> • <span className="font-semibold">Reliable</span>
                      </p>
                      <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"></div>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-16 w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-bounce delay-1000 opacity-30"></div>
      <div className="absolute top-2/3 left-20 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-bounce delay-2000 opacity-30"></div>
      <div className="absolute bottom-32 right-24 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 animate-bounce delay-3000 opacity-30"></div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.08); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 35s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Contact