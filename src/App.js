import { useEffect } from 'react';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.style.display = 'none';
    }
  }, []);
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Dodamy więcej tras później */}
        </Routes>
      </Router>
    );
}

export default App;
