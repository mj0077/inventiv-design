
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            The Future of
            <br />
            Automated Trading
          </h1>
          <p className="text-xl text-gray-400 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Harness the power of AI to automate your trading strategies. Connect your wallet, 
            set up your AI assistant, and watch your portfolio grow with intelligent automation.
          </p>
          <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-light px-8 py-6 text-lg rounded-xl transition-transform duration-200 hover:scale-105">
            Get Started Today
          </Button>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
            <img 
              src="/lovable-uploads/dda0af0f-ecfb-40dd-a443-2e24934de26e.png" 
              alt="VTrend Dashboard Interface"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
