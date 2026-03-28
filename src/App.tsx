import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Highlights } from './sections/Highlights';
import { EngineeringApproach } from './sections/EngineeringApproach';
import { Projects } from './sections/Projects';
import { TechStack } from './sections/TechStack';
import { Exploring } from './sections/Exploring';
import { Contact } from './sections/Contact';
import './App.css';

// Scroll Progress Bar Component
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

// Main App Component
function App() {
  useEffect(() => {
    // Smooth scroll polyfill
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Scroll Progress */}
        <ScrollProgress />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <Hero />
          
          {/* Highlights Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <Highlights />
          </motion.section>
          
          {/* Engineering Approach Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <EngineeringApproach />
          </motion.section>
          
          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.section>
          
          {/* Tech Stack Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <TechStack />
          </motion.section>
          
          {/* Exploring Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <Exploring />
          </motion.section>
          
          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
