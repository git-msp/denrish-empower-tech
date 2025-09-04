import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg-green.jpg";
// import logo from "@/assets/Denirshreallogo-removebg-preview (2).png";
import { downloadPageAsPDF } from "@/utils/pdfDownload";
import { toast } from "sonner";
import Navbar from "./Navbar";

const Hero = () => {
  const handleDownloadPDF = async () => {
    toast.loading("Generating PDF...");
    const success = await downloadPageAsPDF("denrish-group-website");

    if (success) {
      toast.success("PDF downloaded successfully!");
    } else {
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

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

      {/*Navbar at the very top */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* ✅ Navbar */}

        {/* Hero text */}
        <div className="max-w-4xl mx-auto px-6 text-center mt-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Denrish Group
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            AI-Powered Solutions for Modern Business
          </p>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Free AWS cost optimization, security scans, and innovative AI
            solutions including physiotherapy robots for disabled children
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              onClick={() =>
                (window.location.href = "mailto:engg.mahendra.singh@gmail.com")
              }
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/10 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mahendra-singh-4731052a/",
                  "_blank"
                )
              }
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>

            <Button
              onClick={handleDownloadPDF}
              variant="outline"
              size="lg"
              className="border-white/30 text-black hover:bg-white/10 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
