
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-foreground text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">John Doe</h2>
            <p className="text-white/70">Full-Stack Developer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <p className="text-white/70 text-center md:text-right">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
            <p className="text-white/50 text-center md:text-right text-sm">
              Designed with ❤️ by John Doe
            </p>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-cyan text-foreground flex items-center justify-center hover:bg-cyan/80 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
