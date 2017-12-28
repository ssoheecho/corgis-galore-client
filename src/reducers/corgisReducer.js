export default function corgisReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_CORGIS':
      const corgis = action.payload.map(corgi => Object.assign({}, corgi, { favorite: false }))
      return state.concat(corgis)
    case 'ADD_FAVORITE':
      let favoriteCorgi = state.filter(corgi => corgi.id === action.favoriteCorgi.corgiId)[0]
      let updatedCorgi = Object.assign({}, favoriteCorgi, { favorite: action.favoriteCorgi.favorite })
      return state.map(corgi => corgi.id === favoriteCorgi.id ? updatedCorgi : corgi)
    default:
      return state;
  }
}
