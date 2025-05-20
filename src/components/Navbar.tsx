import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ShoppingBag, User } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrollPosition: number;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'NEW', href: '#new' },
    { name: 'SHOP', href: '#shop' },
    { name: 'COLLECTIONS', href: '#collections' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 
          ? 'py-3 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex flex-col items-center">
            <img 
              src="https://raw.githubusercontent.com/your-username/your-repo/main/xnt-logo.png"
              alt="XNT Logo"
              className="w-12 h-12 object-cover mb-1"
            />
            <span className="text-2xl font-bold tracking-tighter">XNOTIES</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleDarkMode} 
              className="p-1 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="#account" 
              className="p-1 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </a>
            <a 
              href="#cart" 
              className="p-1 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-1"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-1"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black absolute top-full left-0 w-full h-screen p-4 transition-all duration-300">
          <div className="flex flex-col space-y-8 py-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xl font-medium hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 pt-4">
              <a href="#account" className="flex items-center space-x-2 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
                <User size={20} />
                <span>Account</span>
              </a>
              <a href="#cart" className="flex items-center space-x-2 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
                <ShoppingBag size={20} />
                <span>Cart</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;