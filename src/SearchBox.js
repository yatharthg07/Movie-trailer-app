import React from 'react';
import './SearchBox.css'; 

function SearchBox({ searchTerm, setSearchTerm }) {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="SearchBox">
      <input
        className="SearchBox-input"
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
