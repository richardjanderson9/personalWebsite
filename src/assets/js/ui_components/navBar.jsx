/*
  Path: src/assets/js/ui_components/navBar.jsx
  Description: Navigation bar component for the personal website.
  Author: Richard Anderson.
  Last Updated: 26-September-2026.
  Version: 1.5.0.
  Note: Renders the navigation bar for the personal website.
*/

// Import React library for creating components.
import React from 'react';

// Import CSS for the navigation bar component.
import '../../css/navBar.css'; // Styles for the navigation bar component.

const Navbar = () => {
  return (
    <nav className="site-navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand">
          Richard Anderson
        </a>
        <ul className="navbar-links">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#socials" className="navbar-link">Socials</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;