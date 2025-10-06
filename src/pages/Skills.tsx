import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiSpringboot, SiHtml5, SiCss3, SiDjango, SiTensorflow } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  // Backend
  FaJava: <FaJava />,
  SiSpringboot: <SiSpringboot />,
  FaPython: <FaPython />,
  SiDjango: <SiDjango />,
  
  // Frontend
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiTypescript: <SiTypescript />,
  
  // Database
  SiPostgresql: <SiPostgresql />,
  
  // Data Science
  SiTensorflow: <SiTensorflow />,
  
  // Fallbacks
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  FaGitAlt: <FaGitAlt />
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const data = await getSkills();
        setSkillsData(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError('Failed to load skills. Please try again later.');
        setSkillsData([]);
      }
    }

    fetchSkills();
  }, []);

  if (error) return <div className="error-message">{error}</div>;
  if (skillsData === null) return <div>Loading...</div>;
  if (skillsData.length === 0) return <div>No skills found.</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
