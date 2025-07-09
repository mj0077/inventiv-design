
const FeaturedIn = () => {
  const publications = [
    "TechCrunch", "Forbes", "Wired", "Bloomberg", "Financial Times", "CoinDesk"
  ];

  return (
    <section id="featured" className="py-20 px-6 border-t border-gray-800/50">
      <div className="container mx-auto">
        <p className="text-center text-gray-400 font-light mb-12 tracking-wide">
          FEATURED IN
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {publications.map((pub, index) => (
            <div key={index} className="text-2xl font-light tracking-tight text-gray-300 hover:text-white transition-colors">
              {pub}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
