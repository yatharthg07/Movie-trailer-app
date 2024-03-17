// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import './styles.css'; // Import global styles

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <h1>Movie App</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MovieList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
