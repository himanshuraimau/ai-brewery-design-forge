
import React, { useRef, useState } from 'react';
import { Linkedin, Github, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  specialty?: string;
  year?: string;
  linkedin?: string;
  github?: string;
  funFact?: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    name: "Alex Rivera",
    role: "President",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=150&h=150&crop=faces&q=80",
    specialty: "Generative AI",
    year: "Senior",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    funFact: "Built an AI chess player that can beat grandmasters"
  },
  {
    name: "Jamie Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?&w=150&h=150&crop=faces&q=80",
    specialty: "Computer Vision",
    year: "Junior",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    funFact: "Published research on facial recognition algorithms"
  },
  {
    name: "Taylor Morgan",
    role: "Workshops Director",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?&w=150&h=150&crop=faces&q=80",
    specialty: "NLP Models",
    year: "Senior",
    linkedin: "https://linkedin.com",
    funFact: "Created a language model that writes poetry"
  },
  {
    name: "Jordan Wilson",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?&w=150&h=150&crop=faces&q=80",
    specialty: "ML Operations",
    year: "Junior",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    funFact: "Organized an AI hackathon with 500+ participants"
  },
  {
    name: "Casey Zhang",
    role: "Outreach Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?&w=150&h=150&crop=faces&q=80",
    specialty: "AI Ethics",
    year: "Senior",
    linkedin: "https://linkedin.com",
    funFact: "Founded an AI ethics discussion group on campus"
  }
];

const TeamMemberCard: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  image, 
  specialty, 
  year, 
  linkedin, 
  github,
  funFact 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-card p-6 text-center min-w-[240px] relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card Content */}
      <div className={`transition-all duration-300 ${isHovered && funFact ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-white/20 group-hover:border-brewery-primary-purple/50 transition-all">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-brewery-text-light mb-1">{role}</p>
        {specialty && (
          <div className="inline-block px-3 py-1 bg-brewery-primary-purple/20 rounded-full text-sm mb-2">
            {specialty}
          </div>
        )}
        {year && <p className="text-sm text-brewery-text-light mb-4">Class of {year}</p>}
        
        {/* Social Links */}
        <div className="flex justify-center gap-2 mt-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-brewery-primary-purple/20 transition-colors"
              aria-label={`LinkedIn profile of ${name}`}
            >
              <Linkedin size={16} />
            </a>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-brewery-primary-purple/20 transition-colors"
              aria-label={`GitHub profile of ${name}`}
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Fun Fact Overlay */}
      {funFact && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-brewery-primary-purple/80 to-brewery-secondary-pink/80 backdrop-blur-sm flex items-center justify-center p-6 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <p className="text-white font-medium">"{funFact}"</p>
        </div>
      )}
    </div>
  );
};

const TeamSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 270;
    const currentScroll = scrollRef.current.scrollLeft;
    
    scrollRef.current.scrollTo({
      left: direction === 'right' ? currentScroll + scrollAmount : currentScroll - scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="team" className="relative bg-gradient-radial from-brewery-secondary/5 to-transparent">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Meet Our Team
          <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
        </h2>
        
        {/* Team members horizontal scroll */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                specialty={member.specialty}
                year={member.year}
                linkedin={member.linkedin}
                github={member.github}
                funFact={member.funFact}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full glass-panel hover:bg-white/10 transition-all"
              aria-label="Scroll team members left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full glass-panel hover:bg-white/10 transition-all"
              aria-label="Scroll team members right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/team" className="cta-secondary inline-flex items-center gap-2">
            Meet Everyone
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
