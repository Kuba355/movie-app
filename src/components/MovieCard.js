import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MovieCard.scss';
import Rating from './Rating'; // Importujemy komponent Rating


const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const [runtime, setRuntime] = useState(null);

  // Konwersja minut na godziny i minuty
  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
  };

  const handleClick = () => {
    navigate(`/movie/${movie.id}`)
  }

  // Pobieranie szczegółów filmu, aby uzyskać runtime
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}`,
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              language: 'en-US',
            },
          }
        );
        setRuntime(response.data.runtime); // Ustaw runtime po otrzymaniu danych
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movie.id]);

  return (
    <div className="movie-card" onClick = {handleClick}> 
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-card__details">
        <div className="movie-info">
          <div className="movie-duration">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.75 4.61522 15.3848 0.25 10 0.25ZM10.75 4C10.75 3.58579 10.4142 3.25 10 3.25C9.58579 3.25 9.25 3.58579 9.25 4V10C9.25 10.4142 9.58579 10.75 10 10.75H14.5C14.9142 10.75 15.25 10.4142 15.25 10C15.25 9.58579 14.9142 9.25 14.5 9.25H10.75V4Z" fill="#999999"/>
            </svg>
            <span>{runtime ? formatRuntime(runtime) : 'N/A'}</span>
          </div>
          <div className="movie-rating">
            <Rating rating={movie.vote_average} />
            <span>{`${(movie.vote_count / 1000).toFixed(1)}K`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;