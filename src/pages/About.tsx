import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      position: "Lead Developer & Co-Founder",
      email: "alex@the5dimension.com",
      linkedin: "https://linkedin.com/in/alexchen",
      github: "https://github.com/alexchen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Rodriguez",
      position: "AI Solutions Architect",
      email: "sarah@the5dimension.com",
      linkedin: "https://linkedin.com/in/sarahrodriguez",
      github: "https://github.com/sarahrodriguez",
      image: "https://images.unsplash.com/photo-1494790108755-2616b5b2f2a0?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      position: "Full-Stack Engineer",
      email: "david@the5dimension.com",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="gradient-text">The-5-Dimension</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            We are a cutting-edge programming team dedicated to expanding the boundaries of what's possible in software development.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To revolutionize the digital landscape by creating innovative software solutions 
                that transcend traditional boundaries. We believe in pushing the limits of technology 
                to solve complex problems and create extraordinary user experiences.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6 text-secondary">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A future where technology seamlessly integrates with human needs, creating 
                solutions that are not just functional, but transformative. We envision a world 
                where our multi-dimensional approach to development sets new standards for the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-border">
                <span className="text-2xl font-bold text-primary">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly exploring new technologies and methodologies to stay ahead of the curve.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-border">
                <span className="text-2xl font-bold text-secondary">Q</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                Delivering exceptional code quality and robust solutions that stand the test of time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-border">
                <span className="text-2xl font-bold text-accent">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                Working closely with clients to understand their vision and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind The-5-Dimension, each bringing unique expertise 
              to create extraordinary solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className={`group glow-border hover:border-primary/50 transition-all duration-300 ${
                index === 0 ? 'animate-slide-in-left' : 
                index === 1 ? 'animate-fade-in animation-delay-200' : 
                'animate-slide-in-right animation-delay-400'
              }`}>
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.position}</p>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon" asChild className="glow-border">
                      <a href={`mailto:${member.email}`} aria-label="Email">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="glow-border">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="glow-border">
                      <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;