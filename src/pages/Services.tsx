import { Code, Globe, Brain, Smartphone, Cloud, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements.",
      features: ["Enterprise Applications", "Desktop Software", "API Development", "System Integration"]
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Modern, responsive web applications using cutting-edge frameworks and technologies.",
      features: ["React/Next.js Applications", "Progressive Web Apps", "E-commerce Platforms", "CMS Solutions"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that learn and adapt, transforming your business processes.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots & Virtual Assistants"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["React Native Apps", "Flutter Development", "App Store Optimization", "Mobile UI/UX Design"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["AWS/Azure/GCP", "Microservices Architecture", "DevOps & CI/CD", "Cloud Migration"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance Solutions", "Security Training"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive technology solutions designed to elevate your business to new dimensions of success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title} 
                  className={`group glow-border hover:border-primary/50 transition-all duration-300 ${
                    index % 3 === 0 ? 'animate-slide-in-left' :
                    index % 3 === 1 ? 'animate-fade-in animation-delay-200' :
                    'animate-slide-in-right animation-delay-400'
                  }`}
                >
                  <CardHeader>
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 glow-border">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision, requirements, and goals." },
              { step: "02", title: "Planning", description: "Creating detailed roadmaps and technical specifications." },
              { step: "03", title: "Development", description: "Building your solution with agile methodologies." },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support." }
            ].map((phase, index) => (
              <div key={phase.step} className={`text-center ${
                index === 0 ? 'animate-slide-in-left' :
                index === 1 ? 'animate-fade-in animation-delay-200' :
                index === 2 ? 'animate-fade-in animation-delay-400' :
                'animate-slide-in-right animation-delay-400'
              }`}>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto glow-border">
                    <span className="text-2xl font-bold text-primary">{phase.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get <span className="gradient-text">Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can bring your vision to life.
          </p>
          <Button asChild size="lg" className="glow-border">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;