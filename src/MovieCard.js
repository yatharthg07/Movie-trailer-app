
import React from 'react';
import { getImageUrl } from './api';

function MovieCard({ movie, onClick }) {
  return (
    <div className="MovieCard" onClick={onClick}>
      <img src={getImageUrl(movie.poster_path)} alt={movie.title} /> 
      <h2>{movie.title}</h2>
    </div>
  );
}

export default MovieCard;
