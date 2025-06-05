import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Send, ArrowRight } from 'lucide-react';

const AboutPage = () => {
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

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="gradient-text mb-4">About Glow-Up OS</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Our mission, philosophy, and the story behind the platform.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          custom={0}
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Glow-Up OS was created with a simple but powerful mission: to make personal development accessible, 
            actionable, and enjoyable for everyone. We believe that meaningful transformation happens through 
            consistent small changes rather than dramatic overnight shifts.
          </p>
          <p className="text-gray-700 mb-4">
            By focusing on one small skill every two weeks, we help people build sustainable habits that compound 
            over time, leading to significant personal growth and increased confidence.
          </p>
          <p className="text-gray-700">
            Our goal is to help you become the most authentic, confident, and skilled version of yourself through 
            intentional practice and community support.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          custom={1}
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-500 opacity-75 blur-lg"></div>
          <div className="glow-card relative p-8 h-full flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/3808057/pexels-photo-3808057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="People growing together" 
              className="rounded-lg max-w-full h-auto shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="mb-16"
        custom={2}
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Our Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Small Steps, Big Impact',
              description: 'We believe in the power of micro-habits and skills that compound over time to create meaningful change.',
              emoji: '🌱',
            },
            {
              title: 'Balance & Variety',
              description: 'A well-rounded glow-up addresses multiple dimensions: physical presence, social skills, creativity, and mindset.',
              emoji: '⚖️',
            },
            {
              title: 'Community Growth',
              description: 'Personal development is more effective and enjoyable when shared with others on similar journeys.',
              emoji: '🤝',
            },
          ].map((item, i) => (
            <div key={i} className="glow-card p-8 text-center">
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="mb-16"
        custom={3}
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">The 1 Skill / 2 Weeks Rule</h2>
        <div className="glow-card p-8">
          <p className="text-gray-700 mb-4">
            The core of our methodology is the "1 Skill / 2 Weeks" rule. This approach is designed to:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>Give you enough time to properly learn and integrate each skill</li>
            <li>Prevent overwhelm from trying to change too many things at once</li>
            <li>Create a sustainable pace for long-term growth</li>
            <li>Allow skills to build upon each other naturally</li>
            <li>Make the process enjoyable rather than stressful</li>
          </ul>
          <p className="text-gray-700">
            We've carefully curated skills that can be meaningfully practiced in two weeks, while still 
            challenging you to grow outside your comfort zone.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="mb-16"
        custom={4}
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Join Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              platform: 'Instagram',
              handle: '@glowupos',
              icon: <Instagram className="h-8 w-8" />,
              color: 'from-purple-500 to-pink-500',
            },
            {
              platform: 'YouTube',
              handle: 'Glow-Up OS',
              icon: <Youtube className="h-8 w-8" />,
              color: 'from-red-500 to-red-600',
            },
            {
              platform: 'Telegram',
              handle: 'GlowUpCommunity',
              icon: <Send className="h-8 w-8" />,
              color: 'from-blue-400 to-blue-500',
            },
          ].map((item, i) => (
            <a 
              key={i} 
              href="#"
              className="block h-full"
            >
              <div className="glow-card p-8 text-center h-full hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.platform}</h3>
                <p className="text-gray-700 mb-4">{item.handle}</p>
                <button className="text-primary-500 font-medium hover:underline inline-flex items-center">
                  Follow <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="text-center"
        custom={5}
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-2xl font-bold mb-6">Start Your Glow-Up Journey Today</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Ready to transform your life one small skill at a time? Explore our skill library and begin your glow-up journey.
        </p>
        <Link to="/skills" className="btn-primary inline-flex items-center gap-2">
          Explore Skills <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutPage;