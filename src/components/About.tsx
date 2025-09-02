import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Innovating for a
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Better Future</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Denrish Group, we believe technology should serve humanity. Our mission extends beyond 
              traditional IT services to create meaningful impact through innovation.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Heart className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Compassionate Innovation</h3>
                  <p className="text-muted-foreground">
                    Our physiotherapy robot for disabled children represents our commitment to using AI and robotics for social good.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Community First</h3>
                  <p className="text-muted-foreground">
                    We provide free services to help organizations optimize costs and enhance security, believing in giving back to the community.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Trophy className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Empowering Growth</h3>
                  <p className="text-muted-foreground">
                    Through our training programs and internships, we nurture the next generation of tech professionals.
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary/20 hover:bg-primary/10"
              onClick={() => window.location.href = 'mailto:engg.mahendra.singh@gmail.com'}
            >
              Learn More About Our Mission
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right Content - Stats/Highlights */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-hero border-0 hover:shadow-card transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    100% Free
                  </div>
                  <p className="text-muted-foreground">
                    AWS Cost Analysis & Security Scans
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-gradient-hero border-0 hover:shadow-card transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    AI + Robotics
                  </div>
                  <p className="text-muted-foreground">
                    Innovative Healthcare Solutions
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-gradient-hero border-0 hover:shadow-card transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    Students First
                  </div>
                  <p className="text-muted-foreground">
                    Free Training & Internship Programs
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;