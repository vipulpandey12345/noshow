import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar.js';


function App() {

  const [allNames, setAllNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const fetchAllNames = async () => {
    try{
      const response = await fetch('http://127.0.0.1:5000/get_all_names');
      const data = await response.json();
      setAllNames(data.data);
      setFilteredNames(data.data);
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
      searchTerm={searchTerm}
      onSearchChange={handleSearch}
      onSearchClick={fetchAllNames}
      filteredNames={filteredNames}
      />
    </div>

  );
}

export default App;
