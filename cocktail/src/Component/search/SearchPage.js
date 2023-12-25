// components/SearchPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { searchAsync } from '../../redux/actions/actions';
import SearchResult from './SearchResult';

const SearchPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(searchAsync(query));
  }, [dispatch, query]);

  const handleDrinkDetail = (drinkId) => {
    navigate(`/drink/${drinkId}`);
  };

  return (
    <div>
      <h2>Search Results: {query}</h2>
      <SearchResult searchResults={searchResults} onDrinkDetail={handleDrinkDetail} />
    </div>
  );
};

export default SearchPage;
