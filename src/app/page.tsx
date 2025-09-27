"use client"

import Hero from "@/components/home/hero";
import Solutions from "@/components/home/solutions";
import Services from "@/components/home/services";
import FeaturedProducts from "@/components/home/products";
import About from "@/components/home/about";
import Testimonials from "@/components/home/testimonials";
import BlogHighlights from "@/components/home/blog";
import FAQ from "@/components/home/faq";
import CTA from "@/components/home/cta";
import Newsletter from "@/components/home/newsletter";
import Contact from "@/components/home/contact";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white select-text overflow-x-hidden min-h-screen">
      <Header />

      <main className="pt-12">
        <Hero />
        <Solutions />
        <Services />
        <FeaturedProducts />
        <About />
        <Testimonials />
        <BlogHighlights />
        <FAQ />
        <CTA />
        <Newsletter />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
