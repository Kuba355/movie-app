import React, { useEffect, useState } from 'react';
import './MyListFav.scss';
import MovieCard from '../components/MovieCard'; // Importuj komponent MovieCard lub stwórz własny

const MyListFav = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Pobierz ulubione filmy z localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []); // Wywołaj tylko raz, po zamontowaniu komponentu

  return (
    <div className="my-list">
      <h2>Your Favorites</h2>
      <div className="favorites-grid">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} /> // Wyświetlenie ulubionych filmów
          ))
        ) : (
          <p>No favorite movies added yet!</p>
        )}
      </div>
    </div>
  );
};

export default MyListFav;