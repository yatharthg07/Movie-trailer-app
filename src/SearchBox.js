import React, { useRef } from 'react';
import './SearchBox.css';

function SearchBox({ searchTerm, setSearchTerm, handleSearch }) {
  const inputRef = useRef(null);

  const handleShortcut = event => {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      inputRef.current.focus();
    }
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleShortcut);
    return () => {
      document.removeEventListener('keydown', handleShortcut);
    };
  }, []);

  return (
    <div className="SearchBox">
      <input
        ref={inputRef}
        className="SearchBox-input"
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="SearchBox-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;
