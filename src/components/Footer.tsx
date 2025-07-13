
const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-gray-800/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/64a7a3fe-02b0-4c68-850e-763391c88eca.png" 
                alt="Inventiv Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Democratizing AI-powered trading for everyone. Join thousands of traders already using Inventiv to automate their success.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors font-light">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors font-light">Pricing</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors font-light">How It Works</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors font-light">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors font-light">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors font-light">Contact</a></li>
              <li><a href="/blogs" className="text-gray-400 hover:text-white transition-colors font-light">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-light">
            © 2024 Inventiv. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
