import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Send, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Glow-Up OS</h3>
            <p className="text-gray-300 mb-4">
              Elevate your lifestyle one skill at a time. Join the community of glowing individuals mastering life skills.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills Library
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Your Dashboard
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Join the Glow-Up</h4>
            <p className="text-gray-300 mb-4">
              Sign up for our newsletter to get the latest updates and tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-full w-full focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 rounded-r-full flex items-center justify-center"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-secondary-400" /> for your personal glow-up journey
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Glow-Up OS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;