export default function corgisReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_CORGIS':
      return state.concat(action.payload)
    default:
      return state;
  }
}
