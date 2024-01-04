// OptionalAlcoholPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scss/commonstyle.css';

const OptionalAlcoholPage = () => {
  const [optionalAlcoholList, setOptionalAlcoholList] = useState([]);

  useEffect(() => {
    const fetchOptionalAlcoholList = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?c=Optional Alcohol';
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

        // Kontrol et: Veri bir dizi mi?
        if (Array.isArray(data.drinks)) {
          setOptionalAlcoholList(data.drinks);
        } else {
          console.error('API verisi bir dizi içermiyor:', data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchOptionalAlcoholList();
  }, []);

  return (
    <div className='container2'>
      <h2>Optional Alcohol Drink List</h2>
      <ul>
        {optionalAlcoholList.map((drink) => (
          <li key={drink.idDrink}>
           
            <Link to={`/drink/${drink.idDrink}`}  className="cocktail-link">
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

export default OptionalAlcoholPage;
