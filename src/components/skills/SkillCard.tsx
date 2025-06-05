import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Skill } from '../../types/skills';
import { useSkills } from '../../contexts/SkillContext';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const { isSkillCompleted } = useSkills();
  const completed = isSkillCompleted(skill.id);

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.4
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="h-full"
    >
      <Link 
        to={`/skills/${skill.id}`}
        className="block h-full"
      >
        <div className={`glow-card h-full p-6 transition-colors duration-300 ${completed ? 'bg-primary-50/80 border-primary-200' : ''}`}>
          <div className="flex justify-between items-start mb-2">
            <div className="text-4xl mb-2">{skill.emoji}</div>
            {completed && (
              <CheckCircle className="text-primary-500 h-6 w-6" />
            )}
          </div>
          <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
          <p className="text-gray-600">{skill.tagline}</p>
          <div className="mt-4">
            <span className="inline-block text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
              {skill.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SkillCard;