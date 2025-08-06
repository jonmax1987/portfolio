import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDocker, 
  FaServer,
  FaCogs
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb
} from 'react-icons/si';

// Organisms
import HeroSection from '../../components/organisms/HeroSection';
import AboutSection from '../../components/organisms/AboutSection';
import ProjectsSection from '../../components/organisms/ProjectsSection';
import ContactSection from '../../components/organisms/ContactSection';

/**
 * Home Page Component
 * Features: Landing page with hero, about, and projects sections
 */
const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Jonathan Max"
        subtitle="Senior Full Stack Developer with 7+ Years Experience"
        actions={[
          { 
            text: "View My Work", 
            variant: "primary", 
            href: "#projects",
            size: "large"
          },
          { 
            text: "Get In Touch", 
            variant: "outline", 
            href: "#contact",
            size: "large"
          }
        ]}
        backgroundGradient={{
          from: "135deg",
          colors: ["#667eea", "#764ba2"]
        }}
        showParticles
        showScrollIndicator
        fullHeight
        centered
      />
      
      {/* About Section */}
      <AboutSection
        title="About Me"
        description="Senior Full Stack Developer with over 7 years of experience building scalable web applications. Expert in React, Node.js, TypeScript, and end-to-end system architecture. Strong focus on performance, clean code, and user experience with proven track record at Rimon and FastRide."
        skills={[
          { name: "React & Next.js", icon: FaReact },
          { name: "Node.js & Express", icon: FaNodeJs },
          { name: "TypeScript & JavaScript", icon: SiTypescript },
          { name: "MongoDB & SQL", icon: SiMongodb },
          { name: "AWS Services", icon: FaAws },
          { name: "Docker & CI/CD", icon: FaDocker },
          { name: "System Architecture", icon: FaCogs },
          { name: "RESTful APIs", icon: FaServer }
        ]}
        stats={[
          { number: "7+", label: "Years Experience" },
          { number: "100+", label: "Projects Delivered" },
          { number: "2", label: "Major Companies" },
          { number: "Full Stack", label: "Specialization" }
        ]}
      />
      
      {/* Projects Section */}
      <ProjectsSection
        title="Featured Projects"
        subtitle="Some of my recent work that I'm proud to share"
      />
      
      {/* Contact Section */}
      <ContactSection
        title="Get In Touch"
        subtitle="Ready to start your next project? Let's discuss how I can help bring your ideas to life."
        email="jonathan.max@email.com"
        phone="+972-50-123-4567"
        location="Israel"
        socialLinks={{
          linkedin: "https://linkedin.com/in/jonathanmax",
          github: "https://github.com/jonathanmax"
        }}
      />
    </>
  );
};

export default HomePage;
