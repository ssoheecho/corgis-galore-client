export default function corgisReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return state.concat(action.payload)
    case 'ADD_COMMENT':
      return state.concat(action.payload)
    default:
      return state;
  }
}
