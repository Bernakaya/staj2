// OrdinaryDrinkPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scss/commonstyle.css';
const OrdinaryDrinkPage = () => {
  const [ordinaryDrinkList, setOrdinaryDrinkList] = useState([]);

  useEffect(() => {
    const fetchOrdinaryDrinkList = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?c=Ordinary Drink';
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
        setOrdinaryDrinkList(data.drinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrdinaryDrinkList();
  }, []);

  return (
    <div className='container2'>
      <h2>Ordinary Drink List</h2>
      <ul>
        {ordinaryDrinkList.map((drink) => (
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

export default OrdinaryDrinkPage;
