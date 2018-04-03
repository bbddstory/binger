'use strict';

import { LOGIN } from '../actions/loginActions';

let init = {
  email: '',
  firebase: {}
}

export function loginReducer(state: any = init, action: any) {
  switch (action.type) {
    case LOGIN:
      let ns = (<any>Object).assign({}, state);

      ns.email = action.email;
      ns.firebase = action.firebase;
      return ns;
    default:
      return state;
  }
}