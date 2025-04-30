
import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 92, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 86, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'SQL', level: 75, category: 'backend' },
  { name: 'GraphQL', level: 70, category: 'backend' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 78, category: 'tools' },
  { name: 'Webpack', level: 72, category: 'tools' },
  { name: 'Jest', level: 75, category: 'tools' },
  { name: 'CI/CD', level: 70, category: 'tools' },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'tools'>('frontend');
  const [animated, setAnimated] = useState(false);

  // Function to check if element is in viewport for animations
  const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    const skills = document.getElementById('skills');
    
    // Check if skills section is in viewport
    if (skills) {
      const windowHeight = window.innerHeight;
      const elementTop = skills.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        setAnimated(true);
      }
    }
    
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

  const filteredSkills = skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section-padding bg-cream/40">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-header reveal">Technical Skills</h2>
        <p className="text-lg text-foreground/80 max-w-3xl mb-10 reveal">
          I've honed my skills over years of practical experience. Here's a breakdown of my technical expertise and proficiency levels.
        </p>
        
        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {['frontend', 'backend', 'tools'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === tab 
                  ? 'bg-cyan text-foreground font-medium' 
                  : 'bg-warm-gray/20 hover:bg-warm-gray/40 text-foreground/70'
              }`}
              onClick={() => setActiveTab(tab as any)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Skills list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="font-medium">{skill.level}%</span>
              </div>
              <div className="skill-progress-bar">
                <div 
                  className="skill-progress-value bg-cyan"
                  style={{ 
                    width: animated ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.1}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
