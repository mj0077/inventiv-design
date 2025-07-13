
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-20 px-8 relative min-h-screen">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-left relative z-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              The Future of
              <br />
              Automated Trading
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
              Harness the power of AI to automate your trading strategies. Connect your wallet, 
              set up your AI assistant, and watch your portfolio grow with intelligent automation.
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-light px-8 py-6 text-lg rounded-xl transition-transform duration-200 hover:scale-105">
              Get Started Today
            </Button>
          </div>

          {/* Right Column - 3D Design with Top-Right Lighting */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/30 via-emerald-400/20 to-transparent blur-3xl rounded-full z-10"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-bl from-green-300/40 via-emerald-300/25 to-transparent blur-2xl rounded-full z-10"></div>
            
            <div className="w-full max-w-lg h-96 lg:h-[600px] relative z-20 -translate-y-[65px]">
              <iframe src='https://my.spline.design/particles-aWBzRWlpCB769fCbmlRv6AB0/' frameBorder='0' width='100%' height='100%'></iframe>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-4xl mx-auto mt-20 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
            <img 
              src="/lovable-uploads/5974bbee-8215-4ad8-be0f-f26fdb1a8942.png" 
              alt="Inventiv Dashboard Interface"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
