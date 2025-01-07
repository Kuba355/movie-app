import React from 'react';
import HeroSection from '../components/HeroSection';
import GenreSlider from '../components/GenreSlider';
import Top10MoviesSlider from '../components/Top10MoviesSlider';

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="app-section">
        <div className="sliders-wrapper" data-attr="Movies">
           <div>
            <GenreSlider />
          </div>
          <div>
            <Top10MoviesSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;