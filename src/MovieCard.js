import React, { useState } from 'react';
import { getImageUrl } from './api';

function MovieCard({ movie, onClick }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="MovieCard" onClick={onClick}>
      {imageError ? (
        <img src='no_img.jpg' alt="Movie Poster" />
      ) : (
        <img src={getImageUrl(movie.poster_path)} alt={movie.title} onError={handleImageError} />
      )}
      <h2 className='MovieTitle'>{movie.title}</h2>
    </div>
  );
}

export default MovieCard;
