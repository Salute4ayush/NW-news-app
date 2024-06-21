import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions';
import './NewsItem.css';

const NewsItem = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((favorite) => favorite.url === item.url);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <div className="news-item">
      {item.image && <img src={item.image} alt={item.title} className="news-item-image" />}
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
      <button onClick={handleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default NewsItem;
