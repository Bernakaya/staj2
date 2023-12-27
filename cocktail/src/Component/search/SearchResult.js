// components/SearchResult.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResault.css';

const SearchResult = ({ searchResults }) => {
  // Her satırda gösterilecek içecek sayısı
  const drinksPerRow = 4;

  const rows = [];
  for (let i = 0; i < searchResults.length; i += drinksPerRow) {
    const row = searchResults.slice(i, i + drinksPerRow);
    rows.push(row);
  }

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <ul key={rowIndex} className="drink-row">
          {row.map((drink) => (
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
      ))}
    </div>
  );
};

export default SearchResult;
