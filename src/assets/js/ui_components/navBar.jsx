/*
  Path: src/assets/js/ui_components/navBar.jsx
  Description: Navigation bar component for the personal website.
  Author: Richard Anderson.
  Last Updated: 29-September-2026.
  Version: 1.5.1.
  Note: Renders the navigation bar for the personal website.
*/

// Import React library for creating components.
import React from 'react';

// Define the Navbar functional component.
const Navbar = () => {
  return (
    <nav className="site-navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand">Richard Anderson</a>
        <ul className="navbar-links">
          <li><a href="#home" className="navbar-link navbar-home">Home</a></li>
          <li><a href="#projects" className="navbar-link navbar-projects">Projects</a></li>
          <li><a href="#photography" className="navbar-link navbar-photography">Photography</a></li>
          <li><a href="#socials" className="navbar-link navbar-socials">Socials</a></li>
        </ul>
      </div>
    </nav>
  );
};

// Export the Navbar component for use in other parts of the application.
export default Navbar;