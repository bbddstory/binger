'use strict';

import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { moviesReducer } from './moviesReducer';

export default combineReducers({
  loginReducer,
  moviesReducer
});