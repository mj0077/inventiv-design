
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md bg-gray-950/80 border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/64a7a3fe-02b0-4c68-850e-763391c88eca.png" 
              alt="VTrend Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors font-light">
              Home
            </button>
            <button onClick={() => scrollToSection('featured')} className="text-gray-300 hover:text-white transition-colors font-light">
              Featured
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors font-light">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-white transition-colors font-light">
              How It Works
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors font-light">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors font-light">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white transition-colors font-light">
              FAQ
            </button>
          </div>

          <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-light px-6">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
