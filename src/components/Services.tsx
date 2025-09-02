import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Shield, 
  GraduationCap, 
  Settings, 
  Brain, 
  Bot 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: "AWS Cost Analysis",
      description: "Free comprehensive AWS cost optimization analysis and recommendations to help your organization reduce cloud expenses significantly.",
      badge: "Free Service",
      badgeVariant: "default" as const
    },
    {
      icon: Shield,
      title: "Security Infrastructure Scan",
      description: "Complimentary security assessment of your infrastructure to identify vulnerabilities and provide actionable security recommendations.",
      badge: "Free Service",
      badgeVariant: "default" as const
    },
    {
      icon: GraduationCap,
      title: "Student Training & Internships",
      description: "Free training programs and internship opportunities for college students to gain hands-on experience in cutting-edge technologies.",
      badge: "Free Program",
      badgeVariant: "secondary" as const
    },
    {
      icon: Settings,
      title: "CI/CD Automation",
      description: "End-to-end CI/CD pipeline setup using Terraform, Jenkins, SonarQube, and integrated security scanning for seamless deployments.",
      badge: "Professional",
      badgeVariant: "outline" as const
    },
    {
      icon: Brain,
      title: "AI/ML Skill Development",
      description: "Comprehensive skill development programs for young graduates in Artificial Intelligence and Machine Learning with practical experience.",
      badge: "Career Program",
      badgeVariant: "secondary" as const
    },
    {
      icon: Bot,
      title: "Physiotherapy Robot",
      description: "Revolutionary AI-powered physiotherapy robot designed specifically for disabled children, combining robotics with compassionate care.",
      badge: "Innovation",
      badgeVariant: "destructive" as const
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI and infrastructure solutions designed to empower businesses and individuals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;