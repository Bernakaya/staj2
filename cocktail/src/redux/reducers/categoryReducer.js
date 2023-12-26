// const initialCategoryState = {
//   currentCategory: 'Cocktail', // Varsayılan kategori
//   drinkLists: {
//     'Cocktail': [], // Boş bir içki listesi ekledim, gerçek verileri ekleyebilirsiniz
//     'Beer': [],
//     'Cocoa': [],
//     'Other': [],
//   },
// };

// const categoryReducer = (state = initialCategoryState, action) => {
//   switch (action.type) {
//     case 'SET_CATEGORY':
//       return {
//         ...state,
//         currentCategory: action.payload,
//       };
//     case 'SET_DRINK_LIST':
//       return {
//         ...state,
//         drinkLists: {
//           ...state.drinkLists,
//           [action.payload.category]: action.payload.drinkList,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default categoryReducer;
