import { Skill } from '../types';

// Mock data to use when the API is not available
const MOCK_SKILLS: Skill[] = [
  // Frontend
  {
    name: 'HTML5',
    category: 'Frontend',
    description: 'Markup language for creating web pages',
    icon: 'SiHtml5'
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    description: 'Style sheet language for styling web pages',
    icon: 'SiCss3'
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    description: 'High-level programming language for interactive web pages',
    icon: 'SiTypescript' // Using TypeScript icon as a fallback
  },
  
  // Backend
  {
    name: 'Java',
    category: 'Backend',
    description: 'High-level, object-oriented programming language',
    icon: 'FaJava'
  },
  {
    name: 'Spring Boot',
    category: 'Backend',
    description: 'Framework for building production-ready Java applications',
    icon: 'SiSpringboot'
  },
  {
    name: 'Python',
    category: 'Backend',
    description: 'Versatile high-level programming language',
    icon: 'FaPython'
  },
  {
    name: 'Django',
    category: 'Backend',
    description: 'High-level Python web framework',
    icon: 'SiDjango'
  },
  
  // Database
  {
    name: 'SQL',
    category: 'Database',
    description: 'Standard language for relational database management',
    icon: 'SiPostgresql' // Using PostgreSQL icon as a fallback
  },
  
  // Data Science
  {
    name: 'Machine Learning',
    category: 'Data Science',
    description: 'Field of AI that enables systems to learn from data',
    icon: 'SiTensorflow' // Using TensorFlow icon as a fallback
  }
];

export async function getSkills(): Promise<Skill[]> {
  try {
    // If you want to use the actual API in the future, uncomment this:
    /*
    const datoCMSClient = (await import('./datoCMSClient')).default;
    const GET_SKILLS = `
    {
      allSkills(orderBy: category_ASC) {
        name
        category
        description
        icon
      }
    }
    `;
    const data = await datoCMSClient.request<{ allSkills: Skill[] }>(GET_SKILLS);
    return data?.allSkills || [];
    */
    
    // For now, return mock data
    return MOCK_SKILLS;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return MOCK_SKILLS; // Return mock data if there's an error
  }
}
