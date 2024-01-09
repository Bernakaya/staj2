import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NonAlcoholicPage.css'

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
    <div>
      <h2>Alkolsüz İçecekler</h2>
      {chunkArray(nonAlcoholicDrinks, 3).map((row, rowIndex) => (
        <ul key={rowIndex}>
          {row.map((drink) => (
            <li key={drink.idDrink}>
              <Link to={`/drink/${drink.idDrink}`}>
                <h3>{drink.strDrink}</h3>
                <img src={drink.strDrinkThumb} alt={drink.strDrink}  />
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default NonAlcoholicPage;
