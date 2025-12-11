// components/ProjectCard.tsx 
import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    role: string;
    description: string;
    tech: string;
    link: string; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, role, description, tech, link }) => {
  return (
    <div className="project-card"> 
      
      <div className="card-content"> 
        <h3>{title}</h3>
        <p style={{marginBottom: '10px'}}>
          Peran: {role}
        </p>

        {/* MENGGUNAKAN CLASS description-text UNTUK MIN-HEIGHT CSS FIX */}
        <p className="description-text" style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
          {description}
        </p>

        <p className="muted-text" style={{ fontSize: '0.85rem', marginTop: '15px' }}>
          Keterampilan: ⚙️ {tech} 
        </p>
      </div> 
    </div>
  );
};

export default ProjectCard;