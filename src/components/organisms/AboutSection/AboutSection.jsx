import React from 'react';
import PropTypes from 'prop-types';
import { 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDocker, 
  FaDatabase, 
  FaCode, 
  FaServer,
  FaCogs
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiGraphql
} from 'react-icons/si';

// Styled Components
import {
  AboutContainer,
  AboutContent,
  AboutGrid,
  AboutText,
  AboutImage,
  SkillsGrid,
  SkillItem,
  SkillIcon,
  SkillText,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel
} from './AboutSection.styled';

/**
 * Professional About Section
 * Features: Personal story, skills showcase, statistics, responsive layout
 */
const AboutSection = ({
  title = "About Me",
  description = "I'm a passionate Full Stack Developer with over 5 years of experience creating digital solutions that make a difference. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.",
  image = "/images/ChatGPT Image Jul 10, 2025, 06_46_18 PM.png",
  skills = [
    { name: "React & Next.js", icon: FaReact },
    { name: "Node.js & Express", icon: FaNodeJs },
    { name: "TypeScript & JavaScript", icon: SiTypescript },
    { name: "MongoDB & SQL", icon: SiMongodb },
    { name: "AWS Services", icon: FaAws },
    { name: "Docker & CI/CD", icon: FaDocker },
    { name: "System Architecture", icon: FaCogs },
    { name: "RESTful APIs", icon: FaServer }
  ],
  stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
    { number: "100%", label: "Satisfaction Rate" }
  ]
}) => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        {/* Main About Grid */}
        <AboutGrid>
          {/* Text Content */}
          <AboutText>
            <h2>{title}</h2>
            <p>{description}</p>
            
            {/* Skills Grid */}
            <h3>Technical Skills</h3>
            <SkillsGrid>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <SkillItem
                    key={index}
                    $delay={index * 0.1}
                  >
                    <SkillIcon>
                      <IconComponent />
                    </SkillIcon>
                    <SkillText>{skill.name}</SkillText>
                  </SkillItem>
                );
              })}
            </SkillsGrid>
          </AboutText>

          {/* Profile Image */}
          <AboutImage>
            <img 
              src={image} 
              alt="Jonathan Max - Full Stack Developer"
              loading="lazy"
            />
          </AboutImage>
        </AboutGrid>

        {/* Statistics */}
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              $delay={index * 0.2}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </AboutContent>
    </AboutContainer>
  );
};

AboutSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired
    })
  ),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

export default React.memo(AboutSection);
