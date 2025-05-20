import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-b from-white via-gray-100 to-white dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black text-black dark:text-white min-h-screen transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollPosition={scrollPosition} />
        <main>
          <Hero />
          <Categories />
          <About />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;