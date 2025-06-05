import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, PenTool, Activity, Palette, Zap, Brain, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const categories = [
    {
      name: 'Style & Presence',
      icon: <PenTool className="h-6 w-6" />,
      description: 'Develop your personal aesthetic and make a lasting impression.'
    },
    {
      name: 'Movement & Energy',
      icon: <Activity className="h-6 w-6" />,
      description: 'Improve posture, movement patterns, and overall physical energy.'
    },
    {
      name: 'Aesthetic & Expression',
      icon: <Palette className="h-6 w-6" />,
      description: 'Express yourself through creative outlets and visual aesthetics.'
    },
    {
      name: 'Productivity Boosters',
      icon: <Zap className="h-6 w-6" />,
      description: 'Enhance your focus, organization, and time management skills.'
    },
    {
      name: 'Charm & Hustle',
      icon: <Brain className="h-6 w-6" />,
      description: 'Master social dynamics and build genuine connections.'
    },
    {
      name: 'Weekly Skill Rule',
      icon: <Calendar className="h-6 w-6" />,
      description: 'Focus on one new skill every two weeks for consistent growth.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="gradient-text mb-6">
                Start Your Glow-Up Era ✨ Learn 1 Small Skill Every 2 Weeks!
              </h1>
              <p className="text-lg mb-8">
                Transform your lifestyle by mastering simple skills that boost your personality, confidence, creativity, and charm.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/skills" className="btn-primary flex items-center gap-2">
                  Explore Skills <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/dashboard" className="btn-secondary">
                  Go to Dashboard
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-500 opacity-75 blur-lg"></div>
                <div className="glow-card relative p-8 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/7350888/pexels-photo-7350888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Person growing and glowing up" 
                    className="rounded-lg max-w-full h-auto shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -top-5 -left-5 bg-white rounded-full p-4 shadow-lg animate-float">
                <Sparkles className="h-6 w-6 text-primary-500" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-full p-4 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <Sparkles className="h-6 w-6 text-secondary-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="gradient-text mb-4">How Glow-Up OS Works</h2>
            <p className="text-lg max-w-2xl mx-auto">
              A systematic approach to personal development through small, manageable skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Explore Skills',
                description: 'Browse our library of 25+ micro-skills across different categories.',
                icon: '🔍',
                step: 1,
              },
              {
                title: 'Follow 7-Day Plan',
                description: 'Each skill comes with a simple 7-day plan to practice and master it.',
                icon: '📝',
                step: 2,
              },
              {
                title: 'Track Progress',
                description: 'Mark skills as completed and see your transformation over time.',
                icon: '📈',
                step: 3,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="glow-card p-8 text-center"
                custom={i}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="inline-block text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">
                  Step {item.step}: {item.title}
                </h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="gradient-text mb-4">Skill Categories</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Explore different dimensions of personal growth to create a well-rounded transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, i) => (
              <motion.div
                key={category.name}
                className="glow-card p-8 h-full"
                custom={i}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                <p>{category.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/skills" className="btn-primary inline-flex items-center gap-2">
              View All Skills <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Glow-Up Journey?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of others who are transforming their lives one small skill at a time.
          </p>
          <Link to="/skills" className="bg-white text-primary-600 btn inline-flex items-center gap-2">
            Get Started Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;