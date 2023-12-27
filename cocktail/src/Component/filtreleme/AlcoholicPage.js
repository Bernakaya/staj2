// AlcoholicPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AlcoholicPage = () => {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    const fetchAlcoholicCocktailList = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic'; // 'a=Alcoholic' eklenen kısım
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
        setCocktailList(data.drinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlcoholicCocktailList();
  }, []);

  return (
    <div className='container2'>
      <h2>Alcoholic Cocktail List</h2>  
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

export default AlcoholicPage;
