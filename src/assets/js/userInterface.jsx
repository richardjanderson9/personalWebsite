/*
  Path: src/assets/js/userInterface.jsx
  Description: Coming soon page for the personal website.
  Author: Richard Anderson.
  Last Updated: 25-September-2026.
  Version: 2.1.2.
  Note: Includes animated gradient heading, typing subtext, and dynamic GitHub button from importantLinks.json.
*/

// CSS Imports.
import '../css/index.css';
import '../css/userInterface.css';

// JSON Links Import
import linksData from '../json/importantLinks.json';

const UserInterface = () => {
  // Extract GitHub URL from importantLinks data (falling back safely if needed)
  const githubUrl = linksData?.github || 'https://github.com/richardjanderson9/personalWebsite';

  // Main Render — coming soon page.
  return (
    <div className="coming-soon-wrapper">
      {/* Page heading with gradient */}
      <h1 className="coming-soon-heading">Coming Soon</h1>
      
      {/* Subtext with typing effect */}
      <p className="coming-soon-sub">Something great is on its way. Check back later!</p>

      {/* GitHub Link Button */}
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-button"
      >
        GitHub Repository
      </a>
    </div>
  );
};

export default UserInterface;