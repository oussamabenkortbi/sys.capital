import Header from "@/components/home/header";
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
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white select-text overflow-x-hidden min-h-screen">
      <Header />

      <main className="pt-16">
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

      <Footer />
    </div>
  );
}
