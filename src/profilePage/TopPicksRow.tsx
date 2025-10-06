import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope, FaMusic, FaBook, FaBookOpen, FaCertificate, FaFilm } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'stalker' | 'adventure';

interface PickItem {
  title: string;
  route: string;
  icon: React.ReactNode;
  imgSrc?: string; // Made optional since we're not using images anymore
}

type TopPicksConfig = Record<ProfileType, PickItem[]>;

interface TopPicksRowProps {
  profile: ProfileType;
}

// Helper function to get image path with fallback
const getImagePath = (imageName: string) => {
  // First try the profile-specific images
  const profileImagePath = `/images/profile/${imageName}`;
  
  // Fallback to general images if profile image doesn't exist
  const fallbackImages: Record<string, string> = {
    'passport.jpg': '/images/sumanth.jpeg',
    'skills.jpg': '/images/blue.png',
    'work-experience.jpg': '/images/red.png',
    'certificate.jpg': '/images/yellow.png',
    'recommendation.jpg': '/images/logo.png',
    'projects.jpg': '/images/logo-2.png',
    'development.jpg': '/images/logo-transparent.png',
    'coding.jpg': '/images/avataar.png',
    'contact.jpg': '/images/blue.png',
    'music.jpg': '/images/red.png',
    'innovation.jpg': '/images/grey.png',
    'books.jpg': '/images/yellow.png'
  };
  
  // Return the fallback if the primary image doesn't exist
  return fallbackImages[imageName] || profileImagePath;
};

const topPicksConfig: TopPicksConfig = {
  recruiter: [
    { title: "Skills", icon: <FaCode />, route: "/skills" },
    { title: "Experience", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Projects", icon: <FaProjectDiagram />, route: "/projects" }
  ],
  stalker: [
    { title: "Music", icon: <FaMusic />, route: "/music" },
    { title: "Movies", icon: <FaFilm />, route: "/movies" }
  ],
  adventure: [
    { title: "Music", icon: <FaMusic />, route: "/music" },
    { title: "Projects", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", icon: <FaEnvelope />, route: "/contact-me" }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile] || [];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="icon-container">
              <div className="pick-icon">{pick.icon}</div>
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
