import fetch from 'isomorphic-fetch';

export function fetchCorgis() {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/corgis')
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_CORGIS', payload: data}))
  }
}

export const addToFavorite = (favoriteCorgi) => {
  return {
    type: 'ADD_FAVORITE',
    favoriteCorgi
  };
}
