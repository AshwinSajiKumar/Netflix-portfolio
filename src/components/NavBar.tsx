import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Icons removed as per request
import './Navbar.css';

const netflixLogo = '/images/Netflix_logo.png';
const blueImage = '/images/blue.png';

type ProfileType = 'recruiter' | 'stalker' | 'adventure';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Check if current path is part of specific sections
  const isEntertainmentSection = ['/music', '/movies', '/tv-shows', '/stalk-me'].includes(location.pathname);
  const isProfessionalSection = ['/work-experience', '/skills', '/projects', '/contact-me'].includes(location.pathname);
  
  // Set profile type based on current section
  const profileType: ProfileType = isEntertainmentSection || location.pathname.includes('stalker') ? 'stalker' : 
                                 isProfessionalSection || location.pathname.includes('recruiter') ? 'recruiter' : 
                                 location.pathname.includes('adventure') ? 'adventure' : 'recruiter';
  
  // Set profile image based on the current section
  const getProfileImage = () => {
    if (isProfessionalSection) {
      return '/images/red.png'; // Recruiter profile image
    } else if (isEntertainmentSection) {
      return '/images/blue.png'; // Stalker profile image
    }
    return location.state?.profileImage || '/images/grey.png'; // Default profile image
  };
  
  const profileImage = getProfileImage();
  
  // Profile image for the navbar (shows first letter of the name if image fails to load)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={netflixLogo} alt="Netflix" />
          </Link>
          <ul className="navbar-links">
            {profileType === 'stalker' ? (
              <>
                <li><Link to="/browse">Home</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/tv-shows">TV Shows</Link></li>
                <li><Link to="/stalk-me">Stalk Me</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/browse">Home</Link></li>
                <li><Link to="/work-experience">Professional</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact-me">Hire Me</Link></li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-right">
          {/* Hamburger menu for mobile */}
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img src={profileImage} alt="Profile" className="profile-icon" onClick={() => { navigate('/browse') }} />
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar (only visible on mobile) */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={netflixLogo} alt="Netflix Logo" />
        </div>
        <ul>
          {profileType === 'stalker' ? (
            <>
              <li><Link to="/browse" onClick={closeSidebar}>Home</Link></li>
              <li><Link to="/music" onClick={closeSidebar}>Music</Link></li>
              <li><Link to="/movies" onClick={closeSidebar}>Movies</Link></li>
              <li><Link to="/tv-shows" onClick={closeSidebar}>TV Shows</Link></li>
              <li><Link to="/stalk-me" onClick={closeSidebar}>Stalk Me</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/browse" onClick={closeSidebar}>Home</Link></li>
              <li><Link to="/work-experience" onClick={closeSidebar}>Professional</Link></li>
              <li><Link to="/skills" onClick={closeSidebar}>Skills</Link></li>
              <li><Link to="/projects" onClick={closeSidebar}>Projects</Link></li>
              <li><Link to="/contact-me" onClick={closeSidebar}>Hire Me</Link></li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
