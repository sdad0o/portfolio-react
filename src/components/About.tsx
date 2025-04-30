
import React, { useEffect } from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  // Function to check if element is in viewport
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

  return (
    <section id="about" className="section-padding bg-warm-gray/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          {/* About Image */}
          <div className="w-full md:w-2/5 reveal">
            <div className="relative">
              {/* Main image with border */}
              <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Developer profile"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-cream rounded-lg -z-10"></div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="w-full md:w-3/5">
            <h2 className="section-header reveal">About Me</h2>
            
            <div className="space-y-6">
              <p className="text-lg reveal">
                Hello! I'm John, a passionate Full-Stack Developer with 5+ years of experience crafting digital experiences. 
                My journey in development began during college when I built my first web application, and I've been hooked ever since.
              </p>
              
              <p className="text-lg reveal">
                I specialize in building robust web applications using modern technologies like React, Node.js, and TypeScript. 
                My approach combines technical expertise with creative problem-solving to deliver solutions that are both functional and elegant.
              </p>
              
              <p className="text-lg reveal">
                When I'm not coding, you can find me hiking, playing chess, or exploring new technologies. I believe in continuous learning and regularly contribute to open-source projects.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4 reveal">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan flex items-center justify-center mr-3">
                    <User className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Experience</h3>
                    <p>5+ Years</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Projects</h3>
                    <p>20+ Completed</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-olive flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Education</h3>
                    <p>Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
