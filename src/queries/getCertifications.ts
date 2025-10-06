import { Certification } from '../types';

// Mock data for certifications
const MOCK_CERTIFICATIONS: Certification[] = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    issuedDate: 'January 2023',
    link: 'https://www.udemy.com/certificate/UC-1234567890/',
    iconName: 'udemy'
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    issuedDate: 'November 2022',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ML1234567890',
    iconName: 'coursera'
  },
  {
    title: 'Cloud Architecture',
    issuer: 'IEEE',
    issuedDate: 'August 2022',
    link: 'https://www.ieee.org/certifications',
    iconName: 'ieee'
  },
  {
    title: 'Bachelor of Technology in Computer Science',
    issuer: 'University',
    issuedDate: 'May 2021',
    link: 'https://university.edu/certificates/12345',
    iconName: 'university'
  }
];

export async function getCertifications(): Promise<Certification[]> {
  try {
    // If you want to use the actual API in the future, uncomment this:
    /*
    const datoCMSClient = (await import('./datoCMSClient')).default;
    const GET_CERTIFICATIONS = `
      query {
        allCertifications {
          title
          issuer
          issuedDate
          link
          iconName
        }
      }
    `;
    const data = await datoCMSClient.request<{ allCertifications: Certification[] }>(GET_CERTIFICATIONS);
    return data?.allCertifications || MOCK_CERTIFICATIONS;
    */
    
    // For now, return mock data
    return MOCK_CERTIFICATIONS;
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return MOCK_CERTIFICATIONS; // Return mock data if there's an error
  }
}
