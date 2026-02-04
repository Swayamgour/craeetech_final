import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Instagram, ArrowUpRight, MoveRight } from 'lucide-react';
import './TeamSection.css'; // Importing custom CSS

const TEAM_MEMBERS = [
  { id: 1, name: "Darrell Steward", role: "Digital Marketer", image: "/assets/Team-2.png" },
  { id: 2, name: "Leslie Alexander", role: "Developer", image: "/assets/Team-2.png" },
  { id: 3, name: "Ronald Richards", role: "Link Builder", image: "/assets/Team-2.png" },
];

export default function TeamSection() {
  const [activeId, setActiveId] = useState(2);

  return (
    <div className='parent'>
      <section className="team-section">
    {/* Background Decorative Images */}
    <img src="/assets/Object-2.png" className="teamcontainer1" alt="" />
    <img src="/assets/Object-2.png" className="teamcontainer2" alt="" />
  
    <div className="team-container">
      <header className="team-header">
        <span className="team-badge">
          <span style={{ color: 'var(--neon-green)' }}>✦</span> Our Team
        </span>
        <h2 className="team-title">
          Meet Our Experienced <br />
          <span>Team People</span>
        </h2>
      </header>
  
      <div className="team-grid">
        {TEAM_MEMBERS.map((member) => (
          <div 
            key={member.id}
            className={`team-card ${activeId === member.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveId(member.id)}
          >
            <div className="card-top">
              <div className="name-wrapper">
                <div className="accent-bar" />
                <div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
              <div className="arrow-circle">
                {activeId === member.id ? <MoveRight size={22} /> : <ArrowUpRight size={22} />}
              </div>
            </div>
  
            <div className="image-area">
              <div className="inner-shape" />
              <div className="teamImage">
                {/* 1. The Background Shape/Image */}
                <img src="/assets/team-shape.png" alt="bg" className="team-bg" />
                
                {/* 2. The Person */}
                <img src={member.image} alt={member.name} className="member-img" />
                
                {/* 3. The Green Gradient Fade */}
                <div className="overlay"></div>
              </div>
              
              <AnimatePresence>
                {activeId === member.id && (
                  <motion.div 
                    className="social-float"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  >
                    <button className="social-btn" aria-label="Facebook"><Facebook size={18}/></button>
                    <button className="social-btn" aria-label="Twitter"><Twitter size={18}/></button>
                    <button className="social-btn" aria-label="Instagram"><Instagram size={18}/></button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    </div>
  );
}