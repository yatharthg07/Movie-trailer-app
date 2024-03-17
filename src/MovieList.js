import React from 'react';
import MovieCard from './MovieCard';
import Trailer from './Trailer';
import { getMovies } from './api.js';

function MovieList({ searchTerm }) {
  const [movies, setMovies] = React.useState([]);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [selectedMovieIndex, setSelectedMovieIndex] = React.useState(null);

  React.useEffect(() => {
    getMovies().then(data => {
      setMovies(data);
    });
  }, []);

  function handleMovieClick(movie, index) {
    setSelectedMovie(movie);
    setSelectedMovieIndex(index);
  }

  const movieRows = movies.filter((movie, index) => movie.title.toLowerCase().includes(searchTerm.toLowerCase())).map((movie, index) => (
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
      {movieRows}
    </div>
  );
}

export default MovieList;