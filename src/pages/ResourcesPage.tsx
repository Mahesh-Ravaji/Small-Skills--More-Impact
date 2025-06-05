import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Search, BookOpen, Camera, Music, Brush, Code, Smile } from 'lucide-react';

const ResourcesPage = () => {
  const categories = [
    {
      id: 'all',
      name: 'All Resources',
      icon: <Search className="h-5 w-5" />,
    },
    {
      id: 'learning',
      name: 'Learning Platforms',
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: 'creativity',
      name: 'Creative Tools',
      icon: <Brush className="h-5 w-5" />,
    },
    {
      id: 'productivity',
      name: 'Productivity',
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: 'style',
      name: 'Style & Image',
      icon: <Camera className="h-5 w-5" />,
    },
    {
      id: 'wellness',
      name: 'Wellness',
      icon: <Smile className="h-5 w-5" />,
    },
    {
      id: 'music',
      name: 'Music & Audio',
      icon: <Music className="h-5 w-5" />,
    },
  ];

  const resources = [
    {
      name: 'Notion',
      description: 'All-in-one workspace for notes, tasks, and organization',
      url: 'https://www.notion.so/',
      category: 'productivity',
      icon: '📝',
    },
    {
      name: 'Canva',
      description: 'Design platform for creating beautiful visuals',
      url: 'https://www.canva.com/',
      category: 'creativity',
      icon: '🎨',
    },
    {
      name: 'Remini',
      description: 'AI photo enhancer for crisp, clear photos',
      url: 'https://remini.ai/',
      category: 'style',
      icon: '📱',
    },
    {
      name: 'Headspace',
      description: 'Meditation and mindfulness app',
      url: 'https://www.headspace.com/',
      category: 'wellness',
      icon: '🧘',
    },
    {
      name: 'Duolingo',
      description: 'Fun language learning platform',
      url: 'https://www.duolingo.com/',
      category: 'learning',
      icon: '🗣️',
    },
    {
      name: 'Pinterest',
      description: 'Visual discovery engine for finding inspiration',
      url: 'https://www.pinterest.com/',
      category: 'style',
      icon: '📌',
    },
    {
      name: 'Skillshare',
      description: 'Online learning community for creative skills',
      url: 'https://www.skillshare.com/',
      category: 'learning',
      icon: '🎓',
    },
    {
      name: 'Pocket',
      description: 'Save and read articles and videos later',
      url: 'https://getpocket.com/',
      category: 'productivity',
      icon: '📚',
    },
    {
      name: 'Forest',
      description: 'Stay focused and be present with gamified focus timer',
      url: 'https://www.forestapp.cc/',
      category: 'productivity',
      icon: '🌳',
    },
    {
      name: 'Spotify',
      description: 'Music streaming with curated playlists',
      url: 'https://www.spotify.com/',
      category: 'music',
      icon: '🎵',
    },
    {
      name: 'Calm',
      description: 'Sleep, meditation and relaxation app',
      url: 'https://www.calm.com/',
      category: 'wellness',
      icon: '😌',
    },
    {
      name: 'Todoist',
      description: 'Task manager and to-do list app',
      url: 'https://todoist.com/',
      category: 'productivity',
      icon: '✅',
    },
    {
      name: 'Libby',
      description: 'Free ebooks and audiobooks from your library',
      url: 'https://libbyapp.com/',
      category: 'learning',
      icon: '📚',
    },
    {
      name: 'Adobe Express',
      description: 'Quick and easy graphic design tool',
      url: 'https://www.adobe.com/express/',
      category: 'creativity',
      icon: '✨',
    },
    {
      name: 'Coursera',
      description: 'Online courses from top universities',
      url: 'https://www.coursera.org/',
      category: 'learning',
      icon: '🎓',
    },
    {
      name: 'Pinterest Style Quiz',
      description: 'Discover your personal style aesthetic',
      url: 'https://www.pinterest.com/style-quiz/',
      category: 'style',
      icon: '👗',
    },
    {
      name: 'Procreate',
      description: 'Powerful illustration app for iPad',
      url: 'https://procreate.art/',
      category: 'creativity',
      icon: '🖌️',
    },
    {
      name: 'Insight Timer',
      description: 'Free meditation app with huge library',
      url: 'https://insighttimer.com/',
      category: 'wellness',
      icon: '⏱️',
    },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4
      }
    }),
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="gradient-text mb-4">Resources</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover tools, apps, and platforms to enhance your glow-up journey.
        </p>
      </motion.div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No resources found matching your criteria.</p>
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
          {filteredResources.map((resource, index) => (
            <motion.a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              custom={index}
              className="block"
            >
              <div className="glow-card p-6 h-full">
                <div className="flex justify-between items-start">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.name}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="mt-auto">
                  <span className="inline-block text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                    {categories.find(c => c.id === resource.category)?.name}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;