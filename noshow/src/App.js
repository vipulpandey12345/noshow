import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar.js';


function App() {

  const [allNames, setAllNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);


  const fetchAllNames = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
  };

  return (
    <div className="App">
      <SearchBar onSearchClick={handleSearch} />
    </div>
  );
}

export default App;
