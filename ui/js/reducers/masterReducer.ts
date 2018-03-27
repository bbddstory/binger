'use strict';

import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { dataReducer } from './dataReducer';
import { localeReducer } from './localeReducer';

export default combineReducers({
  loginReducer,
  dataReducer,
  localeReducer
});