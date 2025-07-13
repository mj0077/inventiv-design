
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-light tracking-tight mb-8">About Inventiv</h1>
          <div className="space-y-8 text-gray-300 font-light leading-relaxed">
            <p className="text-xl">
              Inventiv was founded with a simple yet ambitious vision: to democratize access to sophisticated trading technology and level the playing field between retail traders and institutional investors.
            </p>
            
            <p>
              Our journey began when our founders, experienced traders and AI researchers, witnessed firsthand how traditional trading methods were being outpaced by algorithmic strategies used by hedge funds and investment banks. They realized that retail traders needed access to the same cutting-edge technology to remain competitive in modern markets.
            </p>
            
            <p>
              Today, Inventiv combines advanced machine learning algorithms with intuitive user interfaces, making AI-powered trading accessible to traders of all experience levels. Our platform processes millions of data points every second, identifying patterns and opportunities that would be impossible for human traders to detect manually.
            </p>
            
            <p>
              We're proud to serve thousands of traders worldwide, from beginners taking their first steps into automated trading to experienced professionals scaling their operations. Our commitment to innovation, security, and user success drives everything we do.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
