import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaCode } from 'react-icons/fa';

// Styled Components
import {
  ProjectsContainer,
  ProjectsContent,
  ProjectsHeader,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectOverlay,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTech,
  TechTag,
  ProjectActions,
  ActionButton,
  FilterTabs,
  FilterTab
} from './ProjectsSection.styled';

/**
 * Professional Projects Section
 * Features: Project showcase, filtering, hover effects, responsive grid
 */
const ProjectsSection = ({
  title = "Featured Projects",
  subtitle = "Some of my recent work that I'm proud to share",
  projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, cart management, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      githubUrl: "https://github.com/jonmax1987/ecommerce",
      liveUrl: "https://myecommerce.demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool built with Next.js and Prisma. Real-time updates, team collaboration, and advanced filtering.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
      category: "Frontend",
      githubUrl: "https://github.com/jonmax1987/taskmanager",
      liveUrl: "https://taskmanager.demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "A data visualization dashboard using D3.js and Python Flask. Interactive charts, real-time weather data, and predictive analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Flask", "D3.js", "PostgreSQL"],
      category: "Data Viz",
      githubUrl: "https://github.com/jonmax1987/weather-dashboard",
      liveUrl: "https://weather.demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "React Native banking application with biometric authentication, transaction history, and push notifications.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Node.js", "JWT"],
      category: "Mobile",
      githubUrl: "https://github.com/jonmax1987/banking-app",
      liveUrl: null,
      featured: true
    }
  ]
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        {/* Header */}
        <ProjectsHeader>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          
          {/* Filter Tabs */}
          <FilterTabs>
            {categories.map((category) => (
              <FilterTab
                key={category}
                $isActive={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </FilterTab>
            ))}
          </FilterTabs>
        </ProjectsHeader>

        {/* Projects Grid */}
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              $delay={index * 0.1}
              $featured={project.featured}
            >
              {/* Project Image */}
              <ProjectImage>
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
                <ProjectOverlay>
                  <ProjectActions>
                    {project.githubUrl && (
                      <ActionButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                      >
                        <FaGithub />
                      </ActionButton>
                    )}
                    {project.liveUrl && (
                      <ActionButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        $primary
                      >
                        <FaExternalLinkAlt />
                      </ActionButton>
                    )}
                  </ProjectActions>
                </ProjectOverlay>
              </ProjectImage>

              {/* Project Content */}
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                {/* Technologies */}
                <ProjectTech>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

ProjectsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      category: PropTypes.string.isRequired,
      githubUrl: PropTypes.string,
      liveUrl: PropTypes.string,
      featured: PropTypes.bool
    })
  )
};

export default React.memo(ProjectsSection);
