// redux/index.js
import { combineReducers } from 'redux';
import actualRootReducer from './reducers'; // Değişken ismini değiştirdik

const rootReducer = combineReducers({
  // add other reducers if any
  data: actualRootReducer, // Değişken ismini değiştirdik
});

export default rootReducer;
