import React, { useEffect, useState, useRef } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries/getProfileBanner';
import { ProfileBanner as ProfileBannerType } from '../types';

type ProfileType = 'recruiter' | 'stalker';

interface ProfileBannerProps {
  profileType: ProfileType;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ profileType }) => {


  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Video URLs for each profile type
  const videoUrls = {
    recruiter: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    stalker: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  };

  // Profile-specific content
  const profileContent = {
    recruiter: {
      headline: 'Professional Profile',
      description: 'Experienced software engineer with a passion for building scalable applications and leading development teams.',
      cta1: 'View Resume',
      cta2: 'LinkedIn Profile',
      videoUrl: videoUrls.recruiter
    },
    stalker: {
      headline: 'The Inside Scoop',
      description: 'Everything you never knew you wanted to know about me. My digital footprint, my journey, and the things that make me tick. Consider this your all-access pass.',
      cta1: 'Dive Deeper',
      cta2: 'Stalk More',
      videoUrl: videoUrls.stalker
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProfileBanner();
        setBannerData(data);
      } catch (err) {
        console.error('Error fetching banner data:', err);
        setError('Failed to load profile information.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video play/pause
  useEffect(() => {
    if (loading || error) return;
    
    const video = videoRef.current;
    if (video) {
      // Mute the video for autoplay
      video.muted = true;
      // Try to play the video
      const playPromise = video.play();
      
      // Handle autoplay restrictions
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay prevented:', error);
          // Show a play button or other UI to let the user start the video
        });
      }
    }
  }, [profileType, loading, error]);

  if (loading) return <div className="loading-banner">Loading profile...</div>;
  if (error) return <div className="error-banner">{error}</div>;

  const currentContent = profileContent[profileType] || {
    headline: 'Welcome',
    description: 'Explore my digital world and discover what makes me tick.',
    cta1: 'Explore',
    cta2: 'Connect',
    videoUrl: ''
  };
  const defaultResumeLink = '/images/Ashwin Saji Kumar - Software Developer Resume.pdf';
  const defaultLinkedIn = 'https://www.linkedin.com/in/ashwin-saji-kumar-9a6305203/';

  const handlePlayClick = () => {
    if (profileType === 'stalker') {
      window.open('https://www.instagram.com/ashwin.__.saji?igsh=MXFvaXh0ZDBycWdicA%3D%3D&utm_source=qr', '_blank', 'noopener,noreferrer');
    } else {
      const resumePath = '/images/Ashwin Saji Kumar - Software Developer Resume.pdf';
      const link = document.createElement('a');
      link.href = process.env.PUBLIC_URL + resumePath;
      link.download = 'Ashwin_Saji_Kumar_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleInfoClick = () => {
    window.open('https://www.linkedin.com/in/ashwin-saji-kumar-9a6305203/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="profile-banner">
      {/* Video Background */}
      <div className="video-background">
        <video
          ref={videoRef}
          className="banner-video"
          autoPlay
          loop
          playsInline
          muted
          poster=""
        >
          <source src={currentContent.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="banner-content">
        <h1 className="banner-headline">{currentContent.headline}</h1>
        <p className="banner-description">
          {profileType === 'stalker' ? currentContent.description : (bannerData?.profileSummary || currentContent.description)}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label={currentContent.cta1} />
          <MoreInfoButton onClick={handleInfoClick} label={currentContent.cta2} />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
