
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // 👇 الآن نقرأ البيانات من ملف .env
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    // تأكد إن البيانات موجودة
    if (!serviceId || !templateId || !userId) {
      toast({
        title: "❌ خطأ في الإعدادات",
        description: "الرجاء التأكد من إعدادات البريد الإلكتروني",
        variant: "destructive",
      });
      setIsSending(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'haneenabdualglil@gmail.com',
      subject: formData.subject,
      message: formData.message
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      toast({
        title: "✅ تم الإرسال بنجاح!",
        description: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('فشل الإرسال:', error);
      toast({
        title: "❌ فشل الإرسال",
        description: "حدث خطأ ما. الرجاء المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  // باقي الكود كما هو... (كل الدوال والـ JSX)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "haneenabdualglil@gmail.com",
      href: "mailto:haneenabdualglil@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+967-738034354",
      href: "tel:+967738034354"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Taiz, Yemen",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Haneen-Abdulgllil", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/haneen-abdulglil-762601241/", label: "LinkedIn" },
    { 
      icon: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ), 
      href: "https://x.com/haneen_abdulglil", 
      label: "X" 
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Ready to expand your digital dimensions? Let's discuss your project and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="glow-border">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSending}
                          className="glow-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSending}
                          className="glow-border focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isSending}
                        className="glow-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSending}
                        className="glow-border focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full glow-border"
                      disabled={isSending}
                    >
                      {isSending ? (
                        <>جاري الإرسال...</>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Let's Start a <span className="gradient-text">Conversation</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Whether you have a project in mind, need technical consultation, 
                    or want to explore partnership opportunities, we're here to help.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={info.title} className="glow-border hover:border-primary/50 transition-colors duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center glow-border">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">{info.title}</h3>
                              <a 
                                href={info.href}
                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                              >
                                {info.content}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={social.label}
                          variant="outline"
                          size="icon"
                          asChild
                          className="glow-border hover:border-primary/50"
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <Icon className="h-5 w-5" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Response Time */}
                <Card className="bg-primary/10 border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">Quick Response Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to all inquiries within 24 hours. 
                      For urgent matters, feel free to call us directly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;