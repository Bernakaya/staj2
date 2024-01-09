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
          'X-RapidAPI-Key': '64d4522c07mshde4bf393369f4d5p1f3063jsn326b2c6e4693',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
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
        </div>
      )}
    </div>
  );
}

export default DrinkDetail;
