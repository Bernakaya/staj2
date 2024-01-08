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
            'X-RapidAPI-Key': '60bc55013dmsh1ce7455d35b1a1ap1d7b6cjsn81ab8b81d7a6',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
          },
        });
  
        const responseData = await response.json();
        dispatch(searchResultsSuccess(responseData.drinks || []));
      } catch (error) {
        console.error('Error fetching drink data:', error);
      }
    };
  };
  