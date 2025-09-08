import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "NeuroSync AI Platform",
      description: "Advanced AI-powered analytics platform for healthcare data processing and predictive modeling.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "CloudVault Enterprise",
      description: "Secure cloud storage solution with end-to-end encryption and collaborative features.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["Next.js", "Node.js", "MongoDB", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "MindfulMoments Mobile",
      description: "Meditation and mindfulness app with AI-powered personalized recommendations.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Firebase", "ML Kit", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "QuantumTrade Analytics",
      description: "Real-time financial trading platform with advanced algorithmic trading capabilities.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["Vue.js", "Python", "Redis", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "EcoSmart IoT Hub",
      description: "IoT platform for smart home automation with energy optimization algorithms.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["React", "IoT Core", "Machine Learning", "Raspberry Pi"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "FlexFit Trainer",
      description: "Fitness tracking mobile app with AR workout guidance and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "mobile",
      technologies: ["Flutter", "ARCore", "Firebase", "TensorFlow Lite"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI Solutions' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Explore our collection of innovative projects that showcase the power of multi-dimensional thinking.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={`glow-border ${filter === category.id ? 'neon-glow' : ''}`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group overflow-hidden glow-border hover:border-primary/50 transition-all duration-300 ${
                  index % 3 === 0 ? 'animate-slide-in-left' :
                  index % 3 === 1 ? 'animate-fade-in animation-delay-200' :
                  'animate-slide-in-right animation-delay-400'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="icon" variant="secondary" asChild className="glow-border">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View Live">
                          <Eye className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="secondary" asChild className="glow-border">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View Code">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="secondary" asChild className="glow-border">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "25+", label: "Happy Clients" },
              { number: "100%", label: "Success Rate" },
              { number: "3", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={stat.label} className={`${
                index === 0 ? 'animate-slide-in-left' :
                index === 1 ? 'animate-fade-in animation-delay-200' :
                index === 2 ? 'animate-fade-in animation-delay-400' :
                'animate-slide-in-right animation-delay-400'
              }`}>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;