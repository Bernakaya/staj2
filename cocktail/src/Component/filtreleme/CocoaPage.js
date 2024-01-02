// CocoaPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scss/commonstyle.css';

const CocoaPage = () => {
  const [cocoaList, setCocoaList] = useState([]);

  useEffect(() => {
    const fetchCocoaList = async () => {
      const url = 'https://the-cocktail-db.p.rapidapi.com/filter.php?c=Cocoa';
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
        setCocoaList(data.drinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCocoaList();
  }, []);

  return (
    <div className='container2'>
      <h2>Cocoa List</h2>
      <ul>
        {cocoaList.map((cocoa) => (
          <li key={cocoa.idDrink}>
           
       
            <Link to={`/drink/${cocoa.idDrink}`} className='cocktail-link'>
              <img src={cocoa.strDrinkThumb} alt={cocoa.strDrink} />
               <h3>{cocoa.strDrink}</h3>
            </Link>
       
 
            <ul>
              {Array.from({ length: 15 }, (_, index) => index + 1).map((ingredientIndex) => {
                const ingredient = cocoa[`strIngredient${ingredientIndex}`];
                const measure = cocoa[`strMeasure${ingredientIndex}`];
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

export default CocoaPage;
