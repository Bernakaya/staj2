import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PopularDrinks from './Component/popular/PopularDrinks';
import DrinkDetail from './Component/popular/DrinkDetail';
import AlcoholicPage from './Component/filtreleme/AlcoholicPage.js';
import NonAlcoholicPage from './Component/filtreleme/NonAlcoholicPage.js';
import Footer from './Component/footer/Footer.js';
 import Header2 from './Component/header/header2.js';

import SearchPage from './Component/search/SearchPage.js';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '64d4522c07mshde4bf393369f4d5p1f3063jsn326b2c6e4693',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
        },
      });

      if (!response.ok) {
        throw new Error('Arama sorgusu başarısız oldu.');
      }

      const data = await response.json();
      setSearchResults(data.drinks || []);
    } catch (error) {
      console.error('Arama işlemi sırasında bir hata oluştu:', error.message);
    }
  };

  return (
    <Router>
      <div>
      <Header2 onSearch={handleSearch} /> 
        {/* <Header/> */}
        <div>
          {searchResults.map((result) => (
            <div key={result.idDrink}>
              <h3>{result.strDrink}</h3>
              <p>{result.strInstructions}</p>
            </div>
          ))}
        </div>

        <hr />

        <Routes>
          <Route path="/" element={<PopularDrinks />} />
          <Route path="/drink/:id" element={<DrinkDetail />} />
          <Route path="/alkollu" element={<AlcoholicPage />} />
          <Route path="/alkolsuz" element={<NonAlcoholicPage />} />
          <Route path="/search" element={<SearchPage searchResults={searchResults} />} />
        </Routes>

        <hr />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
