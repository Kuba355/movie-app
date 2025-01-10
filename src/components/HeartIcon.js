import React from 'react';
import icon from '../assets/icons/heart-full-outline.svg';
import { addToFavorites } from '../utils/localStorageHelper';

const HeartIcon = ({ movie }) => {
  return (
    <button className="btnIcon" onClick={() => addToFavorites(movie)}>
      <img src={icon} alt="Heart Icon" />
    </button>
  );
};

export default HeartIcon;