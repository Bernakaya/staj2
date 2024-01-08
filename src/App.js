import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import PopularDrinks from './Component/popular/PopularDrinks';
import DrinkDetail from './Component/popular/DrinkDetail';
import AlcoholicPage from './Component/filtreleme/AlcoholicPage.js';
import NonAlcoholicPage from './Component/filtreleme/NonAlcoholicPage.js';
import CocktailPage from './Component/filtreleme/CocktaiPage';
import CocoaPage from './Component/filtreleme/CocoaPage.js';
import Footer from './Component/footer/Footer.js';
import Header2 from './Component/header/header2.js';
import SearchPage from './Component/search/SearchPage.js';
import PunchPartyDrinkPage from './Component/filtreleme/PunchPartyDrinkPage.js';
import ShakePage from './Component/filtreleme/ShakePage.js';
import ShotPage from './Component/filtreleme/ShotPage.js';
import CoffeeTeaPage from './Component/filtreleme/CoffeeTeaPage.js';
import BeerPage from './Component/filtreleme/BeerPage.js';
import OrdinaryDrinkPage from './Component/filtreleme/OrdinaryDrinkPage.js';
import OtherUnknownPage from './Component/filtreleme/OtherUnknownPage.js';
import HomemadeLiqueurPage from './Component/filtreleme/HomemadeLiqueurPage.js';
import './App.css';
import store from './redux/store.js';

const App = () => {
  const handleSearch = async (searchQuery) => {
    try {
      const apiUrl = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchQuery}`;
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '60bc55013dmsh1ce7455d35b1a1ap1d7b6cjsn81ab8b81d7a6',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData.drinks || []);
    } catch (error) {
      console.error('Error fetching drink data:', error);
    }
  };

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header2 onSearch={handleSearch} />
          <hr />
          <Routes>
            <Route path="/" element={<PopularDrinks />} />
            <Route path="/drink/:id" element={<DrinkDetail />} />
            <Route path="/alkollu" element={<AlcoholicPage />} />
            <Route path="/alkolsuz" element={<NonAlcoholicPage />} />
            <Route path='/cocktail' element={<CocktailPage />} />
            <Route path='/cocoa' element={<CocoaPage />} />
            <Route path="/punch-party-drink" element={<PunchPartyDrinkPage />} />
            <Route path="/shake" element={<ShakePage />} />
            <Route path='/shot' element={<ShotPage />} />
            <Route path="/coffee-tea" element={<CoffeeTeaPage />} />
            <Route path="/beer" element={<BeerPage />} />
            <Route path="/ordinary-drink" element={<OrdinaryDrinkPage />} />
            <Route path="/other-unknown" element={<OtherUnknownPage />} />
            <Route path="/homemade-liqueur" element={<HomemadeLiqueurPage />} />
            <Route path="/search/:query" element={<SearchPage />} />
          </Routes>
          <hr />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
