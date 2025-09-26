"use client"

import React, { useState } from 'react'

const faqData = [
  {
    question: 'What kind of businesses can benefit from sys.capital?',
    answer: 'Our solutions are designed for all sizes, from small startups to large enterprises, across various industries.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a free trial to get hands-on experience with our CRM, ERP, POS, and HR software.'
  },
  {
    question: 'Do you provide hardware support?',
    answer: 'Absolutely. Our store offers premium business computers, POS hardware, thermal printers, and full support services.'
  },
  {
    question: 'Can I customize the software to fit my needs?',
    answer: 'Yes, we provide custom development services to tailor solutions specifically for your business.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white dark:bg-black py-24 px-6 max-w-4xl mx-auto text-black dark:text-white select-text">
      <h2 className="text-7xl font-extrabold uppercase tracking-tight mb-20 text-center">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <dl className="space-y-12">
        {faqData.map(({ question, answer }, i) => (
          <div 
            key={i} 
            className="cursor-pointer group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <dt className="text-3xl font-black uppercase tracking-wide mb-4 group-hover:opacity-80 transition-opacity">
              {question}
            </dt>
            <dd 
              className={`text-xl font-light tracking-wide transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === i 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              {answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default FAQ
