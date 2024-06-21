export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (newsItem) => ({
  type: ADD_FAVORITE,
  payload: newsItem,
});

export const removeFavorite = (newsItem) => ({
  type: REMOVE_FAVORITE,
  payload: newsItem,
});
