import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { useSkills } from '../contexts/SkillContext';

const SkillDetailsPage = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();
  const { getSkillById, isSkillCompleted, addCompletedSkill, removeCompletedSkill } = useSkills();
  
  const skill = skillId ? getSkillById(skillId) : undefined;
  const completed = skillId ? isSkillCompleted(skillId) : false;

  useEffect(() => {
    if (!skill) {
      navigate('/skills');
    }
  }, [skill, navigate]);

  if (!skill) {
    return null; // Will redirect via the useEffect
  }

  const handleToggleCompleted = () => {
    if (completed) {
      removeCompletedSkill(skill.id);
    } else {
      addCompletedSkill(skill.id);
    }
  };

  const categoryLabel = skill.category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/skills" className="inline-flex items-center text-gray-600 hover:text-primary-500 mb-8">
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Skills Library
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="glow-card p-8 md:p-10 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="text-5xl md:text-6xl">{skill.emoji}</div>
              <div>
                <span className="inline-block text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full mb-2">
                  {categoryLabel}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold">{skill.name}</h1>
                <p className="text-gray-600 text-lg mt-1">{skill.tagline}</p>
              </div>
            </div>
            <button
              onClick={handleToggleCompleted}
              className={`btn flex items-center gap-2 ${
                completed ? 'bg-success-500 text-white hover:bg-success-600' : 'btn-primary'
              }`}
            >
              {completed ? (
                <>
                  <CheckCircle2 className="h-5 w-5" />
                  Completed
                </>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Mark as Completed
                </>
              )}
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About this Skill</h2>
            <p className="text-gray-700 leading-relaxed">{skill.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7-Day Skill Plan</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <ol className="list-decimal list-inside space-y-4">
                {skill.sevenDayPlan.map((day, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-semibold">Day {index + 1}:</span>{' '}
                    {day.substring(day.indexOf(':') + 1).trim()}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Watch & Learn</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-100">
              <iframe
                src={skill.videoUrl}
                title={`${skill.name} tutorial video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-80 md:h-96 rounded-xl"
              ></iframe>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skill.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-card p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 text-primary-500 flex-shrink-0" />
                  <span className="font-medium">{resource.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/dashboard" className="btn-primary inline-flex items-center gap-2">
            View Your Progress Dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillDetailsPage;