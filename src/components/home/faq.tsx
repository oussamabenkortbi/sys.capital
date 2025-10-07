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
    question: "ما هي أنواع الأعمال التي يمكنها الاستفادة من خدمات كابيتال؟",
    answer:
      "حلولنا مصممة لتناسب جميع أحجام الأعمال، من المشاريع الناشئة الصغيرة إلى المؤسسات الكبرى، وتخدم مختلف القطاعات والصناعات",
  },
  {
    question: "هل تقدمون فترة تجريبية مجانية؟",
    answer:
      "نعم، نوفر فترة تجريبية مجانية تتيح لك تجربة واستكشاف أنظمة CRM و ERP و POS و HR الخاصة بنا قبل اتخاذ القرار",
  },
  {
    question: "هل تقدمون دعماً فنياً للأجهزة والمعدات؟",
    answer:
      "بالتأكيد. متجرنا يوفر أجهزة الأعمال الاحترافية وأنظمة POS والطابعات الحرارية، مع خدمات دعم فني شاملة ومتواصلة",
  },
  {
    question: "هل يمكن تخصيص الأنظمة حسب احتياجات مشروعي؟",
    answer:
      "نعم، نقدم خدمات تطوير مخصصة لتصميم حلول متكاملة تناسب متطلبات عملك بشكل دقيق",
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
              <p className="text-base sm:text-lg font-light tracking-wide text-foreground/80">
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
