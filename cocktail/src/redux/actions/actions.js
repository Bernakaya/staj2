// redux/actions.js
export const searchResultsSuccess = (results) => ({
    type: 'SEARCH_RESULTS_SUCCESS',
    payload: results,
  });
  
  export const searchAsync = (query) => {
    return async (dispatch) => {
      try {
        const apiUrl = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${query}`;
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '64d4522c07mshde4bf393369f4d5p1f3063jsn326b2c6e4693',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
          },
        });
  
        const responseData = await response.json();
        dispatch(searchResultsSuccess(responseData.drinks || []));
      } catch (error) {
        console.error('Error fetching drink data:', error);
      }
    };
  };
  