
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  emoji: string;
  delay: number;
}> = ({ title, description, emoji, delay }) => {
  return (
    <div 
      className="glass-card p-6 md:p-8 flex flex-col h-full"
      style={{ animationDelay: `${delay}ms` }}
      data-aos="fade-up"
    >
      <div className="w-12 h-12 rounded-full bg-glassmorphic-primary flex items-center justify-center mb-6">
        <span className="text-2xl">{emoji}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-brewery-text-light mb-4 flex-grow">{description}</p>
      <a 
        href="#" 
        className="flex items-center gap-2 text-brewery-primary-purple group mt-2 transition-colors duration-200 hover:text-brewery-primary-purple/80"
      >
        Learn More 
        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

const WhatWeDoSection: React.FC = () => {
  return (
    <section id="what-we-do" className="relative">
      <div className="section-container">
        <h2 className="section-heading text-center">
          What We Do
          <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            emoji="💡"
            title="GenAI Projects"
            description="Student-led innovation projects exploring cutting-edge generative AI technologies and their applications."
            delay={100}
          />
          
          <FeatureCard
            emoji="⚙️"
            title="Hackathons & Collabs"
            description="Competitive events where teams collaborate to solve real-world problems using AI within tight timeframes."
            delay={200}
          />
          
          <FeatureCard
            emoji="📚"
            title="AI Workshops"
            description="Educational sessions teaching AI concepts, tools, and frameworks to students of all experience levels."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
