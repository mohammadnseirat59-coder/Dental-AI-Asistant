import CallToAction from "@/components/web/landing/CTA";
import Footer from "@/components/web/landing/Footer";
import Header from "@/components/web/landing/Header";
import Hero from "@/components/web/landing/Hero";
import HowItWorks from "@/components/web/landing/HowItWorks";
import Pricing from "@/components/web/landing/Pricing";
import WhatToAsk from "@/components/web/landing/WhatToAsk";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}
