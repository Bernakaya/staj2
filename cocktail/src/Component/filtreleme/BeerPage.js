// BeerPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scss/commonstyle.css';
const BeerPage = () => {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    const fetchBeerList = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?c=Beer';
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
        setBeerList(data.drinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBeerList();
  }, []);

  return (
    <div className='container2'>
      <h2>Beer List</h2>
      <ul>
        {beerList.map((drink) => (
          <li key={drink.idDrink}>
            
            {/* Resme tıklanabilir bir link ekleyin */}
            <Link to={`/drink/${drink.idDrink}`}>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            </Link>
            <h3>{drink.strDrink}</h3>
        
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

export default BeerPage;
