import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; // Importing MovieCard component
import Trailer from './Trailer'; // Importing Trailer component
import { searchMovies, getNowPlaying, getPopular, getTopRated, getUpcoming } from './api.js'; // Importing API functions

function MovieList({ searchTerm }) {
  // State variables
  const [movies, setMovies] = useState([]); // State for storing movie data
  const [selectedMovie, setSelectedMovie] = useState(null); // State for storing selected movie
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null); // State for storing selected movie index
  const [selectedCategory, setSelectedCategory] = useState('Latest'); // State for storing selected category

  // Fetch movies based on selected category
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

  // Fetch movies based on search term
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

  // Handle click on movie card
  function handleMovieClick(movie, index) {
    if (selectedMovieIndex === index) {
      setSelectedMovie(null); // Deselect if already selected
      setSelectedMovieIndex(null);
    } else {
      setSelectedMovie(movie); // Select the movie
      setSelectedMovieIndex(index);
    }
  }

  // Generate movie cards
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

  // Render the component
  return (
    <div>
      {/* Category buttons */}
      <div className="CategoryButtons">
        <button onClick={() => setSelectedCategory('Latest')}>Now Playing</button>
        <button onClick={() => setSelectedCategory('Popular')}>Popular</button>
        <button onClick={() => setSelectedCategory('TopRated')}>Top Rated</button>
        <button onClick={() => setSelectedCategory('Upcoming')}>Upcoming</button>
      </div>
      {/* Category heading */}
      <h3 className='CategoryHeading'>{searchTerm ? `Search Results for "${searchTerm}"` : ` ${selectedCategory} Movies`}</h3>
      {/* Movie list */}
      <div className="MovieList">
        {movieCards}
      </div>
    </div>
  );
}

export default MovieList;
