// src/components/Footer.tsx

import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Mail, ChevronRight, Heart, X } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Web Development', href: '/services' },
    { name: 'AI Integration', href: '/services' },
    { name: 'Software Design', href: '/services' },
    { name: 'Cloud Solutions', href: '/services' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Haneen-Abdulgllil' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/haneen-abdulglil-762601241/' },
    { 
      name: 'X', 
      icon: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ), 
      href: 'https://x.com/haneen_abdulglil' 
    },
    { name: 'Email', icon: Mail, href: 'mailto:haneenabdualglil@gmail.com' },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-card/40 backdrop-blur-xl overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background Glows */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Code2 className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-500" />
                <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-2xl font-bold gradient-text tracking-tight">
                The 5<sup className="gradient-text">th</sup> Dimension
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
              Pioneering the next era of digital experiences through multi-dimensional software solutions and innovative AI technology.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center text-muted-foreground hover:text-white transition-colors duration-300 text-sm"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="group flex items-center text-muted-foreground hover:text-white transition-colors duration-300 text-sm"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary/50 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Stay updated with our latest dimensions of innovation.
              </p>
              <div className="flex flex-col space-y-3">
                <a 
                  href="mailto:haneenabdualglil@gmail.com"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 flex items-center gap-3 group"
                >
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">
                    haneenabdualglil@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-medium order-2 md:order-1">
            © {currentYear} The 5<sup className="gradient-text">th</sup> Dimension. All rights reserved.
          </p>
          <div className="flex items-center gap-4 order-1 md:order-2">
            <p className="text-muted-foreground text-xs flex items-center gap-1.5">
              Built with <Heart className="h-3.5 w-3.5 text-secondary animate-pulse" /> by 
              <span className="font-semibold text-white/80"> The 5<sup>th</sup> Dimension Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;