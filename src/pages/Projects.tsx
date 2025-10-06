import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { SiDjango, SiTensorflow, SiOpencv, SiTelegram, SiMysql, SiDocker, SiHtml5, SiCss3, SiJquery, SiJavascript, SiThreedotjs, SiPython } from 'react-icons/si';
import { Project } from '../types';
import './Projects.css';

// Add smooth scroll effect
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const techIcons: { [key: string]: JSX.Element } = {
  'Python': <SiPython className="tech-icon" title="Python" />,
  'Django': <SiDjango className="tech-icon" title="Django" />,
  'TensorFlow': <SiTensorflow className="tech-icon" title="TensorFlow" />,
  'OpenCV': <SiOpencv className="tech-icon" title="OpenCV" />,
  'Telegram Bot': <SiTelegram className="tech-icon" title="Telegram Bot" />,
  'MySQL': <SiMysql className="tech-icon" title="MySQL" />,
  'Docker': <SiDocker className="tech-icon" title="Docker" />,
  'HTML': <SiHtml5 className="tech-icon" title="HTML5" />,
  'CSS': <SiCss3 className="tech-icon" title="CSS3" />,
  'JavaScript': <SiJavascript className="tech-icon" title="JavaScript" />,
  'jQuery': <SiJquery className="tech-icon" title="jQuery" />,
  'SQLite': <span className="tech-icon" title="SQLite">💾</span>,
  'Three.js': <SiThreedotjs className="tech-icon" title="Three.js" />,
};


const Projects: React.FC = () => {
  const location = useLocation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  // Personal information
  const personalInfo = {
    name: 'Ashwin Saji Kumar',
    title: 'Full Stack Developer',
    email: 'ashwinsajikumar@gmail.com',
    phone: '+91 8281443080',
    location: 'Kerala, India',
    github: 'https://github.com/AshwinSajiKumar',
    linkedin: 'https://www.linkedin.com/in/ashwin-saji-kumar-9a6305203/',
    about: 'Passionate Full Stack Developer with expertise in building scalable web applications using modern technologies. Experienced in Python, JavaScript, and cloud technologies.'
  };

  const [projects] = useState<Project[]>([
    {
      id: '1',
      title: 'Violence Detection System',
      description: 'AI-powered system to detect violent activity in surveillance footage using a ConvLSTM model with real-time Telegram alerts. The system processes video streams in real-time and sends instant notifications when violent activities are detected.',
      techUsed: 'Python, TensorFlow, OpenCV, Telegram Bot',
      image: { url: '/images/violence.png' },
      githubUrl: 'https://github.com/AshwinSajiKumar/Violence-Detection-System',
      liveUrl: 'https://violence-detection-system-production-5415.up.railway.app/'
    },
    {
      id: '2',
      title: 'Student Placement Management',
      description: 'Full-stack platform for managing student profiles, job postings, and application tracking with multi-role functionality.',
      techUsed: 'Django, HTML, CSS, JavaScript, SQLite',
      image: { url: '/images/student.png' },
      githubUrl: 'https://github.com/AshwinSajiKumar/Placement-Management-System',
      liveUrl: 'https://placement-management-system-g7on.onrender.com/'
    },
    {
      id: '3',
      title: 'E-Commerce Website',
      description: 'Secure e-commerce platform with user registration, authentication, and personalized shopping experience.',
      techUsed: 'Django, HTML, CSS, JavaScript, SQLite',
      image: { url: '/images/e-commerce.png' },
      githubUrl: 'https://github.com/AshwinSajiKumar/Django_superkicks'
    },
    {
      id: '4',
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website with interactive animations, Three.js background effects, and professional design.',
      techUsed: 'Three.js, HTML, CSS, JavaScript',
      image: { url: '/images/portfolio.png' },
      githubUrl: 'https://github.com/AshwinSajiKumar/portfolio',
      liveUrl: 'https://ashwinsajikumar.github.io/portfolio/'
    }
  ]);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image?.url || '/images/project-placeholder.jpg'} 
                  alt={project.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/project-placeholder.jpg';
                  }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techUsed.split(', ').map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {techIcons[tech] || tech}
                      <span className="tech-tooltip">{tech}</span>
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View on GitHub"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
