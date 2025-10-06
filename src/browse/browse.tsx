import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import './browse.css';

// Using correct paths from the public directory
const blueImage = '/images/blue.png';
const greyImage = '/images/grey.png';
const redImage = '/images/red.png';
const yellowImage = '/images/yellow.png';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "recruiter",
      displayName: "Recruiter",
      image: redImage,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif"
    },
    {
      name: "stalker",
      displayName: "Stalker",
      image: blueImage,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif"
    },
  ];

  const handleProfileClick = (profile: { name: string; displayName: string; image: string; backgroundGif: string }) => {
    // Navigate to the profile page with the selected profile's data
    navigate(`/profile/${profile.name}`, { 
      state: { 
        profileImage: profile.image, 
        backgroundGif: profile.backgroundGif 
      } 
    });
  };

  return (
    <div className="browse-container">
      <div className="profiles-container">
        <h2 className="who-is-watching">Who is viewing?</h2>
        <div className="profiles">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.displayName}
              image={profile.image}
              onClick={() => handleProfileClick(profile)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
