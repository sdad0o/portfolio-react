
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  // Animation for staggered entrance
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const avatar = avatarRef.current;

    if (title && subtitle && cta && avatar) {
      setTimeout(() => {
        avatar.classList.add('active');
      }, 150);
      
      setTimeout(() => {
        title.classList.add('active');
      }, 400);
      
      setTimeout(() => {
        subtitle.classList.add('active');
      }, 700);
      
      setTimeout(() => {
        cta.classList.add('active');
      }, 1000);
    }
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-white pt-16"
    >
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                opacity: Math.random() * 0.7,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between max-w-5xl mx-auto gap-8">
          {/* Text content */}
          <div className="flex flex-col max-w-2xl">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 reveal"
            >
              <span className="text-cyan">Hello, I'm</span> <br />
              <span className="font-poppins">John Doe</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl font-light text-foreground/80 max-w-2xl mb-8 reveal"
            >
              A passionate <span className="text-cyan font-medium">Full-Stack Developer</span> specialized in creating elegant solutions and immersive digital experiences
            </p>
            
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 reveal"
            >
              <Button 
                className="bg-cyan hover:bg-cyan/90 text-foreground font-medium px-6 py-6 rounded-md"
                asChild
              >
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-warm-gray hover:border-cyan hover:text-cyan px-6 py-6"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          {/* Profile image with animation */}
          <div 
            ref={avatarRef} 
            className="reveal flex items-center justify-center"
          >
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-4 border-cyan/30 animate-pulse"></div>
              <div className="absolute inset-[-15px] rounded-full border-4 border-cyan/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-[-30px] rounded-full border-4 border-cyan/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Avatar */}
              <Avatar className="w-56 h-56 lg:w-72 lg:h-72 rounded-full border-4 border-cyan shadow-lg hover-scale">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="John Doe" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-cyan/20 text-4xl font-poppins font-bold">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
