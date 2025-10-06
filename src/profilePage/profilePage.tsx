import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';

// Define the profile type to match what's used in the components
type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

// Update the component props to use the correct ProfileType
interface ProfileBannerProps {
  profileType: ProfileType;
}

interface TopPicksRowProps {
  profile: ProfileType;
}

interface ContinueWatchingProps {
  profile: ProfileType;
}

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const { profileName } = useParams<{ profileName: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Default profile data
  const defaultProfile = {
    name: 'recruiter',
    displayName: 'Recruiter',
    backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif"
  };

  // Get profile data from route state or use default
  const profileData = location.state?.profileData || defaultProfile;
  
  // Validate profile type
  const profile = (['recruiter', 'developer', 'adventurer', 'stalker'] as ProfileType[]).includes(profileName as ProfileType)
    ? (profileName as ProfileType)
    : 'recruiter';

  // Set page title based on profile
  useEffect(() => {
    document.title = `Ashwin Saji Kumar | ${profileData.displayName || 'Portfolio'}`;
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [profile, profileData]);

  // Redirect to browse if no profile is selected
  useEffect(() => {
    if (!profileName) {
      navigate('/browse');
    }
  }, [profileName, navigate]);

  if (loading) {
    return <div className="loading-screen">Loading profile...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Get the appropriate banner component based on profile type
  const profileBanner = ProfileBanner as unknown as React.FC<{ profileType: ProfileType }>;
  const topPicksRow = TopPicksRow as unknown as React.FC<TopPicksRowProps>;
  const continueWatching = ContinueWatching as unknown as React.FC<ContinueWatchingProps>;

  return (
    <div className="profile-page">
      <div className="profile-content">
        {React.createElement(profileBanner, { profileType: profile as ProfileType })}
      </div>
      <div className="profile-sections">
        {React.createElement(topPicksRow, { profile: profile as ProfileType })}
        {React.createElement(continueWatching, { profile: profile as ProfileType })}
      </div>
    </div>
  );
};

export default ProfilePage;
