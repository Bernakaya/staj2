import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      <h2>Arama Sonuçları</h2>
      {/* Sonuçları ekrana yazdır */}
      {searchResults.map((result) => (
        <div key={result.idDrink}>
          <h3>{result.strDrink}</h3>
          <p>{result.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResultsPage;
