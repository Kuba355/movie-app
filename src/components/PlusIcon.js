import React from 'react';
import icon from '../assets/icons/plus.svg';
import {addToWatchlist} from '../utils/localStorageHelper';



const PlusIcon = ({movie}) => {
  return <button className="btnIcon" onClick={() => addToWatchlist(movie)}><img src={icon} alt="Plus Icon" /></button>;
};

export default PlusIcon;