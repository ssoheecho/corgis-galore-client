export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return state.concat(action.payload)
    case 'ADD_COMMENT':
      return state.concat(action.payload)
    case 'REMOVE_COMMENT':
      let comments = state.filter(comment => comment.id !== action.comment.id)
      return comments
    case 'UPDATE_LIKES':
      let comment = state.filter(comment => comment.id === action.payload.id)[0]
      let updatedComment = Object.assign({}, comment, { likes: action.payload.likes })
      return state.map(comment => comment.id === action.payload.id ? updatedComment : comment)
    default:
      return state;
  }
}
