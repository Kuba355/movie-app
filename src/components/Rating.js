import React from 'react';
import './Rating.scss'; // Stylizacja dla komponentu Rating

const Rating = ({ rating }) => {
  // Oblicz liczbę pełnych gwiazdek, pół gwiazdek i pustych gwiazdek
  const fullStars = Math.floor(rating / 2); // Liczba pełnych gwiazdek
  const halfStar = rating % 2 >= 1; // Czy mamy pół gwiazdki
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Liczba pustych gwiazdek

  return (
    <div className="rating" title={`Rating ${rating}`}>
      {/* Pełne gwiazdki */}
      {[...Array(fullStars)].map((_, index) => (
        <i key={`full-${index}`} className="fas fa-star full"></i>
      ))}

      {/* Pół gwiazdki */}
      {halfStar && <i className="fas fa-star-half-alt half"></i>}

      {/* Puste gwiazdki */}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={`empty-${index}`} className="far fa-star empty"></i>
      ))}
    </div>
  );
};

export default Rating;