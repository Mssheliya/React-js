import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Nav } from './first';

const nav = ReactDOM.createRoot(document.getElementById('head'));
nav.render(
    <React.StrictMode>
      <Nav />
    </React.StrictMode>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
