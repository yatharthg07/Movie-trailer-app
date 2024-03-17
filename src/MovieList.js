// MovieList.js
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Trailer from './Trailer';
import { getMovies, searchMovies } from './api.js';

function MovieList({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      // Fetch movies based on search term
      searchMovies(searchTerm).then(data => {
        setMovies(data.results);
      });
    } else {
      // Fetch popular movies when search term is empty
      getMovies().then(data => {
        setMovies(data);
      });
    }
  }, [searchTerm]);

  function handleMovieClick(movie, index) {
    setSelectedMovie(movie);
    setSelectedMovieIndex(index);
  }

  const movieCards = movies.map((movie, index) => (
    <React.Fragment key={movie.id}>
      <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie, index)} />
      {selectedMovieIndex === index && (
        <div className={`TrailerRow ${selectedMovieIndex === index ? 'selected' : ''}`}>
          <Trailer movie={selectedMovie} />
        </div>
      )}
    </React.Fragment>
  ));

  return (
    <div className="MovieList">
      {movieCards}
    </div>
  );
}

export default MovieList;
