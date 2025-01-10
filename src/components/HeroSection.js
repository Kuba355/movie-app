import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HeroSection.scss';
import HeartIcon from './HeartIcon';
import BrokenHeartIcon from './BrokenHeartIcon';
import PlusIcon from './PlusIcon';

const HeroSection = () => {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const handleSeeMore = () => {
    if (movie) {
      navigate(`/movie/${movie.id}`); // Używamy ID z `movie`
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: 'en-US',
            page: 1,
          },
        });

        // Wybieramy losowy film z popularnych
        const randomMovie = response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
        setMovie(randomMovie);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, []);

  if (!movie) return <div>Loading...</div>;

  return (
    <section
      className='heroSection'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="heroSectionInner">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className="heroButtons">
            <button className="btnPrimary btn" onClick={handleSeeMore}>See more</button>
            <HeartIcon movie={movie} />
            <BrokenHeartIcon movie={movie} />
            <PlusIcon movie={movie} />
          </div>
      </div>
    </section>
  );
};

export default HeroSection;