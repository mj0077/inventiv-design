
const HowItWorks = () => {
  const steps = [
    {
      title: "Connect Your Wallet",
      description: "Securely link your trading wallet to VTrend's platform with bank-level encryption and security protocols.",
      image: "🔗"
    },
    {
      title: "Set Up Your AI Assistant", 
      description: "Configure your personalized AI trading assistant with your risk preferences and investment goals.",
      image: "🤖"
    },
    {
      title: "Automate Your Trading",
      description: "Let our AI execute trades automatically based on market analysis and your predefined strategies.",
      image: "⚡"
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
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center hover:border-emerald-500/30 transition-colors">
                <div className="text-6xl mb-6">{step.image}</div>
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
