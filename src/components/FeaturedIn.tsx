
const FeaturedIn = () => {
  const publications = [
    "TechCrunch", "Forbes", "Wired", "Bloomberg", "Financial Times", "CoinDesk",
    "Venture Beat", "The Wall Street Journal", "Reuters", "Business Insider", 
    "Cointelegraph", "Yahoo Finance", "MarketWatch", "CNBC", "Fast Company"
  ];

  return (
    <section id="featured" className="py-20 px-6 border-t border-gray-800/50">
      <div className="container mx-auto">
        <p className="text-center text-gray-400 font-light mb-12 tracking-wide">
          FEATURED IN
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-12 slide-animation">
            {/* First set */}
            {publications.map((pub, index) => (
              <div key={index} className="text-2xl font-light tracking-tight text-gray-300 hover:text-white transition-colors whitespace-nowrap flex-shrink-0">
                {pub}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {publications.map((pub, index) => (
              <div key={`duplicate-${index}`} className="text-2xl font-light tracking-tight text-gray-300 hover:text-white transition-colors whitespace-nowrap flex-shrink-0">
                {pub}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
