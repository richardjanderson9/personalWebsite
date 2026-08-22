/*
  Path: src/assets/js/userInterface.jsx
  Description: Coming soon page for the personal website.
  Author: Richard Anderson.
  Last Updated: 20-June-2026.
  Version: 2.0.0.
  Note: Replaces the old template UI with a simple coming soon screen.
*/

// CSS Imports.
import '../css/index.css';
import '../css/userInterface.css';

const UserInterface = () => {
  // Main Render — coming soon page.
  return (
    <div className="coming-soon-wrapper">

      {/* Page heading */}
      <h1 className="coming-soon-heading">Coming Soon</h1>

      {/* Subtext */}
      <p className="coming-soon-sub">Something great is on its way. Check back later!</p>

    </div>
  );
};

export default UserInterface;