import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white select-text overflow-x-hidden min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
