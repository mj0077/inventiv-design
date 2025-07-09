
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      content: "VTrend's AI assistant has completely transformed my trading strategy. The automation is seamless and the results speak for themselves.",
      result: "+342% Portfolio Growth",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Day Trader",
      content: "I was skeptical about AI trading, but VTrend proved me wrong. The precision and speed of execution is unmatched.",
      result: "+128% Monthly Returns",
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Investment Manager",
      content: "The insights provided by VTrend's AI have given our firm a significant competitive advantage in volatile markets.",
      result: "+89% YTD Performance",
      avatar: "EJ"
    },
    {
      name: "David Kim",
      role: "Algorithmic Trader",
      content: "VTrend combines the best of human intuition with AI precision. It's the future of trading, available today.",
      result: "+275% Annual Growth",
      avatar: "DK"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
            See how VTrend has transformed trading strategies for thousands of users
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-gray-900/30 backdrop-blur-sm border border-gray-700/50">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-12 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-light text-lg mx-auto mb-6">
                    {testimonial.avatar}
                  </div>
                  <blockquote className="text-xl font-light text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="mb-4">
                    <div className="text-white font-light text-lg">{testimonial.name}</div>
                    <div className="text-gray-400 font-light">{testimonial.role}</div>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full px-6 py-2">
                    <span className="text-emerald-400 font-light">{testimonial.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-emerald-500' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
