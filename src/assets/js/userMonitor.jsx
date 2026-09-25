/*
  Path: src/assets/js/userMonitor.jsx
  Description: User monitoring functionality for the personal website.
  Author: Richard Anderson.
  Last Updated: 25-September-2026.
  Version: 1.0.0.
  Note: Temporarily simplified to log to the console.
*/

import { useEffect } from 'react';

const userMonitor = () => {
  // Log message to console when component mounts.
  useEffect(() => {
    console.log('UserMonitor component is active.');
  }, []);

  // Renders nothing visually.
  return null;
};

export default userMonitor;