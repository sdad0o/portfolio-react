
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useIsMobile } from '@/hooks/use-mobile';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
  fullDescription: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gender-Based Recommendation System",
    description: "Built a machine learning model to recommend products based on gender using Python, Django, Pandas, Scikit-learn. ",
    image: "../assets/projects/genderSYS.png",
    tech: ["Python", "Django", "Pandas", "Scikit-learn"],
    github: "https://github.com/sdad0o/Gender-Based-recommendations-system",
    demo: "https://github.com/sdad0o/Gender-Based-recommendations-system",
    fullDescription: ""
  },
  {
    id: 2,
    title: "Image segmentation",
    description: "Developed an image segmentation application to partition images based on color,intensity, and texture, enabling enhanced analysis and object detection Technologies and build a web UI. ",
    image: "../assets/projects/image.png",
    tech: ["Flask", "Python", "KNN"],
    github: "https://github.com/sdad0o/Image-segmentation",
    fullDescription: ""
  },
  {
    id: 3,
    title: "Arabic Chatbot",
    description: " Developed an Arabic chatbot for law consulting with a Flask backend and responsive frontend, enabling real-time Arabic conversations and deployed locally/online using ngrok. ",
    image: "../assets/projects/chatBot.png",
    tech: ["Flask", "Jyputer", "NLP"],
    github: "https://github.com/sdad0o/chatBot-for-law-consulting",
    demo: "https://github.com/sdad0o/chatBot-for-law-consulting",
    fullDescription: " Developed an Arabic chatbot for law consulting with a Flask backend and responsive frontend, enabling real-time Arabic conversations and deployed locally/online using ngrok. "
  },
  {
    id: 4,
    title: "Blog App",
    description: "Built a modern blogging platform with Laravel, featuring user management, rich content creation, comments, and email subscriptions. ",
    image: "../assets/projects/blog.png",
    tech: ["Laravel", "Sql", "PHP"],
    github: "https://github.com/sdad0o/Blogs",
    demo: "https://github.com/sdad0o/Blogs",
    fullDescription: "Built a modern blogging platform with Laravel, featuring user management, rich content creation, comments, and email subscriptions."
  },
];

const Projects: React.FC = () => {
  const isMobile = useIsMobile();

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

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-header reveal">Featured Projects</h2>
        <p className="text-lg text-foreground/80 max-w-3xl mb-12 reveal">
          Explore some of my recent work. Each project presents unique challenges and demonstrates different skills and technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card reveal`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-full h-full relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                
                {/* Mobile view - always visible information */}
                {isMobile ? (
                  <div className="bg-gradient-to-t from-black/70 to-transparent p-6 text-white absolute inset-0 flex flex-col justify-end">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        className="bg-cyan hover:bg-cyan/90 text-foreground flex items-center gap-2 w-full sm:w-auto"
                      >
                        <Github size={18} /> View on GitHub
                      </Button>
                    </a>
                  </div>
                ) : (
                  // Desktop view - hover effect
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="project-overlay">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-white/80 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button 
                        className="bg-cyan hover:bg-cyan/90 text-foreground flex items-center gap-2"
                      >
                        <Github size={18} /> View on GitHub
                      </Button>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-12 text-center reveal">
          <Button 
            variant="outline" 
            className="border-warm-gray hover:border-cyan hover:text-cyan"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      <div className="mt-12 text-center reveal">
        <a 
          href="https://github.com/sdad0o?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            variant="outline" 
            className="border-warm-gray hover:border-cyan hover:text-cyan"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
      </div>
    </section>
  );
};

export default Projects;
