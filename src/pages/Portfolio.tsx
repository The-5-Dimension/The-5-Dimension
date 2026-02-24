import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Souqna Platform",
      description: "Advanced AI-powered analytics platform for healthcare data processing and predictive modeling.",
      image: "/images/souqna.jpg",
      category: "web",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Nest js"],
      liveUrl: "https://souqna-shop.com/",
      githubUrl: "https://github.com/The-5-Dimension/souqna-project-frontend"
    },
    {
      id: 2,
      title: "Maladvisory Platform",
      description: "We are a platform that connects clients seeking accurate financial advice with financial experts eager to share their expertise. Our goal is to make financial decisions clearer and easier for everyone",
      image: "/images/Maladvisory.png",
      category: "web",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Nest js"],
      liveUrl: "https://maladvisory.com/",
      githubUrl: "https://github.com/The-5-Dimension/mal-advisory-project-frontend"
    },
    {
      id: 3,
      title: "Shipping System",
      description: "Meditation and mindfulness app with AI-powered personalized recommendations.",
      image: "/images/shipping.png",
      category: "web",
      technologies: ["React Native", "Firebase", "ML Kit", "Node.js"],
      liveUrl: "https://mylexpress.com/",
      githubUrl: "https://github.com/The-5-Dimension/Shipping_System_Frontend"
    },
    {
      id: 4,
      title: "Women'sGuide",
      description: "An informative guide that helps all businesswomen obtain legal information, official procedures, financing services information, and advisory services in project management and training.",
      image: "/images/womens-guide.jpeg",
      category: "mobile",
      technologies: ["Flutter", "laravel", "Angular", "Bootstrap 5", "MySQL"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.guide.women.gover&pli=1",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "YWBOD",
      description: "Introductory site for a local organization in Yemen.",
      image: "/images/YWBOD.jpeg",
      category: "web",
      technologies: ["laravel", "Bootstrap 5", "MySQL"],
      liveUrl: "https://ywbod.org",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Healing",
      description: "A site to get online psychotherapy by reviewing all therapists and requesting a treatment session.",
      image: "/images/healing.jpeg",
      category: "web",
      technologies: ["Nextjs", "Firebase","Tailwind"],
      liveUrl: "https://idev-therapist.vercel.app/",
      githubUrl: "https://github.com/"
    },
    {
      id: 7,
      title: "ToDos App",
      description: "a small website to create a new todo with feature of edite this todo and login system using clerk auth",
      image: "/images/todos.png",
      category: "web",
      technologies: ["nextjs", "prisma", "tailwind", "clerk_auth"],
      liveUrl: "https://haneen-todos-app.vercel.app/",
      githubUrl: "https://github.com/"
    },
    {
      id: 8,
      title: "Blue Whale",
      description: "At bluewhale, we pride ourselves on our dedication to providing top-notch service and support to our clients. Here are a few reasons why you should choose us for your exporting, importing and general services needs",
      image: "/images/blue-whale.png",
      category: "web",
      technologies: ["wordpress"],
      liveUrl: "https://www.bluewhale8.com",  // <-- غيري الرابط الصحيح
      githubUrl: "#"
    },
    {
      id: 9,
      title: "haneen-portfolio",
      description: "Software Engineer Portfolio showcasing projects, skills, and experience in web development.",
      image: "/images/haneen-portfolio.png",
      category: "web",
      technologies: ["React","Nextjs"],
      liveUrl: "https://haneen-portfolio.vercel.app/",  // <-- غيري الرابط الصحيح
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