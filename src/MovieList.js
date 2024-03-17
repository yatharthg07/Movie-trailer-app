
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Trailer from './Trailer';
import { getMovies, searchMovies } from './api.js';

function MovieList({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);

  useEffect(() => {
    setSelectedMovie(null);
    setSelectedMovieIndex(null);
    if (searchTerm) {
      searchMovies(searchTerm).then(data => {
        setMovies(data.results);
      });
    } else {
    
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
   <div style={{width:"320px"}}>
    <React.Fragment key={movie.id}>
      <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie, index)} />
      {selectedMovieIndex === index && (
        <div className={`${selectedMovieIndex === index ? 'selected' : ''}`}>
          <Trailer movie={selectedMovie} />
        </div>
      )}
    </React.Fragment>
    </div> 

  ));

  return (
    <div className="MovieList">
      {movieCards}
    </div>
  );
}

export default MovieList;
