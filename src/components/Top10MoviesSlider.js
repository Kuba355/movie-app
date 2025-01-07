import React from 'react';
import UniversalSlider from './UniversalSlider';
import MovieCard from './MovieCard'; // Komponent karty filmu

const Top10MoviesSlider = () => {
  return (
    <UniversalSlider
      endpoint="https://api.themoviedb.org/3/movie/popular"
      queryParams={{}}
      title="Top 10 Movies"
      renderCard={(movie) => <MovieCard movie={movie} />}
    />
  );
};

export default Top10MoviesSlider;