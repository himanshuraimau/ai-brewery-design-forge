
import React from 'react';
import { ArrowRight } from 'lucide-react';
import TypewriterComponent from './TypewriterComponent';
import Complex3DAnimation from './Complex3DAnimation';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-heading">Building AI.</span>
            <br />
            <span className="bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink text-transparent bg-clip-text">
              Brewing Ideas.
            </span>
          </h1>
          
          <div className="h-12">
            <TypewriterComponent 
              texts={[
                "A creative AI club exploring GenAI",
                "Crafting innovative hackathon solutions",
                "Leading AI workshops for students"
              ]}
            />
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="cta-primary">
              Explore Projects
            </button>
            <a href="#join" className="cta-secondary flex items-center gap-2">
              Join our community
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
        
        {/* Right content - 3D animation */}
        <div className="lg:col-span-5 relative h-[400px] sm:h-[500px] lg:h-[600px]">
          <Complex3DAnimation />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
