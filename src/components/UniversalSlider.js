import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './UniversalSlider.scss'; // Uniwersalny styl

const UniversalSlider = ({ endpoint, queryParams, title, renderCard }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint, {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: 'en-US',
            ...queryParams,
          },
        });

        setData(response.data.results || response.data.genres);
      } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
      }
    };

    fetchData();
  }, [endpoint, queryParams]);

  return (
    <div className="universal-slider">
      <h2>{title}</h2>
      <Swiper spaceBetween={20} slidesPerView={5} loop>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderCard(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UniversalSlider;