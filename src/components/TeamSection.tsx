
import React, { useRef } from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  // Using a default avatar placeholder
  image: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    name: "Alex Rivera",
    role: "President",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=150&h=150&crop=faces&q=80"
  },
  {
    name: "Jamie Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?&w=150&h=150&crop=faces&q=80"
  },
  {
    name: "Taylor Morgan",
    role: "Workshops Director",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?&w=150&h=150&crop=faces&q=80"
  },
  {
    name: "Jordan Wilson",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?&w=150&h=150&crop=faces&q=80"
  },
  {
    name: "Casey Zhang",
    role: "Outreach Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?&w=150&h=150&crop=faces&q=80"
  }
];

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="glass-card p-6 text-center min-w-[240px]">
      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-white/20 hover:border-brewery-primary-purple/50 transition-all">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-brewery-text-light mb-4">{role}</p>
      <a 
        href="#" 
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-brewery-primary-purple/20 transition-colors"
      >
        <Linkedin size={16} />
      </a>
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
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full glass-panel hover:bg-white/10 transition-all"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full glass-panel hover:bg-white/10 transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <a href="#" className="cta-secondary inline-flex items-center gap-2">
            Meet Everyone
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
