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
      title: "Full-Stack Customer Portal Development",
      description: `I led the end-to-end development of an interactive customer portal for Rimon, aimed at streamlining customer service processes and empowering users with self-service capabilities. Built as a monolithic application, the portal significantly improved user experience and reduced the workload on support and service teams.\n\nThe Challenge: Prior to the portal's development, customers faced significant friction when performing basic account actions, such as managing internet usage times, viewing their subscription details, or checking payment history. These tasks required repeated calls to customer service, leading to inefficiency and impacting customer satisfaction.\n\nSolution and My Contribution:\n- Designed and implemented a monolithic architecture powered by a RESTful API.\n- Frontend: React (Context API).\n- Backend: Node.js (Express), MSSQL.\n- Led the development from architecture to implementation, including full-stack tasks.\n- Solved a critical authentication issue in multi-server production by implementing Redis session management (master + 2 replicas) for consistent user state.\n- Key features: Internet usage schedules, website classification groups, billing/payment history, support tools.\n- Used Docker for containerization and rapid deployment.`,
      image: "/images/etrog_portal.png",
      technologies: ["React", "Node.js", "Express", "MSSQL", "Redis", "Docker"],
      category: "Full Stack",
      githubUrl: null,
      liveUrl: null,
      featured: true
    },
    {
      id: 2,
      title: "Secure Enterprise Password Management System",
      description: `I led the design and development of a secure enterprise password management interface, which streamlined user administration and significantly improved the employee experience within the organization. This project integrated Two-Factor Authentication (TFA) and substantially reduced the workload on the information security team.\n\nThe Challenge: The organization's password management process was complex and required constant intervention from the information security team, leading to operational delays and increased team workload. There was a critical need for a tool that would allow employees to manage their passwords independently and securely, while maintaining high security standards.\n\nSolution and My Contribution:\n- Developed a full-stack application using React for the frontend and Node.js (Express) for the backend.\n- Integrated Active Directory (AD) for user authentication and Two-Factor Authentication (TFA) for maximum security.\n- Managed end-to-end development, including architectural planning, AD integration, TFA implementation, and UI development.\n- Containerized and deployed the application on an On-Premise server using Docker, ensuring full control and compliance with security policies.\n\nResults & Business Value: The system dramatically enhanced the user experience and led to a significant reduction in support tickets to the information security team for password management issues, allowing the team to focus on more critical core tasks.\n\n*Note: The image shown is for illustration purposes only and does not represent the actual project interface.*`,
      image: "/images/Secure_Enterprise.png",
      technologies: ["React", "Node.js", "Express", "Active Directory", "TFA", "Docker"],
      category: "Full Stack",
      githubUrl: null,
      liveUrl: null,
      featured: true
    },
    // {
    //   id: 3,
    //   title: "Weather Analytics Dashboard",
    //   description: "A data visualization dashboard using D3.js and Python Flask. Interactive charts, real-time weather data, and predictive analytics.",
    //   image: "/api/placeholder/600/400",
    //   technologies: ["Python", "Flask", "D3.js", "PostgreSQL"],
    //   category: "Data Viz",
    //   githubUrl: "https://github.com/jonmax1987/weather-dashboard",
    //   liveUrl: "https://weather.demo.com",
    //   featured: false
    // },
    // {
    //   id: 4,
    //   title: "Mobile Banking App",
    //   description: "React Native banking application with biometric authentication, transaction history, and push notifications.",
    //   image: "/api/placeholder/600/400",
    //   technologies: ["React Native", "Firebase", "Node.js", "JWT"],
    //   category: "Mobile",
    //   githubUrl: "https://github.com/jonmax1987/banking-app",
    //   liveUrl: null,
    //   featured: true
    // }
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
                <ProjectDescription>
                  {project.description.split('\n\n*Note:')[0]}
                  {project.description.includes('*Note:') && (
                    <strong>
                      {project.description.split('*Note:')[1].replace('The image shown is for illustration purposes only and does not represent the actual project interface.*', 'The image shown is for illustration purposes only and does not represent the actual project interface.')}
                    </strong>
                  )}
                </ProjectDescription>

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
