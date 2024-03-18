import React, { useState } from 'react';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import './styles.css'; // Importing styles

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Function to handle search
  const handleSearch = () => {
    console.log('Search performed for:', searchTerm); // Log search term to console
  };

  return (
    <div className="App"> {/* Main container */}
      <div class="background"></div> {/* Background element */}
      <h1 className='Header'> {/* Header */}
        <a href="/Movie-trailer-app">Trailer-Flix</a> {/* Title with link */}
      </h1>
      {/* Search box component */}
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      {/* Movie list component with search term */}
      <MovieList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
