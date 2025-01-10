import React, { useEffect, useState } from 'react';
import './MyListUnpreffered.scss';
import MovieCard from '../components/MovieCard'; // Importuj komponent MovieCard lub stwórz własny

const MyListUnpreffered = () => {
  const [unpreffered, setUnpreffered] = useState([]);

  useEffect(() => {
    // Pobierz ulubione filmy z localStorage
    const storedUnpreffered = JSON.parse(localStorage.getItem('disliked')) || [];
    setUnpreffered(storedUnpreffered);
  }, []); // Wywołaj tylko raz, po zamontowaniu komponentu

  return (
    <div className="my-list">
      <h2>Your Unpreffered Movies</h2>
      <div className="unpreffered-grid">
        {unpreffered.length > 0 ? (
          unpreffered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} /> // Wyświetlenie ulubionych filmów
          ))
        ) : (
          <p>No favorite movies added yet!</p>
        )}
      </div>
    </div>
  );
};

export default MyListUnpreffered;