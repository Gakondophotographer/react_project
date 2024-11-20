import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="light:bg-white  text-green font-mono p-4 shadow-xlg bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      
        <Link to="/" className="text-2xl font-bold hover:text-gray-400">
        </Link>

        <div className="hidden md:flex space-x-10 text-lg text-white">
        <Link to="/" className="block hover:text-gray-400">Home</Link>
          <Link to="/about" className="block hover:text-gray-400">About</Link>
          <Link to="/contact" className="block hover:text-gray-400">Contact</Link>
          <Link to="/card" className="block hover:text-gray-400">profile</Link>
        </div>

        <button
          onClick={toggleTheme}
          className="flex items-center space-x-2 text-lg text-white  hover:text-gray-600 "
        >
            <span>{isDarkMode ? 'Dark' : 'Light'}</span>
          
        </button>

       
      </div>

      {isMenuOpen && (
        <div className="md:hidden dark:bg-red-600 bg-gray-800 text-white p-4 space-y-4">
          <Link to="/" className="block hover:text-gray-400">Home</Link>
          <Link to="/about" className="block hover:text-gray-400">About</Link>
          <Link to="/contact" className="block hover:text-gray-400">Contact</Link>
          <Link to="/card" className="block hover:text-gray-400">profile</Link>

          <button
            onClick={toggleTheme}
            className="${isDarkMode ? ' Dark' : ' Light'} px-10 h-12 py-2 m-2.5 rounded-full bg-blue-50"
          >
            
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
