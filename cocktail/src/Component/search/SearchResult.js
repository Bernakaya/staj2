// components/SearchResult.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResault.css'

const SearchResult = ({ searchResults }) => {
  return (
    <div>
      <ul>
        {searchResults.map((drink) => (
          <li key={drink.idDrink}>
            <Link to={`/drink/${drink.idDrink}`}>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              {drink.strDrink}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
