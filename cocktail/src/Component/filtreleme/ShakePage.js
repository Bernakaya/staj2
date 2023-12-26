// ShakePage.js
import React, { useState, useEffect } from 'react';
import './scss/commonstyle.css';
import { Link } from 'react-router-dom';
const ShakePage = () => {
  const [shakeList, setShakeList] = useState([]);

  useEffect(() => {
    const fetchShakeList = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?c=Shake';
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
        setShakeList(data.drinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShakeList();
  }, []);

  return (
    <div className='container2'>
      <h2>Shake List</h2>
      <ul>
        {shakeList.map((drink) => (
          <li key={drink.idDrink}>
            <Link to={`/drink/${drink.idDrink}`}>
    <h3>{drink.strDrink}</h3>
    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
  </Link>
            <ul>
              {Array.from({ length: 15 }, (_, index) => index + 1).map((ingredientIndex) => {
                const ingredient = drink[`strIngredient${ingredientIndex}`];
                const measure = drink[`strMeasure${ingredientIndex}`];
                if (ingredient && measure) {
                  return (
                    <li key={ingredientIndex}>
                      {measure} {ingredient}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShakePage;
