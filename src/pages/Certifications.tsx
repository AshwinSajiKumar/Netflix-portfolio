import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaUniversity, FaGraduationCap, FaCertificate, FaCalendarAlt } from 'react-icons/fa';

type CertificationType = {
  id: number;
  title: string;
  issuer: string;
  description?: string;
  date: string;
  type: 'education' | 'certification';
  icon: JSX.Element;
  score?: string;
};

const Certifications: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample data - you can add more certifications here
  const certifications: CertificationType[] = [
    {
      id: 1,
      title: 'Bachelor of Technology in Information Technology',
      issuer: 'Rajagiri School of Engineering and Technology',
      date: '2020 - 2024',
      type: 'education',
      icon: <FaGraduationCap />,
      score: 'CGPA: 9.35/10'
    },
    // Add more certifications here in the future
    // {
    //   id: 2,
    //   title: 'AWS Certified Developer',
    //   issuer: 'Amazon Web Services',
    //   date: '2024',
    //   type: 'certification',
    //   icon: <FaCertificate />,
    //   score: 'Credential ID: XYZ123'
    // },
  ];

  return (
    <div className="certifications-container">
      <div className="section-header">
        <h1>Education & Certifications</h1>
        <p className="subtitle">My academic and professional qualifications</p>
      </div>
      
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className={`certification-card ${cert.type}`}>
            <div className="card-icon">
              {cert.icon}
            </div>
            <div className="card-content">
              <h2>{cert.title}</h2>
              <div className="issuer">
                <FaUniversity className="icon" />
                <span>{cert.issuer}</span>
              </div>
              {cert.description && (
                <p className="description">{cert.description}</p>
              )}
              <div className="card-footer">
                <div className="date">
                  <FaCalendarAlt className="icon" />
                  <span>{cert.date}</span>
                </div>
                {cert.score && (
                  <div className="score">
                    {cert.score}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
