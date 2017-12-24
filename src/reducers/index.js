import { combineReducers } from 'redux';
import corgisReducer from './corgisReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  corgis: corgisReducer,
  comments: commentsReducer
})

export default rootReducer
