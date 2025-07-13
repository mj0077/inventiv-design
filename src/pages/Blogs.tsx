
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI Trading: Trends to Watch in 2024",
      excerpt: "Explore the latest developments in artificial intelligence and how they're reshaping the trading landscape for retail and institutional investors alike.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI Trading"
    },
    {
      id: 2,
      title: "Risk Management Strategies for Automated Trading",
      excerpt: "Learn essential risk management techniques to protect your portfolio while maximizing the benefits of algorithmic trading systems.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Risk Management"
    },
    {
      id: 3,
      title: "Getting Started with Inventiv: A Beginner's Guide",
      excerpt: "Step-by-step instructions for new users to set up their first AI trading strategy and start their automated trading journey with confidence.",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Tutorial"
    },
    {
      id: 4,
      title: "Market Analysis: How AI Interprets Complex Patterns",
      excerpt: "Dive deep into how machine learning algorithms analyze market data to identify profitable trading opportunities that humans might miss.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Market Analysis"
    }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light tracking-tight mb-8">Inventiv Blog</h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Insights, tutorials, and market analysis from our team of trading experts and AI researchers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-light">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-light tracking-tight mb-4 leading-tight">
                  <Link to={`/blog/${post.id}`} className="hover:text-emerald-400 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 font-light">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
