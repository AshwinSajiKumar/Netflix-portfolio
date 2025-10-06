// Mock client that returns sample data instead of making API calls
const mockProfileBanner = {
  profilebanner: {
    backgroundImage: {
      url: "/images/background.jpg" // Placeholder image path
    },
    headline: "Welcome to My Portfolio",
    resumeLink: {
      url: "#" // Placeholder link
    },
    linkedinLink: "#",
    profileSummary: "I'm a software developer passionate about building great user experiences."
  }
};

// Mock certifications data
const mockCertifications = {
  allCertifications: [
    {
      id: '1',
      title: 'Sample Certification',
      issuer: 'Sample Issuer',
      issueDate: '2023-01-01',
      credentialId: '12345',
      credentialUrl: '#',
      skills: [{ name: 'React' }, { name: 'TypeScript' }]
    }
  ]
};

const mockClient = {
  request: async <T>(query: string): Promise<T> => {
    console.log("Using mock data instead of DatoCMS API");
    // Return mock data based on the query
    if (query.includes('profilebanner')) {
      return mockProfileBanner as unknown as T;
    }
    if (query.includes('allCertifications')) {
      return mockCertifications as unknown as T;
    }
    return {} as unknown as T;
  }
};

export default mockClient;
