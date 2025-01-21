import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar.js';


function App() {

  const [allNames, setAllNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);


  const fetchAllNames = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setAllNames(data);
      setFilteredNames(data);
    } catch (error) {
      console.error("Error fetching names:", error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredNames(allNames);
    } else {
      const filtered = allNames.filter((name) => 
        name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredNames(filtered);
    }
  };

  return (
    <div className="App">
      <SearchBar 
      onSearchClick={handleSearch}

      />
    </div>
  );
}

export default App;
