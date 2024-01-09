import React, { useState } from 'react';
import axios from 'axios';
import './SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://the-cocktail-db.p.rapidapi.com/search.php', {
        params: { s: searchTerm },
        headers: {
          'X-RapidAPI-Key': '64d4522c07mshde4bf393369f4d5p1f3063jsn326b2c6e4693',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
        },
      });

      setSearchResults(response.data.drinks || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tüm içecekleri ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Ara</button>
      </div>

      <div className="search-results">
        {searchResults.map((drink) => (
          <div key={drink.idDrink} className="drink-card">
            {drink.strDrinkThumb && (
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            )}
            <p>{drink.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
