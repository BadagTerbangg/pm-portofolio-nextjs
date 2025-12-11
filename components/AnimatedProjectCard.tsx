// components/AnimatedProjectCard.tsx (Wrapper untuk Animasi Framer Motion, Client Side)

"use client"; 

import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import ProjectCard from './Projectcard'; 

interface AnimatedProjectCardProps {
    title: string;
    role: string;
    description: string;
    tech: string;
    link: string;
    delay: number; 
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (customDelay: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      delay: customDelay 
    } 
  }),
};

const AnimatedProjectCard: React.FC<AnimatedProjectCardProps> = ({ title, role, description, tech, link, delay }) => {
  return (
    <motion.div 
      variants={cardVariants} 
      initial="hidden"       
      whileInView="visible"  
      custom={delay} 
      viewport={{ once: true, amount: 0.2 }} 
    > 
      <ProjectCard 
        title={title} 
        role={role} 
        description={description} 
        tech={tech} 
        link={link} 
      />
    </motion.div>
  );
};

export default AnimatedProjectCard;