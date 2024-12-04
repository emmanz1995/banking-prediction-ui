import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  // queries: journalReducer,
  // user: userReducer,
});
