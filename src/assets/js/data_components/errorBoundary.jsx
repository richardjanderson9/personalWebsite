/*
  Path: src/assets/js/errorBoundary.jsx
  Description: Error boundary component to catch and display runtime errors gracefully.
  Author: Richard Anderson.
  Last Updated: 20-June-2026.
  Version: 1.0.1.
  Note: Wraps child components and renders a fallback UI on uncaught errors.
*/

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;