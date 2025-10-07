import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Heading } from "@/components/typography/heading";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative text-white py-16 sm:py-20 px-6 sm:px-8 select-text text-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=60"
        alt="Team collaborating"
        width={2000}
        height={1200}
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/80" />

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <Heading level={2} gradient>
            <span>جاهز لتطوير مشروعك؟</span>
          </Heading>
        </div>
        <p
          className="text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto tracking-wide text-white/90"
        >
          🚀 ابدأ رحلة النجاح مع كابيتال - حلول متكاملة في الإدارة، التسيير،
          والتجهيزات المتخصصة
        </p>
        <Button asChild size="lg">
          <a href="#contact" className="inline-flex items-center gap-2">
            <span>ابدأ الآن</span>{" "}
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
