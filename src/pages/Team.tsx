
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Linkedin, Github, Filter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  specialty?: string;
  year?: string;
  team?: string;
  linkedin?: string;
  github?: string;
  funFact?: string;
}

// Extended team members data
const teamMembers: TeamMemberProps[] = [
  {
    name: "Alex Rivera",
    role: "President",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=150&h=150&crop=faces&q=80",
    specialty: "Generative AI",
    year: "Senior",
    team: "Leadership",
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
    team: "Technical",
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
    team: "Technical",
    linkedin: "https://linkedin.com",
    funFact: "Created a language model that writes poetry"
  },
  {
    name: "Jordan Wilson",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?&w=150&h=150&crop=faces&q=80",
    specialty: "ML Operations",
    year: "Junior",
    team: "Operations",
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
    team: "Outreach",
    linkedin: "https://linkedin.com",
    funFact: "Founded an AI ethics discussion group on campus"
  },
  {
    name: "Morgan Lee",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?&w=150&h=150&crop=faces&q=80",
    specialty: "UI/UX Design",
    year: "Junior",
    team: "Design",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    funFact: "Created the UI for a popular meditation app"
  },
  {
    name: "Riley Johnson",
    role: "Marketing Coordinator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=150&h=150&crop=faces&q=80",
    specialty: "Digital Marketing",
    year: "Sophomore",
    team: "Outreach",
    linkedin: "https://linkedin.com",
    funFact: "Ran viral social media campaign for campus event"
  },
  {
    name: "Sam Patel",
    role: "Research Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=150&h=150&crop=faces&q=80",
    specialty: "Reinforcement Learning",
    year: "Senior",
    team: "Technical",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    funFact: "Published a paper on multi-agent reinforcement learning"
  }
];

// Team values data
const teamValues = [
  {
    title: "Innovation",
    description: "We push the boundaries of what's possible with AI, always exploring new ideas and approaches.",
    icon: "💡"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of diverse perspectives coming together to solve complex problems.",
    icon: "🤝"
  },
  {
    title: "Education",
    description: "We're committed to learning and sharing knowledge with our community and beyond.",
    icon: "📚"
  },
  {
    title: "Ethical AI",
    description: "We develop AI responsibly, always considering the broader impacts of our work.",
    icon: "⚖️"
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

const Team: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredMembers = filter 
    ? teamMembers.filter(member => member.team === filter)
    : teamMembers;
  
  const teamFilters = ["Leadership", "Technical", "Design", "Operations", "Outreach"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-radial from-brewery-secondary/10 to-transparent">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-4">
            Meet Our Team
          </h1>
          <p className="text-brewery-text-light max-w-3xl mx-auto">
            The talented students behind AI Brewery, working together to explore and innovate in artificial intelligence.
          </p>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className="py-16 bg-brewery-background">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">
            Leading the Brew
            <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.filter(member => member.team === "Leadership").map((leader, index) => (
              <div key={index} className="w-full md:w-auto">
                <TeamMemberCard {...leader} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Grid */}
      <section className="py-16 bg-gradient-radial from-brewery-secondary/5 to-transparent">
        <div className="section-container">
          <h2 className="section-heading text-center mb-6">
            Our Full Team
            <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
          </h2>
          
          {/* Filter controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === null 
                  ? 'bg-brewery-primary-purple text-white' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              All
            </button>
            
            {teamFilters.map(teamFilter => (
              <button
                key={teamFilter}
                onClick={() => setFilter(teamFilter)}
                className={`px-4 py-2 rounded-full text-sm ${
                  filter === teamFilter 
                    ? 'bg-brewery-primary-purple text-white' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {teamFilter}
              </button>
            ))}
          </div>
          
          {/* Team members grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
          
          {filteredMembers.length === 0 && (
            <p className="text-center text-brewery-text-light mt-8">No team members found in this category.</p>
          )}
        </div>
      </section>
      
      {/* Team Values */}
      <section className="py-16 bg-brewery-background">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">
            Our Values
            <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value, index) => (
              <div key={index} className="glass-card p-6 hover:translate-y-[-5px] transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink bg-clip-text text-transparent">
                  {value.title}
                </h3>
                <p className="text-brewery-text-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
