"use client"

import React from 'react'
import { HelpCircle } from 'lucide-react'
import { Heading } from '@/components/typography/heading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

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
  return (
    <section className="bg-white dark:bg-black py-24 px-6 sm:px-8 max-w-4xl mx-auto text-black dark:text-white select-text">
      <div className="text-center mb-14 sm:mb-16 md:mb-20">
        <Heading level={2} gradient>
          Frequently Asked Questions
        </Heading>
      </div>
      <Accordion type="single" collapsible className="rounded-2xl border border-[hsl(var(--border))] overflow-hidden">
        {faqData.map(({ question, answer }, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="px-5 sm:px-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] mt-1">
                  <HelpCircle className="size-4" aria-hidden="true" />
                </span>
                <span className="text-xl sm:text-2xl font-semibold tracking-wide text-foreground">{question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6">
              <p className="text-base sm:text-lg font-light tracking-wide text-foreground/80">{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default FAQ
