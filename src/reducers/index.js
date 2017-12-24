import { combineReducers } from 'redux';
import corgisReducer from './corgisReducer';

const rootReducer = combineReducers({
  corgis: corgisReducer
})

export default rootReducer
