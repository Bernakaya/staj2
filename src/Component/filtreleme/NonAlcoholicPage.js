// NonAlcoholicCocktailPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NonAlcoholicCocktailPage = () => {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    const fetchNonAlcoholicCocktailList = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non_Alcoholic'; // 'a=Non_Alcoholic' eklenen kısım
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
        setCocktailList(data.drinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNonAlcoholicCocktailList();
  }, []);

  return (
    <div className='container2'>
      <h2>Non-Alcoholic Cocktail List</h2>  
      <ul>
        {cocktailList.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <Link to={`/drink/${cocktail.idDrink}`} className="cocktail-link">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <h3>{cocktail.strDrink}</h3>
              <p>{cocktail.strInstructions}</p>
              <ul>
                {Array.from({ length: 15 }, (_, index) => index + 1).map((ingredientIndex) => {
                  const ingredient = cocktail[`strIngredient${ingredientIndex}`];
                  const measure = cocktail[`strMeasure${ingredientIndex}`];
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NonAlcoholicCocktailPage;
