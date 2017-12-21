export default function corgisReducer(state = {
  corgis: [],
}, action) {
  switch (action.type) {
    case 'FETCH_CORGIS':
      return Object.assign({}, state, { corigs: action.payload })
    default:
      return state;
  }
}
