import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaCertificate, FaProjectDiagram, FaFilm, FaTv } from 'react-icons/fa';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'stalker';

interface WatchItem {
  title: string;
  icon: React.ReactNode;
  link: string;
  imgSrc?: string; // Keeping optional for backward compatibility
}

type ContinueWatchingConfig = Record<ProfileType, WatchItem[]>;

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig: ContinueWatchingConfig = {
  recruiter: [
    { title: "Contact Me", icon: <FaEnvelope />, link: "/contact-me" },
    { title: "Certifications", icon: <FaCertificate />, link: "/certifications" }
  ],
  stalker: [
    { title: "TV Shows", icon: <FaTv />, link: "/tv-shows" },
    { title: "Contact Me", icon: <FaEnvelope />, link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile] || [];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Exploring</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <div className="icon-container">
              <div className="pick-icon">{pick.icon}</div>
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
