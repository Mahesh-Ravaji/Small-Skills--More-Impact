import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { useSkills } from '../contexts/SkillContext';
import { categories } from '../data/skillsData';
import SkillCard from '../components/skills/SkillCard';

const SkillsLibraryPage = () => {
  const { allSkills } = useSkills();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredSkills, setFilteredSkills] = useState(allSkills);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const filtered = allSkills.filter(skill => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           skill.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    setFilteredSkills(filtered);
  }, [selectedCategory, searchQuery, allSkills]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="gradient-text mb-4">Skills Library</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore 25+ micro-skills across different categories to enhance your lifestyle, 
          confidence, and personal growth.
        </p>
      </motion.div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>

          <button
            onClick={toggleFilters}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm md:hidden"
          >
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>

        <div className={`mb-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Skills
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredSkills.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No skills found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 btn-secondary"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsLibraryPage;