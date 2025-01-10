export const addToDisliked = (movie) => {
    const disliked = JSON.parse(localStorage.getItem('disliked')) || [];
    localStorage.setItem('disliked', JSON.stringify([...disliked, movie]));
    alert(`${movie.title} added to disliked movies!`);
  };

export const addToFavorites = (movie) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
    alert(`${movie.title} added to favorites!`);
  };
export const addToWatchlist = (movie) => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    localStorage.setItem('watchlist', JSON.stringify([...watchlist, movie]));
    alert(`${movie.title} added to watchlist!`);
  };