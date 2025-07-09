
const HowItWorks = () => {
  const steps = [
    {
      title: "Connect Your Wallet",
      description: "Securely link your trading wallet to VTrend's platform with bank-level encryption and security protocols.",
      image: "/lovable-uploads/78c5993b-40bf-4f0a-85de-e8dfdfdd5722.png"
    },
    {
      title: "Set Up Your AI Assistant", 
      description: "Configure your personalized AI trading assistant with your risk preferences and investment goals.",
      image: "/lovable-uploads/5ed17b0e-fbc5-4081-90a1-e4dbe70b5183.png"
    },
    {
      title: "Automate Your Trading",
      description: "Let our AI execute trades automatically based on market analysis and your predefined strategies.",
      image: "/lovable-uploads/931a747c-e006-481c-92a6-6a2fce0e8315.png"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-900/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
            Get started with VTrend in three simple steps and begin your journey to automated trading success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center hover:border-emerald-500/30 transition-all duration-300 hover:scale-102">
                <div className="flex justify-center mb-6">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-light text-sm">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-light tracking-tight mb-4">{step.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
