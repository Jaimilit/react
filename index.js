import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 requires this import

// Create Navbar Component
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
    </nav>
  );
}

// Create MainContent Component
function MainContent() {
  return <h1>I am learning React</h1>;
}

// Get the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render both components inside the root div
root.render(
  <div>
    <Navbar />
    <MainContent />
  </div>
);