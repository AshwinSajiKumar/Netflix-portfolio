import { ContactMe } from '../types';

// Mock data to use when the API is not available
const MOCK_CONTACT_ME: ContactMe = {
  profilePicture: {
    url: '/images/sumanth.jpeg' // Make sure this image exists in the public directory
  },
  name: 'Sumanth Samala',
  title: 'Software Engineer',
  summary: 'Passionate developer with expertise in full-stack development and cloud technologies.',
  companyUniversity: 'Your Company/University',
  linkedinLink: 'https://www.linkedin.com/in/sumanth-samala-1a5b3b1b0/',
  email: 'sumanth@example.com',
  phoneNumber: '+1 (123) 456-7890'
};

export async function getContactMe(): Promise<ContactMe> {
  try {
    // If you want to use the actual API in the future, uncomment this:
    /*
    const datoCMSClient = (await import('./datoCMSClient')).default;
    const GET_CONTACT_ME = `
      query {
        contactMe {
          profilePicture {
            url
          }
          name
          title
          summary
          companyUniversity
          linkedinLink
          email
          phoneNumber
        }
      }
    `;
    const data = await datoCMSClient.request<{ contactMe: ContactMe }>(GET_CONTACT_ME);
    return data?.contactMe || MOCK_CONTACT_ME;
    */
    
    // For now, return mock data
    return MOCK_CONTACT_ME;
  } catch (error) {
    console.error('Error fetching contact information:', error);
    return MOCK_CONTACT_ME; // Return mock data if there's an error
  }
}
