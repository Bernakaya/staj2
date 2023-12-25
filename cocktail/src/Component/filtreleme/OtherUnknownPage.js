// OtherUnknownPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './commonstyle.css';

const OtherUnknownPage = () => {
  const [otherUnknownList, setOtherUnknownList] = useState([]);

  useEffect(() => {
    const fetchOtherUnknownList = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?c=Other / Unknown';
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
        setOtherUnknownList(data.drinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOtherUnknownList();
  }, []);

  return (
    <div className='container2'>
      <h2>Other / Unknown Drink List</h2>
      <ul>
        {otherUnknownList.map((drink) => (
          <li key={drink.idDrink}>
       

            <Link to={`/drink/${drink.idDrink}`}>
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

export default OtherUnknownPage;
