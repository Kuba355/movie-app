import React from 'react';
import UniversalSlider from './UniversalSlider';
import GenreCard from './GenreCard';

const GenreSlider = () => {
  return (
    <UniversalSlider
      endpoint="https://api.themoviedb.org/3/genre/movie/list"
      queryParams={{}}
      title="Our Genres"
      renderCard={(genre) => <GenreCard genre={genre} />}
    />
  );
};

export default GenreSlider;