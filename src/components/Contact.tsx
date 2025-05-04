
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to check if element is in viewport for animations
  const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', revealElements);
    // Trigger once on load
    revealElements();
    
    return () => {
      window.removeEventListener('scroll', revealElements);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-olive/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-header reveal">Get In Touch</h2>
        <p className="text-lg text-foreground/80 max-w-3xl mb-12 reveal">
          I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out using the form below or via my contact details.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-6" action='https://api.web3forms.com/submit' method='POST'>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
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
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-cyan hover:bg-cyan/90 text-foreground w-full sm:w-auto px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="lg:pl-8">
            <div className="mb-10 reveal">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <a href="mailto:sdad.loui.bayyari@gmail.com" className="hover:text-cyan">
                      sdad.loui.bayyari@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Phone</p>
                    <a href="tel:+962790154790" className="hover:text-cyan">
                      +962 790 154 790
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="reveal">
              <h3 className="text-xl font-bold mb-4">Social Profiles</h3>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/sdad0o/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-warm-gray/20 flex items-center justify-center hover:bg-cyan hover-scale"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/sdad0o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-warm-gray/20 flex items-center justify-center hover:bg-cyan hover-scale"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
