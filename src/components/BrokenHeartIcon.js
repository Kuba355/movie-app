import React from 'react';
import icon from '../assets/icons/heart-broken.svg';
import {addToDisliked} from '../utils/localStorageHelper';

const BrokenHeartIcon = ({movie}) => {
  return <button className="btnIcon" onClick={() => addToDisliked(movie)}><img src={icon} alt="Broken Heart Icon" /></button>

};
export default BrokenHeartIcon;