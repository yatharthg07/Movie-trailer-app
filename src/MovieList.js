import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Trailer from './Trailer';
import { searchMovies, getNowPlaying, getPopular, getTopRated, getUpcoming } from './api.js';

function MovieList({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Latest'); 

  useEffect(() => {
    setSelectedMovie(null);
    setSelectedMovieIndex(null);

    switch (selectedCategory) {
      case 'Latest':
        getNowPlaying().then(data => {
          setMovies(data.results);
        });
        break;
      case 'Popular':
        getPopular().then(data => {
          setMovies(data.results);
        });
        break;
      case 'TopRated':
        getTopRated().then(data => {
          setMovies(data.results);
        });
        break;
      case 'Upcoming':
        getUpcoming().then(data => {
          setMovies(data.results);
        });
        break;
      default:
        getNowPlaying().then(data => {
          setMovies(data.results);
        });
        break;
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm).then(data => {
        setMovies(data.results);
        setSelectedCategory(null);
      });
    } else {
      getNowPlaying().then(data => {
        setMovies(data.results);
        setSelectedCategory('Latest');
      });
    }
  }, [searchTerm]);

  function handleMovieClick(movie, index) {
    if (selectedMovieIndex === index) {
      setSelectedMovie(null);
      setSelectedMovieIndex(null);
    } else {
      setSelectedMovie(movie);
      setSelectedMovieIndex(index);
    }
  }

  const movieCards = movies.map((movie, index) => (
    <div key={movie.id} style={{ width: "320px" }}>
      <React.Fragment>
        <MovieCard movie={movie} onClick={() => handleMovieClick(movie, index)} />
        {selectedMovieIndex === index && (
          <div className={`${selectedMovieIndex === index ? 'selected' : ''}`}>
            <Trailer movie={selectedMovie} />
          </div>
        )}
      </React.Fragment>
    </div>
  ));

  return (
    <div>
      <div className="CategoryButtons">
        <button onClick={() => setSelectedCategory('Latest')}>Now Playing</button>
        <button onClick={() => setSelectedCategory('Popular')}>Popular</button>
        <button onClick={() => setSelectedCategory('TopRated')}>Top Rated</button>
        <button onClick={() => setSelectedCategory('Upcoming')}>Upcoming</button>
      </div>
      <h3 className='CategoryHeading'>{searchTerm ? `Search Results for "${searchTerm}"` : ` ${selectedCategory} Movies`}</h3>
      <div className="MovieList">
        {movieCards}
      </div>
    </div>
  );
}

export default MovieList;
