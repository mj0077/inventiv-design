
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light tracking-tight mb-8">Get In Touch</h1>
            <p className="text-xl text-gray-400 font-light">
              Have questions about VTrend? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light tracking-tight mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-light mb-2">Email</h3>
                  <p className="text-gray-400 font-light">hello@vtrend.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-2">Support</h3>
                  <p className="text-gray-400 font-light">support@vtrend.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-2">Business</h3>
                  <p className="text-gray-400 font-light">business@vtrend.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-light mb-2 block">Name</label>
                  <Input className="bg-gray-800/50 border-gray-600 text-white" />
                </div>
                <div>
                  <label className="text-sm font-light mb-2 block">Email</label>
                  <Input type="email" className="bg-gray-800/50 border-gray-600 text-white" />
                </div>
                <div>
                  <label className="text-sm font-light mb-2 block">Subject</label>
                  <Input className="bg-gray-800/50 border-gray-600 text-white" />
                </div>
                <div>
                  <label className="text-sm font-light mb-2 block">Message</label>
                  <Textarea className="bg-gray-800/50 border-gray-600 text-white min-h-32" />
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 font-light">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
