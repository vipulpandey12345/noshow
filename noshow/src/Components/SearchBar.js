import React from 'react';
import '../Styles/SearchBar.css';



const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
