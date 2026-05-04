import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Zap, Layers, Sparkles } from 'lucide-react';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Code2 className="h-20 w-20 text-primary floating-animation" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">The 5<sup className="gradient-text">th</sup> Dimension</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expanding the dimensions of code through innovative software development,
              cutting-edge web applications, and transformative AI solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="glow-border">
                <Link to="/portfolio">
                  View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glow-border">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">The 5<sup className="gradient-text">th</sup> Dimension</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We push the boundaries of what's possible in software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-card p-8 rounded-lg border border-border glow-border group-hover:border-primary/50 transition-all duration-300">
                <div className="mb-6">
                  <Zap className="h-12 w-12 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Optimized performance and cutting-edge technologies for blazing fast applications.
                </p>
              </div>
            </div>

            <div className="group animation-delay-200">
              <div className="bg-card p-8 rounded-lg border border-border glow-border group-hover:border-primary/50 transition-all duration-300">
                <div className="mb-6">
                  <Layers className="h-12 w-12 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Multi-Dimensional</h3>
                <p className="text-muted-foreground">
                  Complex solutions broken down into elegant, scalable architectures.
                </p>
              </div>
            </div>

            <div className="group animation-delay-400">
              <div className="bg-card p-8 rounded-lg border border-border glow-border group-hover:border-primary/50 transition-all duration-300">
                <div className="mb-6">
                  <Sparkles className="h-12 w-12 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
                <p className="text-muted-foreground">
                  Leveraging artificial intelligence to create smarter, more intuitive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Expand Your <span className="gradient-text">Digital Dimensions</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build something extraordinary together. Contact us to discuss your next project.
          </p>
          <Button asChild size="lg" className="glow-border">
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
