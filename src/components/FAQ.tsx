
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does VTrend's AI trading work?",
      answer: "VTrend uses advanced machine learning algorithms to analyze market data, identify patterns, and execute trades automatically based on your predefined strategies and risk parameters. Our AI processes thousands of data points in real-time to make informed trading decisions."
    },
    {
      question: "Is my money and data secure with VTrend?",
      answer: "Yes, security is our top priority. We use bank-level encryption, secure API connections, and never store your exchange credentials directly. Your funds remain in your own exchange accounts, and we only have permission to execute trades on your behalf."
    },
    {
      question: "Can I customize my trading strategies?",
      answer: "Absolutely! VTrend allows you to customize various parameters including risk tolerance, asset allocation, stop-loss levels, and trading frequency. You can also choose from pre-built strategies or create your own custom approaches."
    },
    {
      question: "What exchanges does VTrend support?",
      answer: "VTrend supports major exchanges including Binance, Coinbase Pro, Kraken, Bitfinex, and many others. We're constantly adding support for new exchanges based on user demand."
    },
    {
      question: "How much can I expect to earn?",
      answer: "Returns vary based on market conditions, your chosen strategies, and risk tolerance. While we can't guarantee profits, our users have historically seen improved performance compared to manual trading. Past performance doesn't guarantee future results."
    },
    {
      question: "Can I stop the AI trading at any time?",
      answer: "Yes, you have complete control. You can pause, stop, or modify your AI trading strategies at any time through our dashboard. You can also set up emergency stops and other safety measures."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-gray-900/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about VTrend.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <button
                className="w-full text-left p-6 hover:bg-gray-800/30 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-light">{faq.question}</span>
                <span className={`text-emerald-500 transition-transform ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 font-light leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
