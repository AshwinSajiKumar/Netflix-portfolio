// queries/getProjects.ts
import { Project } from '../types';

// Mock data to use when the API is not available
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Violence Detection System',
    description: 'AI-powered system to detect violent activity in surveillance footage using a ConvLSTM model with real-time Telegram alerts.',
    techUsed: 'Python, TensorFlow, OpenCV, Telegram Bot',
    image: {
      url: '/images/violence-detection.jpg'
    },
    githubUrl: 'https://github.com/AshwinSajiKumar/Violence-Detection-System',
    liveUrl: 'https://violence-detection-system-production-5415.up.railway.app/'
  },
  {
    id: '2',
    title: 'Student Placement Management',
    description: 'Full-stack platform for managing student profiles, job postings, and application tracking with multi-role functionality.',
    techUsed: 'Django, HTML, CSS, JavaScript, SQLite',
    image: {
      url: '/images/placement-system.jpg'
    },
    githubUrl: 'https://github.com/AshwinSajiKumar/Placement-Management-System',
    liveUrl: 'https://placement-management-system-g7on.onrender.com/'
  },
  {
    id: '3',
    title: 'E-Commerce Website',
    description: 'Secure e-commerce platform with user registration, authentication, and personalized shopping experience.',
    techUsed: 'Django, HTML, CSS, JavaScript, SQLite',
    image: {
      url: '/images/ecommerce.jpg'
    },
    githubUrl: 'https://github.com/AshwinSajiKumar/Django_superkicks'
  },
  {
    id: '4',
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio website with interactive animations, Three.js background effects, and professional design.',
    techUsed: 'React, Three.js, HTML, CSS, JavaScript',
    image: {
      url: '/images/portfolio.jpg'
    },
    githubUrl: 'https://github.com/AshwinSajiKumar/portfolio',
    liveUrl: 'https://ashwinsajikumar.github.io/portfolio/'
  }
];

export async function getProjects(): Promise<Project[]> {
  try {
    // If you want to use the actual API in the future, uncomment this:
    /*
    const datoCMSClient = (await import('./datoCMSClient')).default;
    const GET_PROJECTS = `
      query GetProjects {
        allProjects {
          id
          title
          description
          techUsed
          image {
            url
          }
        }
      }
    `;
    const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
    return data?.allProjects || [];
    */
    
    // For now, return mock data
    return MOCK_PROJECTS;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return MOCK_PROJECTS; // Return mock data if there's an error
  }
}
