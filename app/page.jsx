"use client"
import { Hero } from "../src/components/sections/Hero";
import { Overview1 } from "../src/components/sections/Overview1";
import { Overview2 } from "../src/components/sections/Overview2";
import { Features } from "../src/components/sections/Features";
import { Testimonial } from "../src/components/sections/Testimonial";
import { Pricing } from "../src/components/sections/Pricing";
import { Faq } from "../src/components/sections/Faq";
import { Footer } from "../src/components/Footer";
import { Planning } from "../src/components/sections/Planning";
import { NumberMetrics } from "../src/components/sections/NumberMetrics.jsx";

export default function Home() {
  return (
    <main className="max-h-screen">
      <Hero />
      <NumberMetrics/>
      <Overview1 />
      <Overview2 />
      <Features />
      <Testimonial />
      <Pricing />
      <Faq />
      <Planning />
      <Footer />
    </main>
  );
}
