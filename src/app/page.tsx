"use client";

import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import LazosServices from "@/components/LazosServices";
import Testimonials from "@/components/Testimonials";
import PackagesSection from "@/components/PackagesSection";
// import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import HeaderCrayola from "@/components/HeaderCrayola";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeaderCrayola />
      <HeroSection />
      <FeaturedProducts />
      <ValueProposition />
      <LazosServices />
      <Testimonials />
      <PackagesSection />
      {/* <WhyUsSection /> */}
      <ContactSection />
    </div>
  );
}
