
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
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart and payment integration",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo-link.com",
    fullDescription: "A comprehensive e-commerce solution built with React on the frontend and Node.js/Express on the backend. Features include product catalog, user authentication, shopping cart, order management, and Stripe payment integration. The platform is fully responsive and optimized for various devices."
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    fullDescription: "A collaborative task management application that allows teams to create, assign, and track tasks in real-time. Built with Vue.js and Firebase for real-time database functionality. Features include drag-and-drop task organization, priority levels, due dates, and team member assignments."
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tech: ["JavaScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo-link.com",
    fullDescription: "An interactive weather dashboard that provides real-time weather data from multiple locations. Utilizes the OpenWeather API to fetch current conditions, forecasts, and historical data. Features include interactive maps, temperature charts, and customizable weather alerts."
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo-link.com",
    fullDescription: "A modern portfolio website built with React and Tailwind CSS. Features a clean, responsive design with smooth animations powered by Framer Motion. Includes sections for showcasing projects, skills, and contact information. The site is optimized for performance and accessibility."
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
        
        <div className="mt-12 text-center reveal">
          <Button 
            variant="outline" 
            className="border-warm-gray hover:border-cyan hover:text-cyan"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
