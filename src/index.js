import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Set CSS variable for background image
document.documentElement.style.setProperty('--bg-image', `url(${process.env.PUBLIC_URL}/걸어서고대속으로2-01.jpg)`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
