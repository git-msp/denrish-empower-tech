import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg-green.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Additional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
          Denrish Group
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
          AI-Powered Solutions for Modern Business
        </p>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Free AWS cost optimization, security scans, and innovative AI solutions including physiotherapy robots for disabled children
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            onClick={() => window.location.href = 'mailto:engg.mahendra.singh@gmail.com'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:bg-primary/10 transition-all duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/mahendra-singh-4731052a/', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;