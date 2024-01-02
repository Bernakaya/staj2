// CoffeeTeaPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scss/commonstyle.css';

const CoffeeTeaPage = () => {
  const [coffeeTeaList, setCoffeeTeaList] = useState([]);

  useEffect(() => {
    const fetchCoffeeTeaList = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?c=Coffee / Tea';
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
        setCoffeeTeaList(data.drinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoffeeTeaList();
  }, []);

  return (
    <div className='container2'>
      <h2>Coffee / Tea List</h2>
      <ul>
        {coffeeTeaList.map((drink) => (
          <li key={drink.idDrink}>
            
       
            <Link to={`/drink/${drink.idDrink}`} className="cocktail-link">
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              <h3>{drink.strDrink}</h3>
            </Link>
            <p>{drink.strInstructions}</p>
    
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

export default CoffeeTeaPage;
