
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Mission from "@/components/Mission";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="text-white min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedIn />
      <Testimonials />
      <HowItWorks />
      <Features />
      <Mission />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
