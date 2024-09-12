import React from "react";

import FeaturesSection from "../components/Features";
import HowItWorksSection from "../components/HowItWorks";
import TestimonialsSection from "../components/Testimonials";
import CallToActionSection from "../components/CTA";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
