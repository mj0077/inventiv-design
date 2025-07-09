
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with automated trading",
      features: [
        "Basic AI trading signals",
        "Up to 3 active strategies",
        "Community support",
        "Basic analytics dashboard",
        "Mobile app access"
      ],
      recommended: false
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      description: "Advanced features for serious traders",
      features: [
        "Advanced AI trading algorithms",
        "Unlimited active strategies",
        "Priority support",
        "Advanced analytics & reporting",
        "API access",
        "Risk management tools",
        "Multi-exchange connectivity"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for institutions and high-volume traders",
      features: [
        "Custom AI model training",
        "Dedicated account manager",
        "White-label solutions",
        "Advanced compliance tools",
        "Custom integrations",
        "24/7 phone support",
        "SLA guarantees"
      ],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
            Select the perfect plan for your trading needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-900/30 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
              plan.recommended 
                ? 'border-emerald-500/50 shadow-2xl shadow-emerald-500/10' 
                : 'border-gray-700/50'
            }`}>
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-light">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light tracking-tight mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-light">{plan.price}</span>
                  <span className="text-gray-400 font-light">/{plan.period}</span>
                </div>
                <p className="text-gray-400 font-light">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 font-light">
                    <span className="text-emerald-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className={`w-full font-light transition-transform duration-200 hover:scale-105 ${
                plan.recommended
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600'
                  : 'bg-gray-800 hover:bg-gray-700 border border-gray-600'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
