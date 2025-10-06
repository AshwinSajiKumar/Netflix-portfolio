import { ProfileBanner } from '../types';

// Mock data for profile banner
const MOCK_PROFILE_BANNER: ProfileBanner = {
  backgroundImage: {
    url: '/images/blue.png' // Using an existing image from the public directory
  },
  headline: 'Welcome to My Portfolio',
  profileSummary: 'Experienced software engineer with a passion for building scalable applications and leading development teams. Specializing in full-stack development with modern web technologies.',
  resumeLink: {
    url: '/images/Ashwin Saji Kumar - Software Developer Resume.pdf'
  },
  linkedinLink: 'https://linkedin.com'
};

export async function getProfileBanner(): Promise<ProfileBanner> {
  try {
    // If you want to use the actual API in the future, uncomment this:
    /*
    const datoCMSClient = (await import('./datoCMSClient')).default;
    const GET_PROFILE_BANNER = `
    {
      profilebanner {
        backgroundImage {
          url
        }
        headline
        resumeLink {
          url
        }
        linkedinLink
        profileSummary
      }
    }`;
    const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(GET_PROFILE_BANNER);
    return data?.profilebanner || MOCK_PROFILE_BANNER;
    */
    
    // For now, return mock data
    return MOCK_PROFILE_BANNER;
  } catch (error) {
    console.error('Error fetching profile banner:', error);
    return MOCK_PROFILE_BANNER; // Return mock data if there's an error
  }
}
