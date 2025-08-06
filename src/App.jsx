import React from 'react';

// Layout
import AppLayout from './layout';

// Pages
import HomePage from './pages/Home/HomePage.jsx';

/**
 * Root App Component
 * Features: Clean separation between layout and pages
 */
function App() {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  );
}

export default App;
