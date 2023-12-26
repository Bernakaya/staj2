// NonAlcoholicPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scss/commonstyle.css';

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const NonAlcoholicPage = () => {
  const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([]);

  useEffect(() => {
    const fetchNonAlcoholicDrinks = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non_Alcoholic';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '64d4522c07mshde4bf393369f4d5p1f3063jsn326b2c6e4693',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setNonAlcoholicDrinks(data.drinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNonAlcoholicDrinks();
  }, []);

  return (
    <div className="non-alcoholic-body">
      <h2 className="non-alcoholic-h2">Alkolsüz İçecekler</h2>
      {chunkArray(nonAlcoholicDrinks, 3).map((row, rowIndex) => (
        <ul key={rowIndex} className="non-alcoholic-ul">
          {row.map((drink) => (
            <li key={drink.idDrink} className="non-alcoholic-li">
              <Link to={`/drink/${drink.idDrink}`} className="non-alcoholic-a">
                <h3 className="non-alcoholic-h3">{drink.strDrink}</h3>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="non-alcoholic-img"
                />
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default NonAlcoholicPage;
