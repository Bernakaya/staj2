// // actions/categoryActions.js
// import { setDrinkList } from './categoryActions';

// export const fetchDrinkList = (category) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(`https://your-api-url.com/drinks?category=${category}`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       dispatch(setDrinkList(category, data.drinks || []));
//     } catch (error) {
//       console.error('Error fetching drink list:', error);
//     }
//   };
// };
