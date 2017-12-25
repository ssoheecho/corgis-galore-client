export default function corgisReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      if (!state) {
        return state.concat(action.payload)
      } else {
        return state
      }    
    case 'ADD_COMMENT':
      return state.concat(action.payload)
    default:
      return state;
  }
}
