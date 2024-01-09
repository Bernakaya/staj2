// CocktailDetailComponent.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DrinkDetail.css';

function DrinkDetail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktailDetail = async () => {
      setLoading(true);
      setError(null);

      const url = `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`;

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '60bc55013dmsh1ce7455d35b1a1ap1d7b6cjsn81ab8b81d7a6',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.drinks && Array.isArray(result.drinks) && result.drinks.length > 0) {
          setCocktail(result.drinks[0]);
        } else {
          setError('İçecek detayları bulunamadı.');
        }
      } catch (error) {
        console.error(error);
        setError('Veri çekme sırasında bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    fetchCocktailDetail();
  }, [id]);

  return (
    <div className="container">
      {loading && <p>Yükleniyor...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {cocktail && (
        <div className="cocktail-detail-container">
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="" />
          <h3>Genel Bilgiler:</h3>
          <p>
            <strong>Kategori:</strong> {cocktail.strCategory}
          </p>
          <p>
            <strong>Glass Türü:</strong> {cocktail.strGlass}
          </p>
          <p>
            <strong>Tarif:</strong> {cocktail.strInstructions}
          </p>
          <h3>Malzemeler:</h3>
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
        </div>
      )}
    </div>
  );
}

export default DrinkDetail;
