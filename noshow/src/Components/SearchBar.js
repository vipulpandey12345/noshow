import React, { useState } from "react";
import "../Styles/SearchBar.css";
import "../Styles/CandidateCard.css";
import CandidateCard from "./CandidateCard.js";

const SearchBar = ({ searchTerm, onSearchChange, onSearchClick, filteredNames }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onClick={() => {
          onSearchClick();
          setIsFocused(true);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
      />
      {isFocused && filteredNames.length > 0 && (
        <div 
        className="dropdown-container" 
        onMouseDown={(e) => e.preventDefault()}
        >
          <ul className="dropdown-list">
            {filteredNames.map((name, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => setSelectedCandidate(name)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Render CandidateCard when a candidate is selected */}
      {selectedCandidate && (
        <div className="modal-overlay" onClick={() => setSelectedCandidate(null)}>
          <div className="candidate-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedCandidate(null)}>X</button>
            <CandidateCard name={selectedCandidate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
