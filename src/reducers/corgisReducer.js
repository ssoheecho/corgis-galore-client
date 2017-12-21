export default function corgisReducer(state = {
  corgis: [],
}, action) {
  switch (action.type) {
    case 'FETCH_CORGIS':
      return Object.assign({}, state, { corgis: action.payload })
    default:
      return state;
  }
}
