// DrinkList.js
import React, { useState, useEffect } from 'react';

const DrinkList = ({ match }) => {
  const [drinks, setDrinks] = useState([]);
  const category = match.params.category;

  useEffect(() => {
    const fetchDrinks = async () => {
      const url = `https://the-cocktail-db.p.rapidapi.com/filter.php?c=${category}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '64d4522c07mshde4bf393369f4d5p1f3063jsn326b2c6e4693',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setDrinks(result.drinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDrinks();
  }, [category]);

  return (
    <div>
      <h1>{category} İçecekleri</h1>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <p>{drink.strDrink}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinkList;
