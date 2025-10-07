"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { Heading } from "@/components/typography/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "ما هي أنواع الأعمال التي يمكنها الاستفادة من كابيتال؟",
    answer:
      "حلولنا مصممة لجميع الأحجام، من الشركات الناشئة الصغيرة إلى المؤسسات الكبيرة، عبر مختلف الصناعات والقطاعات",
  },
  {
    question: "هل توفرون فترة تجريبية مجانية؟",
    answer:
      "نعم، نوفر فترة تجريبية مجانية للحصول على تجربة عملية مع برامج CRM و ERP و POS و HR الخاصة بنا",
  },
  {
    question: "هل تقدمون دعم للأجهزة والعتاد؟",
    answer:
      "بالتأكيد. متجرنا يوفر أجهزة كمبيوتر الأعمال المتميزة، أجهزة POS، طابعات حرارية، وخدمات دعم كاملة",
  },
  {
    question: "هل يمكنني تخصيص البرامج لتناسب احتياجاتي؟",
    answer: "نعم، نوفر خدمات تطوير مخصصة لتصميم حلول خاصة بعملك بالضبط",
  },
];

const FAQ = () => {
  return (
    <section className="bg-white dark:bg-black py-24 px-6 sm:px-8 max-w-4xl mx-auto text-black dark:text-white select-text">
      <div className="text-center mb-14 sm:mb-16 md:mb-20">
        <Heading level={2} gradient>
          <span>الأسئلة الشائعة</span>
        </Heading>
      </div>
      <Accordion
        type="single"
        collapsible
        className="rounded-2xl border border-[hsl(var(--border))] overflow-hidden"
      >
        {faqData.map(({ question, answer }, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="px-5 sm:px-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] mt-1">
                  <HelpCircle className="size-4" aria-hidden="true" />
                </span>
                <span className="text-xl sm:text-2xl font-semibold tracking-wide text-foreground">
                  {question}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6">
              <p
                className="text-base sm:text-lg font-light tracking-wide text-foreground/80"
              >
                {answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
