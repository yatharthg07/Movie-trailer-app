
import React, { useState } from 'react';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import './styles.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Search performed for:', searchTerm);
  };
  return (
    
    <div className="App">
      <div class="background"></div>
      <h1 className='Header'>
        <a href="/">Trailer-Flix</a>
      </h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <MovieList searchTerm={searchTerm} />
    </div>
  );
}
  
export default App;
