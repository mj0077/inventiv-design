
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 relative">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto mb-16 relative z-20">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            The Future of
            <br />
            Automated Trading
          </h1>
          <p className="text-xl text-gray-400 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Harness the power of AI to automate your trading strategies. Connect your wallet, 
            set up your AI assistant, and watch your portfolio grow with intelligent automation.
          </p>
          <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-light px-8 py-6 text-lg rounded-xl transition-transform duration-200 hover:scale-105">
            Get Started Today
          </Button>
        </div>
        
        {/* Spline 3D Background */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
          <div className="w-full h-96 opacity-60">
            <iframe 
              src='https://my.spline.design/holoblobs-kWL3XblGuBNYnwxM5Jsh6rox/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              title="3D Background Animation"
            />
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
            <img 
              src="/lovable-uploads/5974bbee-8215-4ad8-be0f-f26fdb1a8942.png" 
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
