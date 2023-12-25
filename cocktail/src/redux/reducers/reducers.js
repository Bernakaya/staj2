// redux/reducers.js
const initialState = {
    searchResults: [],
    // other initial state properties...
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_RESULTS_SUCCESS':
        return {
          ...state,
          searchResults: action.payload,
        };
      // handle other actions...
      default:
        return state;
    }
  };
  
  export default rootReducer;
  