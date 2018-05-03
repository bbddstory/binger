'use strict';

import { LOGIN, LOAD_LATEST, SET_TOKEN } from '../actions/loginActions';
import { REMOVE_HOME_LIST_ITEM } from '../actions/homeActions';

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
      ns.user = action.user;
      ns.email = action.email;

      return ns;
    case LOGIN:
      ns = action.buffer;
      ns.user = action.buffer.email.substr(0, action.buffer.email.indexOf('@'));
      // ns.friends = { 
      //   foo_1: 'John',
      //   foo_2: 'Jane',
      //   foo_3: 'Joe',
      //   foo_4: 'Job',
      //   foo_5: 'Joseph',
      //   foo_6: 'Jason',
      //   foo_7: 'Jenkins',
      //   foo_8: 'Justin',
      //   foo_9: 'Akira',
      //   foo_10: 'Ishigawa Kentosan'
      // }

      return ns;
    case LOAD_LATEST:
      ns.latest = action.latest;

      return ns;
    case REMOVE_HOME_LIST_ITEM:
      delete ns[action.list][action.key]

      return ns;
    default:
      return state;
  }
}