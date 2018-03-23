'use strict';

import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { dataReducer } from './dataReducer';

export default combineReducers({
  loginReducer,
  dataReducer
});