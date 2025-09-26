import Hero from "@/components/home/hero";
import Solutions from "@/components/home/solutions";
import Services from "@/components/home/services";
import FeaturedProducts from "@/components/home/products";
import About from "@/components/home/about";
import Team from "@/components/home/team";
import Testimonials from "@/components/home/testimonials";
import Partners from "@/components/home/partners";
import BlogHighlights from "@/components/home/blog";
import FAQ from "@/components/home/faq";
import CTA from "@/components/home/cta";
import Newsletter from "@/components/home/newsletter";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main className="pt-8">
      <Hero />
      <Solutions />
      <Services />
      <FeaturedProducts />
      <About />
      <Team />
      <Testimonials />
      <Partners />
      <BlogHighlights />
      <FAQ />
      <CTA />
      <Newsletter />
      <Contact />
    </main>
  );
}
