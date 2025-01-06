import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import GenreCard from './GenreCard'; // Importujemy komponent GenreCard
import './GenreSlider.scss'; // Styl dla slajdera

const GenreSlider = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreResponse = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: 'en-US',
          },
        });

        setGenres(genreResponse.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="genre-slider">
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        loop
      >
        {genres.map((genre) => (
          <SwiperSlide key={genre.id}>
            <GenreCard genre={genre} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GenreSlider;