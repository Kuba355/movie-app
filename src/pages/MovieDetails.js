import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaCalendarAlt, FaGlobe, FaTags } from 'react-icons/fa';
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
            append_to_response: 'credits,reviews', // Dodajemy kredyty i recenzje do odpowiedzi
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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const halfStar = (rating % 2) >= 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <div className="stars">
        {Array(fullStars).fill(<FaStar className="star" />)}
        {halfStar ? <FaStar className="star half" /> : null}
        {Array(emptyStars).fill(<FaStar className="star empty" />)}
      </div>
    );
  };

  const cast = movie.credits && movie.credits.cast.slice(0, 3);
  const genres = movie.genres.slice(0, 2);

  return (
    <div className="movie-details">
      <div className="movie-info-wrapper">
        <div className="movie-poster-box">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <button className="add-review-btn">Add a Review</button>
        </div>
        <div className="movie-details-box">
          <div className="detail-item">
            <FaCalendarAlt className="icon" />
            <div>
              <span><strong>Released Year:</strong></span>
              <span>{movie.release_date.split('-')[0]}</span>
            </div>
          </div>
          <div className="detail-item">
            <FaGlobe className="icon" />
            <div>
              <span><strong>Available Languages:</strong></span>
              <div className="languages">
                {movie.spoken_languages.map((lang, index) => (
                  <span key={index} className="language-tag">{lang.english_name}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="detail-item">
            <FaStar className="icon" />
            <div>
              <span><strong>Rating:</strong></span>
              {renderStars(movie.vote_average)}
            </div>
          </div>
          <div className="detail-item">
            <FaTags className="icon" />
            <div>
              <span><strong>Genres:</strong></span>
              <div className="genres">
                {genres.map((genre, index) => (
                  <span key={index} className="genre-tag">{genre.name}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="detail-item">
            <h2>Cast</h2>
            <div className="cast-list">
              {cast && cast.length > 0 ? (
                cast.map((actor) => (
                  <div key={actor.cast_id} className="cast-member">
                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} className="circle" />
                    <p>{actor.name}</p>
                  </div>
                ))
              ) : (
                <p>No cast information available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
