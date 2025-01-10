import React, { useEffect, useState } from "react";
import './MyListUser.scss';
import placeholderImage from '../assets/img/placeholder-img.png';
import RevIcon from '../assets/icons/userlist-reviews.svg';
import FavIcon from '../assets/icons/userlist-fav.svg';
import MovieIcon from '../assets/icons/userlist-movies.svg';
import UnprefIcon from '../assets/icons/userlist-unpreffered.svg';


const MyListUser = () => {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [dislikedCount, setDislikedCount] = useState(0);
  const [watchlistCount, setWatchlistCount] = useState(0);

  // Funkcja do aktualizacji liczników
  const updateCounts = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const disliked = JSON.parse(localStorage.getItem('disliked')) || [];
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    setFavoritesCount(favorites.length);
    setDislikedCount(disliked.length);
    setWatchlistCount(watchlist.length);
  };

  // Wywołaj updateCounts przy montowaniu komponentu
  useEffect(() => {
    updateCounts();

    // Nasłuchiwanie zmian w localStorage
    const handleStorageChange = () => {
      updateCounts();
    };

    window.addEventListener('storage', handleStorageChange);

    // Czyszczenie po odmontowaniu komponentu
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="profile-container">
        <div className="profile-grid">
          <div className="profile">
            <div className="user">
              <img src={placeholderImage} alt="profile name" />
              <div className='user-profile-data'>
                <h2 className="user-names">Name and Surname</h2>
                <div className="user-divider"></div>
                <p>nameandsurname@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="user-data">
            <div className='user-data-box'><span className="user-data-box-icon"><img  src={FavIcon} alt='favorite icon' /></span>{favoritesCount} your favourites</div>
            <div className='user-data-box'><span className="user-data-box-icon"><img  src={UnprefIcon} alt='unpreffered icon' /></span>{dislikedCount} your unpreferred</div>
            <div className='user-data-box'><span className="user-data-box-icon"><img  src={MovieIcon} alt='movie icon' /></span>{watchlistCount} you want to watch</div>
            <div className='user-data-box'><span className="user-data-box-icon"><img  src={RevIcon} alt='review icon' /></span>845 Reviews</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyListUser;