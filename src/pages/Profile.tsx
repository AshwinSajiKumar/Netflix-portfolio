import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import './Profile.css';

type ProfileType = 'creative' | 'explorer';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const location = useLocation();
  const navigate = useNavigate();

  // Get profile data from route state or use default values
  const profileData = location.state || {
    profileName: 'creative',
    displayName: 'Creative',
    profileImage: '/images/blue.png',
    backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif'
  };

  // Set page title based on profile
  useEffect(() => {
    document.title = `Ashwin Saji Kumar | ${profileData.displayName || 'Portfolio'}`;
  }, [profileData.displayName]);

  // Personal Information
  const personalInfo = {
    name: 'Ashwin Saji Kumar',
    title: profileData.displayName === 'Developer' ? 'Software Developer' : profileData.displayName,
    email: 'ashwinsajikumar@gmail.com',
    phone: '+91 8281443080',
    location: 'Cochin, Kerala, India',
    linkedin: 'https://www.linkedin.com/in/ashwin-saji-kumar-9a6305203/',
    github: 'https://github.com/AshwinSajiKumar',
    about: 'Motivated and detail-oriented B.Tech graduate in Information Technology with a 9.35 GPA and hands-on experience in backend and web development. Proficient in Java, Spring Boot, Python, and Django. Passionate about software development and artificial intelligence, with a strong desire to contribute to high-impact projects and continue growing technically.'
  };

  // Work Experience
  const workExperience = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Teknowmics Knowledge Solutions | Kochi',
      period: 'Apr 2025 - Present',
      achievements: [
        'Accelerated feature delivery by 30% by designing, building, and deploying Java Spring Boot microservices',
        'Expanded product capabilities by implementing 5+ new functionalities through custom microservices',
        'Enabled international deployment for Daito Kentaku Partners (Japan) and Mobicom (Mongolia)'
      ]
    },
    {
      id: 2,
      title: 'Software Developer Trainee',
      company: 'People 10 Technosoft Private Limited | Bangalore',
      period: 'Sep 2024 - Mar 2025',
      achievements: [
        'Gained hands-on experience in Java, Spring Boot, Spring Framework, and MySQL',
        'Contributed to backend development and REST API integration',
        'Selected through campus placement based on strong technical skills'
      ]
    },
    {
      id: 3,
      title: 'Student Intern',
      company: 'Hexcent Private Limited | Kochi',
      period: 'Mar 2023 - May 2023',
      achievements: [
        'Developed functional website using Python and Django',
        'Strengthened understanding of backend architecture',
        'Gained real-world software development experience'
      ]
    }
  ];

  // Education
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Rajagiri School of Engineering and Technology, Kochi',
      period: 'Nov 2020 - May 2024',
      gpa: 'GPA: 9.35',
      achievements: [
        'First Rank in B.Tech Information Technology',
        'Subject Topper in English (Grade 12 CBSE)'
      ]
    }
  ];

  // Skills
  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'HTML/CSS', 'SQL'],
    frameworks: ['Spring Boot', 'Django', 'React', 'Node.js'],
    tools: ['Git', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
    other: ['RESTful APIs', 'Microservices', 'Agile/Scrum']
  };

  return (
    <div className="profile-container">
      {/* Header Section */}
      <header className="profile-header">
        <div className="profile-image">
          <img src="/images/profile/ashwin.jpg" alt={personalInfo.name} />
        </div>
        <div className="profile-info">
          <h1>{personalInfo.name}</h1>
          <h2>{personalInfo.title}</h2>
          <div className="contact-info">
            <div><FaEnvelope /> <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></div>
            <div><FaPhone /> <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a></div>
            <div><FaMapMarkerAlt /> {personalInfo.location}</div>
            <div className="social-links">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="profile-nav">
        <button 
          className={activeTab === 'about' ? 'active' : ''} 
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button 
          className={activeTab === 'experience' ? 'active' : ''} 
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
        <button 
          className={activeTab === 'education' ? 'active' : ''} 
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button 
          className={activeTab === 'skills' ? 'active' : ''} 
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
      </nav>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'about' && (
          <div className="about-section">
            <h3>About Me</h3>
            <p>{personalInfo.about}</p>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="experience-section">
            <h3>Work Experience</h3>
            {workExperience.map((job) => (
              <div key={job.id} className="job">
                <h4>{job.title}</h4>
                <div className="job-meta">
                  <span className="company">{job.company}</span>
                  <span className="period">{job.period}</span>
                </div>
                <ul className="achievements">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="education-section">
            <h3>Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className="education">
                <h4>{edu.degree}</h4>
                <div className="education-meta">
                  <span className="institution">{edu.institution}</span>
                  <span className="period">{edu.period}</span>
                </div>
                <div className="gpa">{edu.gpa}</div>
                <ul className="achievements">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skills-list">
                  {skills.languages.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Frameworks</h4>
                <div className="skills-list">
                  {skills.frameworks.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools</h4>
                <div className="skills-list">
                  {skills.tools.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Other</h4>
                <div className="skills-list">
                  {skills.other.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
