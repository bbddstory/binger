'use strict';

import { LOGIN, LOAD_LATEST, SET_TOKEN } from '../actions/loginActions';
import { REMOVE_HOME_LIST_ITEM } from '../actions/homeActions';

// interface ILocaleLang {
//   [key: string]: any
// }

let init = {
  token: '',
  user: '',
  email: '',
  latest: {}
}

export function loginReducer(state: any = init, action: any) {
  let ns = (<any>Object).assign({}, state);

  switch (action.type) {
    case SET_TOKEN:
      ns.token = action.token;
      ns.email = action.email;
      // ns.user = action.user;

      return ns;
    case LOGIN:
      ns = action.buffer;
      ns.user = action.buffer.email.substr(0, action.buffer.email.indexOf('@'));

      return ns;
    case LOAD_LATEST:
      ns.latest = action.latest.data;

      return ns;
    case REMOVE_HOME_LIST_ITEM:
      delete ns[action.list][action.key]

      return ns;
    default:
      return state;
  }
}