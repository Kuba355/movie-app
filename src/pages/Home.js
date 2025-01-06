import React from 'react';
import HeroSection from '../components/HeroSection';
import GenreSlider from '../components/GenreSlider';

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="app-section">
        <div className="sliders-wrapper" data-attr="Movies">
            <h2>Our Genres</h2>
            <GenreSlider />   
        </div>
      </section>
    </>
  );
};

export default Home;