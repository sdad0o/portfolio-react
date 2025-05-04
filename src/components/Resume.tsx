
import React, { useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Full-Stack Web Development Intern",
    company: "App trainers ",
    period: "December 2024 - Present",
    description: [
      "Gained hands-on experience building scalable web applications with Laravel, including authentication systems, API integrations, and database management.",
      "Developed a strong understanding of object-oriented programming (OOP) and the Model-View-Controller (MVC) architecture, applying these concepts in building scalable web applications.",
      "Applied Agile/Scrum methodologies in team projects: Participated in sprint planning, backlog refinement, and retrospectives to deliver iterative solutions.",
      "Utilized Jira for task management: Created user stories, prioritized tasks, and monitored workflow efficiency to meet project deadlines."
    ]
  },
  {
    id: 2,
    title: "Full-Stack Web Development Intern",
    company: "Clever mind POB",
    period: "October 2023 - March 2024",
    description: [
      "Gained hands-on experience in full stack web development, working with technologies such as HTML, CSS, JavaScript, Bootstrap, PHP, Laravel. ",
      "Developed a strong understanding of object-oriented programming (OOP) and the Model-View-Controller (MVC) architecture, applying these concepts in building scalable web applications ",
      "Assisted in the design and management of databases using MySQL, PhpMyAdmin, and SQL, ensuring data integrity and optimal performance. ",
      "Contributed to the front-end and back-end development of web projects, enhancing skills in building responsive and user-friendly interfaces. "
    ]
  }
];

const educations: Education[] = [
  {
    id: 1,
    degree: "Bachelor’s degree in computer Information Systems",
    institution: "Tafila Technical University",
    period: "2020 - 2024",
    description: "obtained a strong foundation in programming languages such as Java, C++, C#, Python, HTML, CSS, JavaScript, and PHP. Completed academic projects that involved building web applications, database management systems, and utilizing object oriented programming principles."
  }
];

const Resume: React.FC = () => {
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
    <section id="resume" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h2 className="section-header reveal">Resume</h2>
            <p className="text-lg text-foreground/80 max-w-2xl reveal">
              My professional journey and educational background that have shaped my career in web development.
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="experience" className="w-full reveal">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          {/* Experience Tab */}
          <TabsContent value="experience">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={exp.id} 
                  className={`border-l-4 border-cyan reveal`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-foreground/70">{exp.company}</p>
                      </div>
                      <span className="bg-warm-gray/20 px-4 py-1 rounded-full text-sm mt-2 md:mt-0 inline-block">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc ml-5 space-y-2 text-foreground/80">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Education Tab */}
          <TabsContent value="education">
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <Card 
                  key={edu.id} 
                  className={`border-l-4 border-cyan reveal`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-foreground/70">{edu.institution}</p>
                      </div>
                      <span className="bg-warm-gray/20 px-4 py-1 rounded-full text-sm mt-2 md:mt-0 inline-block">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-foreground/80">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
