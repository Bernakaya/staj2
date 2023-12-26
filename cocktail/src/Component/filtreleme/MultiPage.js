// // MultiPage.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCategory, setDrinkList } from '../../redux/actions/categoryActions';
// import { Link } from 'react-router-dom';

// const MultiPage = () => {
//   const dispatch = useDispatch();
//   const currentCategory = useSelector((state) => state.category.currentCategory);
//   const drinkList = useSelector((state) => state.category.drinkLists[currentCategory] || []);

//   useEffect(() => {
//     dispatch(setCategory(currentCategory));
//   }, [currentCategory, dispatch]);

//   useEffect(() => {
//     const fetchDrinkList = async () => {
//       const url = `https://the-cocktail-db.p.rapidapi.com/filter.php?c=${currentCategory}`;
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': '64d4522c07mshde4bf393369f4d5p1f3063jsn326b2c6e4693',
//           'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
//         },
//       };

//       try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         dispatch(setDrinkList(currentCategory, data.drinks || []));
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDrinkList();
//   }, [currentCategory, dispatch]);

//   const getCategoryTitle = (category) => {
//     switch (category) {
//       case 'Cocktail':
//         return 'Cocktail List';
//       case 'Beer':
//         return 'Beer List';
//       case 'Cocoa':
//         return 'Cocoa List';
//       default:
//         return 'Unknown Category';
//     }
//   };

//   return (
//     <div className='container2'>
//       <h2>{getCategoryTitle(currentCategory)}</h2>
//       <ul>
//         {drinkList.map((drink) => (
//           <li key={drink.idDrink}>
//             <Link to={`/drink/${drink.idDrink}`}>
//               <img src={drink.strDrinkThumb} alt={drink.strDrink} />
//               <h3>{drink.strDrink}</h3>
//             </Link>
//             <ul>
//               {Array.from({ length: 15 }, (_, index) => index + 1).map((ingredientIndex) => {
//                 const ingredient = drink[`strIngredient${ingredientIndex}`];
//                 const measure = drink[`strMeasure${ingredientIndex}`];
//                 if (ingredient && measure) {
//                   return (
//                     <li key={ingredientIndex}>
//                       {measure} {ingredient}
//                     </li>
//                   );
//                 }
//                 return null;
//               })}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MultiPage;
