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
          'X-RapidAPI-Key': '60bc55013dmsh1ce7455d35b1a1ap1d7b6cjsn81ab8b81d7a6',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
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
            <Link to={`/drink/${drink.idDrink}`} className="cocktail-link">
   
    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
     <h3>{drink.strDrink}</h3>
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
