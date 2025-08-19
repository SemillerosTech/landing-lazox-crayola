"use client";

import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import LazosServices from "@/components/LazosServices";
import Testimonials from "@/components/Testimonials";
import PackagesSection from "@/components/PackagesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <LazosServices />
      <Testimonials />
      <PackagesSection />
      <WhyUsSection />
      <ContactSection />
    </div>
  );
}
