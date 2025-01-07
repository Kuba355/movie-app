import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.scss'; // Stylizacja dla szczegółów filmu

const MovieDetails = () => {
  const { id } = useParams(); // Pobieramy ID filmu z URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: 'en-US',
          },
        });
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p><strong>Release Year:</strong> {movie.release_date.split('-')[0]}</p>
        <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
        <p><strong>Languages:</strong> {movie.spoken_languages.map((lang) => lang.english_name).join(', ')}</p>
        <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
      </div>
    </div>
  );
};

export default MovieDetails;