/*
  Path: src/assets/js/userInterface.jsx
  Description: Main user interface layout for the personal website.
  Author: Richard Anderson.
  Last Updated: 26-September-2026.
  Version: 2.3.0.
  Note: Renders the coming soon section followed by navbar, projects, and socials in order.
*/

// CSS Imports.
import '../css/index.css'; // Main index styles for the personal website.
// Custom CSS for the user interface layout.
import '../css/projects.css'; // Styles for the projects section component.
import '../css/socials.css'; // Styles for the social links section component.
import '../css/comingSoon.css'; // Styles for the coming soon section component.

// React and JSX Component Imports.
import NavBar from './ui_components/navBar.jsx'; // Navigation bar component for the personal website.
import Projects from './ui_components/projects.jsx'; // Projects section component for the personal website.
import Socials from './ui_components/socials.jsx'; // Social links section component for the personal website.
import ComingSoon from './ui_components/comingSoon.jsx'; // Coming soon section component for the personal website.

const UserInterface = () => {
  // Read flags from environment variables (fallback safely if undefined)
  const showAll = import.meta.env.VITE_SHOW_ALL === 'true';
  const showComingSoon = import.meta.env.VITE_SHOW_COMING_SOON !== 'false'; // Defaults to true unless explicitly set to 'false'

  return (
    <div className="user-interface-container">
      {showComingSoon && <ComingSoon />}
      
      {showAll && (
        <>
          <NavBar />
          <Projects />
          <Socials />
        </>
      )}
    </div>
  );
};

export default UserInterface;