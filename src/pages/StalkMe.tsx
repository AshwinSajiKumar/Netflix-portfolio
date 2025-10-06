import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

// Personal information
const personalInfo = {
  name: 'Ashwin Saji Kumar',
  title: 'Digital Explorer',
  email: 'ashwinsajikumar@gmail.com',
  phone: '+91 8281443080',
  location: 'Kerala, India',
  linkedin: 'https://www.linkedin.com/in/ashwin-saji-kumar-9a6305203/',
  github: 'https://github.com/AshwinSajiKumar',
  instagram: 'https://www.instagram.com/ashwin.__.saji',
  about: 'Digital native, tech enthusiast, and occasional meme curator. Always up for interesting conversations and new connections. Feel free to reach out!'
};

const StalkMe: React.FC = () => {
  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <div className="profile-image-container">
          <img 
            src="/images/Image.jpeg" 
            alt="Ashwin Saji Kumar" 
            className="profile-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/200';
              target.alt = 'Profile Picture';
            }}
          />
        </div>
        <h1>Let's Connect!</h1>
        <p className="contact-subtitle">Find me on these platforms or drop me a message. Let's create something amazing together!</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <h3>Email Me</h3>
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            {personalInfo.email}
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <h3>Call Me</h3>
          <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-link">
            {personalInfo.phone}
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <h3>Location</h3>
          <p>{personalInfo.location}</p>
        </div>
      </div>

      <div className="social-links">
        <h3>Stalk Me On</h3>
        <div className="social-icons">
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub Profile"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a 
            href={personalInfo.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="contact-about">
        <h3>About Me</h3>
        <p>{personalInfo.about}</p>
      </div>
    </div>
  );
};

export default StalkMe;
