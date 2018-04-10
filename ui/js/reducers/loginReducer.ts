'use strict';

import { LOGIN } from '../actions/loginActions';

let init = {
  email: '',
  user: '',
  firebase: {}
}

export function loginReducer(state: any = init, action: any) {
  switch (action.type) {
    case LOGIN:
      let ns = (<any>Object).assign({}, state);

      ns = action.data;
      ns.user = action.data.email.substr(0, action.data.email.indexOf('@'));
      ns.firebase = action.firebase;

      return ns;
    default:
      return state;
  }
}