import { Hero } from "../src/components/sections/Hero";
import { Overview1 } from "../src/components/sections/Overview1";
import { Overview2 } from "../src/components/sections/Overview2";
import { Features } from "../src/components/sections/Features";
import { Testimonial } from "../src/components/sections/Testimonial";
import { Pricing } from "../src/components/sections/Pricing";
import { Faq } from "../src/components/sections/Faq";



export default function Home() {
  return (
    <main>
      <Hero/>
      <Overview1/>
      <Overview2/>
      <Features/>
      <Testimonial/>
      <Pricing/>
      <Faq/>
    </main>
  );
}