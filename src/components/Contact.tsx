import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to optimize your infrastructure, enhance security, or explore our innovative solutions? 
          Reach out to us today for a free consultation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Contact */}
          <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 rounded-full bg-gradient-primary mb-4">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                Email Us
              </CardTitle>
              <CardDescription className="text-base">
                Drop us a message for any inquiries or to book a consultation
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-medium mb-4 break-all">
                engg.mahendra.singh@gmail.com
              </p>
              <Button 
                variant="default" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.location.href = 'mailto:engg.mahendra.singh@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </CardContent>
          </Card>
          
          {/* LinkedIn Contact */}
          <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 rounded-full bg-gradient-primary mb-4">
                <Linkedin className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                LinkedIn
              </CardTitle>
              <CardDescription className="text-base">
                Connect with us professionally on LinkedIn
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-medium mb-4">
                Mahendra Singh
              </p>
              <Button 
                variant="outline" 
                className="border-primary/20 hover:bg-primary/10 transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/mahendra-singh-4731052a/', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Button 
            size="lg" 
            variant="outline"
            className="group border-primary/20 hover:bg-primary/10 transition-all duration-300"
            onClick={() => window.location.href = 'mailto:engg.mahendra.singh@gmail.com?subject=Free AWS Cost Analysis Request'}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Request Cost Analysis
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="group border-primary/20 hover:bg-primary/10 transition-all duration-300"
            onClick={() => window.location.href = 'mailto:engg.mahendra.singh@gmail.com?subject=Security Scan Request'}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Security Scan
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-8">
          All consultations and initial assessments are completely free of charge
        </p>
      </div>
    </section>
  );
};

export default Contact;