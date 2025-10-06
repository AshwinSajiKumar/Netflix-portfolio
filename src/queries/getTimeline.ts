import { TimelineItem } from '../types';

// Mock data to use when the API is not available
const MOCK_TIMELINE: TimelineItem[] = [
  {
    name: 'Teknowmics Knowledge Solutions | Kochi',
    timelineType: 'work',
    title: 'Software Developer',
    techStack: 'Java, Spring Boot, Microservices',
    summaryPoints: [
      'Accelerated feature delivery by 30% through Java Spring Boot microservices.',
      'Implemented multiple new functionalities via custom microservices and shared libraries.',
      'Enabled international deployment for Daito Kentaku Partners (Japan) and Mobicom (Mongolia).'
    ],
    dateRange: 'Apr 2025 - Present',
    isHighlight: true
  },
  {
    name: 'People 10 Technosoft Private Limited | Bangalore',
    timelineType: 'work',
    title: 'Software Developer Trainee',
    techStack: 'Java, Spring Boot, MySQL, REST APIs',
    summaryPoints: [
      'Gained hands-on experience in Java, Spring Boot, Spring Framework, and MySQL.',
      'Contributed to backend development and REST API integration.',
      'Selected through campus placement based on strong technical skills.'
    ],
    dateRange: 'Sep 2024 - Mar 2025'
  },
  {
    name: 'Hexcent Private Limited | Kochi',
    timelineType: 'work',
    title: 'Student Intern',
    techStack: 'Python, Django',
    summaryPoints: [
      'Developed functional website using Python and Django.',
      'Strengthened understanding of backend architecture.',
      'Gained real-world software development experience.'
    ],
    dateRange: 'Mar 2023 - May 2023'
  },
  {
    name: 'Rajagiri School of Engineering and Technology',
    timelineType: 'education',
    title: 'Bachelor of Technology in Information Technology',
    techStack: 'GPA: 9.35/10',
    summaryPoints: [
      'Achieved first rank in the department.',
      'Specialized in Software Development and System Design.',
      'Active participant in technical symposiums and coding competitions.'
    ],
    dateRange: '2020 - 2024'
  },
  {
    name: 'The Journey Begins',
    timelineType: 'education',
    title: 'Born',
    techStack: 'November 9, 2002',
    summaryPoints: [
      'Began an exciting journey in this world.',
      'Future technologist in the making.',
      'The start of a story filled with learning and growth.'
    ],
    dateRange: 'Nov 9, 2002',
    icon: '👶',
    isHighlight: true
  }
];

export async function getTimeline(): Promise<TimelineItem[]> {
  try {
    // If you want to use the actual API in the future, uncomment this:
    /*
    const datoCMSClient = (await import('./datoCMSClient')).default;
    const GET_TIMELINE = `
    {
      allTimelines {
        name
        timelineType
        title
        techStack
        summaryPoints
        dateRange
      }
    }
    `;
    const data = await datoCMSClient.request<{ allTimelines: TimelineItem[] }>(GET_TIMELINE);
    return data?.allTimelines || [];
    */
    
    // For now, return mock data
    return MOCK_TIMELINE;
  } catch (error) {
    console.error('Error fetching timeline data:', error);
    return MOCK_TIMELINE; // Return mock data if there's an error
  }
}
