
import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const JoinSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You've successfully joined AI Brewery!");
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="join" className="relative">
      <div className="section-container">
        <div className="glass-panel p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Join the Brew
          </h2>
          
          <p className="text-brewery-text-light text-center mb-8 max-w-lg mx-auto">
            Stay updated on our latest projects, workshops, and events. No spam, just AI Brewery updates.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="glass-input flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <button 
                type="submit" 
                className="cta-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>
          
          <div className="text-center">
            <p className="text-brewery-text-light mb-4">
              Or visit us at <span className="text-white font-medium">Tech Building, Room 205</span>
            </p>
            
            <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="p-2 rounded-full glass-panel hover:bg-brewery-primary-purple/20 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full glass-panel hover:bg-brewery-primary-purple/20 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full glass-panel hover:bg-brewery-primary-purple/20 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 rounded-full glass-panel hover:bg-brewery-primary-purple/20 transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
