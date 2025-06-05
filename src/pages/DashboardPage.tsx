import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Edit3, Save, Trash2, Plus, Sparkles } from 'lucide-react';
import { useSkills } from '../contexts/SkillContext';

const DashboardPage = () => {
  const { userProgress, completedSkills, allSkills, addJournalEntry, deleteJournalEntry } = useSkills();
  const [journalContent, setJournalContent] = useState('');
  const [showAddJournal, setShowAddJournal] = useState(false);

  const progressPercentage = allSkills.length > 0
    ? Math.round((completedSkills.length / allSkills.length) * 100)
    : 0;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleAddJournal = () => {
    if (journalContent.trim()) {
      addJournalEntry(journalContent);
      setJournalContent('');
      setShowAddJournal(false);
    }
  };

  const getBadgeCount = () => {
    const counts = [5, 10, 20, 25];
    let earnedBadges = 0;
    
    for (const count of counts) {
      if (completedSkills.length >= count) {
        earnedBadges++;
      } else {
        break;
      }
    }
    
    return earnedBadges;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="gradient-text mb-4">Your Glow-Up Dashboard</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Track your progress, see completed skills, and document your transformation journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Progress Overview */}
        <motion.div
          className="glow-card p-8 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Trophy className="text-secondary-500 h-6 w-6" />
            Your Progress
          </h2>

          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span>{completedSkills.length} of {allSkills.length} skills completed</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {completedSkills.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 mb-6">You haven't completed any skills yet.</p>
              <Link to="/skills" className="btn-primary">
                Explore Skills to Start
              </Link>
            </div>
          ) : (
            <div>
              <h3 className="font-semibold mb-4">Recently Completed:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {completedSkills.slice(0, 4).map(skill => (
                  <Link 
                    key={skill.id} 
                    to={`/skills/${skill.id}`}
                    className="flex items-center p-4 bg-white rounded-lg border border-gray-100 hover:border-primary-200 transition-colors"
                  >
                    <div className="text-3xl mr-3">{skill.emoji}</div>
                    <div>
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-gray-500">{skill.tagline}</div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {completedSkills.length > 4 && (
                <div className="mt-4 text-center">
                  <button className="text-primary-500 font-medium hover:underline">
                    View All Completed Skills
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Badges & Achievements */}
        <motion.div
          className="glow-card p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="text-secondary-500 h-6 w-6" />
            Achievements
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { count: 5, label: 'Beginner', emoji: '🌱' },
              { count: 10, label: 'Enthusiast', emoji: '✨' },
              { count: 20, label: 'Master', emoji: '💫' },
              { count: 25, label: 'Guru', emoji: '👑' },
            ].map((badge, index) => (
              <div 
                key={index}
                className={`aspect-square flex flex-col items-center justify-center rounded-lg border-2 ${
                  completedSkills.length >= badge.count 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-gray-200 bg-gray-50 opacity-50'
                }`}
              >
                <div className="text-4xl mb-2">{badge.emoji}</div>
                <div className="font-bold text-sm">{badge.label}</div>
                <div className="text-xs text-gray-500">{badge.count} Skills</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="font-medium text-lg mb-1">
              {getBadgeCount()} of 4 badges earned
            </div>
            <p className="text-sm text-gray-500">
              Complete more skills to unlock all badges!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Journal */}
      <motion.div
        className="glow-card p-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Calendar className="text-secondary-500 h-6 w-6" />
            Your Glow-Up Journal
          </h2>
          <button 
            onClick={() => setShowAddJournal(true)}
            className="btn-primary py-2 flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            New Entry
          </button>
        </div>

        {showAddJournal && (
          <div className="mb-8 bg-white p-6 rounded-lg border border-gray-100">
            <h3 className="font-semibold mb-3">Add New Journal Entry</h3>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
              placeholder="Write about your progress, reflections, or new insights..."
              rows={4}
              value={journalContent}
              onChange={(e) => setJournalContent(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowAddJournal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddJournal}
                className="btn-primary py-2 flex items-center gap-2"
                disabled={!journalContent.trim()}
              >
                <Save className="h-5 w-5" />
                Save Entry
              </button>
            </div>
          </div>
        )}

        {userProgress.journalEntries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">
              You haven't added any journal entries yet.
            </p>
            <button 
              onClick={() => setShowAddJournal(true)}
              className="text-primary-500 font-medium hover:underline flex items-center gap-2 mx-auto"
            >
              <Edit3 className="h-5 w-5" />
              Write your first entry
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {userProgress.journalEntries.map(entry => (
              <div key={entry.id} className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-sm text-gray-500">
                    {formatDate(entry.date)}
                    {entry.skillId && (
                      <span className="ml-2">
                        • {allSkills.find(s => s.id === entry.skillId)?.name}
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={() => deleteJournalEntry(entry.id)}
                    className="text-gray-400 hover:text-error-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="whitespace-pre-line">{entry.content}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      <div className="text-center">
        <Link to="/skills" className="btn-primary inline-flex items-center gap-2">
          Explore More Skills
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;