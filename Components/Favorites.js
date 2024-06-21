import React from 'react';
import { useSelector } from 'react-redux';
import NewsItem from './NewsItem';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="favorites">
      <h2>Favorite News</h2>
      {favorites.length === 0 ? (
        <p>No favorite news yet.</p>
      ) : (
        favorites.map((item, index) => <NewsItem key={index} item={item} />)
      )}
    </div>
  );
};

export default Favorites;
