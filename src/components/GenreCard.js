import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GenreCard.scss'; // Możesz dodać dedykowany plik stylów

const GenreCard = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        const movieResponse = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: 'en-US',
            with_genres: genre.id,
            sort_by: 'popularity.desc',
          },
        });

        setMovies(movieResponse.data.results.slice(0, 4)); // Pobieramy 4 filmy
      } catch (error) {
        console.error(`Error fetching movies for genre ${genre.id}:`, error);
      }
    };

    fetchMoviesByGenre();
  }, [genre.id]);

  return (
    <div className="genre-card">
      <div className="movie-grid">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
      <h3>{genre.name}</h3>
    </div>
  );
};

export default GenreCard;