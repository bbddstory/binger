'use strict';

import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { loginReducer } from './loginReducer';
import { dataReducer } from './dataReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  form: reduxFormReducer, // mounted under "form"
  uiReducer,
  loginReducer,
  dataReducer
});