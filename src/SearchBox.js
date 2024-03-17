import React, { useRef } from 'react';
import './SearchBox.css';

function SearchBox({ searchTerm, setSearchTerm }) {
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
    </div>
  );
}

export default SearchBox;
