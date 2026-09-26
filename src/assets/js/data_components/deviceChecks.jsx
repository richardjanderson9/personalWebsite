/*
  Path: src/assets/js/deviceChecks.jsx
  Description: Device checking functionality for the personal website.
  Author: Richard Anderson.
  Last Updated: 25-September-2026.
  Version: 1.0.0.
  Note: Temporarily simplified to log to the console.
*/

import { useEffect } from 'react';

const deviceChecks = () => {
  // Log message to console when component mounts.
  useEffect(() => {
    console.log('DeviceChecks component is active.');
  }, []);

  // Renders nothing visually.
  return null;
};

export default deviceChecks;