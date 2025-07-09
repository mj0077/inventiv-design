
const Features = () => {
  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze market trends and patterns 24/7",
      icon: "🧠"
    },
    {
      title: "Real-Time Execution",
      description: "Lightning-fast trade execution with millisecond precision for optimal entry and exit points",
      icon: "⚡"
    },
    {
      title: "Risk Management",
      description: "Intelligent risk assessment and portfolio protection with customizable safety parameters",
      icon: "🛡️"
    },
    {
      title: "Multi-Asset Support",
      description: "Trade across multiple asset classes including crypto, stocks, forex, and commodities",
      icon: "📊"
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Powerful Features
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
            Everything you need to succeed in today's fast-paced trading environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-light tracking-tight mb-4">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
