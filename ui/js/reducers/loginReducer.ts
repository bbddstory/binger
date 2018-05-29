'use strict';

import { LOGIN, SET_TOKEN } from '../actions/loginActions';
import { REMOVE_HOME_LIST_ITEM } from '../actions/homeActions';

// interface ILocaleLang {
//   [key: string]: any
// }

let init = {
  token: '',
  user: '',
  email: '',
  friends: {}
}

export function loginReducer(state: any = init, action: any) {
  let ns = (<any>Object).assign({}, state);

  switch (action.type) {
    case LOGIN:
      ns = action.buffer;
      ns.user = action.buffer.email.substr(0, action.buffer.email.indexOf('@'));

      return ns;
    case SET_TOKEN:
      ns.token = action.token;
      ns.email = action.email;
      ns.user = action.user;
      ns.friends = action.friends;

      return ns;
    default:
      return state;
  }
}