
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
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    description: [
      "Led the development of a React-based customer dashboard that improved user engagement by 40%.",
      "Implemented responsive design principles, ensuring seamless experiences across all devices.",
      "Mentored junior developers and conducted code reviews to maintain high code quality.",
      "Collaborated with design and product teams to deliver features aligned with business goals."
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "WebSolutions Co.",
    period: "2018 - 2020",
    description: [
      "Developed and maintained multiple client web applications using React and Node.js.",
      "Built RESTful APIs and integrated third-party services to enhance application functionality.",
      "Optimized database queries, resulting in a 30% improvement in application performance.",
      "Participated in Agile development processes, including sprint planning and retrospectives."
    ]
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Digital Creations",
    period: "2016 - 2018",
    description: [
      "Created responsive websites for various clients using HTML, CSS, and JavaScript.",
      "Assisted in migrating legacy applications to modern frameworks.",
      "Implemented tracking systems and analytics for client websites.",
      "Collaborated with designers to ensure pixel-perfect implementation of designs."
    ]
  }
];

const educations: Education[] = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    description: "Focused on web technologies and distributed systems. Completed thesis on optimizing React applications for performance."
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2010 - 2014",
    description: "Graduated with honors. Relevant coursework included data structures, algorithms, database systems, and web development."
  },
  {
    id: 3,
    degree: "Full Stack Web Development Bootcamp",
    institution: "Code Academy",
    period: "2015",
    description: "Intensive 12-week program covering modern web development technologies and practices."
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
          <Button className="mt-6 md:mt-0 bg-cyan hover:bg-cyan/90 text-foreground reveal">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
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
