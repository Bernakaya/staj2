import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PopularDrink.css';

const PopularDrinks = () => {
  const [popularDrinks, setPopularDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/popular.php';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '64d4522c07mshde4bf393369f4d5p1f3063jsn326b2c6e4693',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setPopularDrinks(result.drinks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  return (
    <div className="popular-drinks-container">
      <h1 className="title">Popüler İçecekler</h1>
      <ul className="drinks-list">
        {chunkArray(popularDrinks.slice(0, 12), 3).map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((drink) => (
              <li key={drink.idDrink} className="drink-item">
                <Link to={`/drink/${drink.idDrink}`} className="drink-link">
                  <div className="drink-image-container">
                    <img
                      className="drink-image"
                      src={drink.strDrinkThumb}
                      alt={drink.strDrink}
                    />
                  </div>
                  <div className="drink-name">{drink.strDrink}</div>
                </Link>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PopularDrinks;
