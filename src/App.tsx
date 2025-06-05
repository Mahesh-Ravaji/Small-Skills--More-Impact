import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Contexts
import { SkillProvider } from './contexts/SkillContext';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import SkillsLibraryPage from './pages/SkillsLibraryPage';
import SkillDetailsPage from './pages/SkillDetailsPage';
import DashboardPage from './pages/DashboardPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <SkillProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/skills" element={<SkillsLibraryPage />} />
                <Route path="/skills/:skillId" element={<SkillDetailsPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </SkillProvider>
    </Router>
  );
}

export default App;