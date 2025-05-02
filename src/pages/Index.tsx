
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import AchievementsSection from '../components/AchievementsSection';
import TimelineSection from '../components/TimelineSection';
import TeamSection from '../components/TeamSection';
import EventsSection from '../components/EventsSection';
import JoinSection from '../components/JoinSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <div className="py-16">
          <WhatWeDoSection />
        </div>
        
        <div className="py-16">
          <AchievementsSection />
        </div>
        
        <div className="py-16">
          <TimelineSection />
        </div>
        
        <div className="py-16">
          <TeamSection />
        </div>
        
        <div className="py-16">
          <EventsSection />
        </div>
        
        <div className="py-16">
          <JoinSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
