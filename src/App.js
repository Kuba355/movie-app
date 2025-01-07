import { useEffect } from 'react';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyList from './pages/MyList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails'; // Strona szczegółów filmu
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.style.display = 'none';
    }
  }, []);
    return (
      <Router>
           <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />

        </Routes>
        <Footer />
      </Router>
    );
}

export default App;
