'use strict';

import { LOGIN } from '../actions/loginActions';
import { LOAD_FRIENDS } from '../actions/detailsActions';

let init = {
  email: '',
  user: '',
  firebase: {}
}

export function loginReducer(state: any = init, action: any) {
  let ns = (<any>Object).assign({}, state);

  switch (action.type) {
    case LOGIN:
      ns = action.data;
      ns.user = action.data.email.substr(0, action.data.email.indexOf('@'));
      ns.firebase = action.firebase;
      ns.friends = {
        foo_1: 'John',
        foo_2: 'Jane',
        foo_3: 'Joe',
        foo_4: 'Job',
        foo_5: 'Joseph',
        foo_6: 'Jason',
        foo_7: 'Jenkins',
        foo_8: 'Justin',
        foo_9: 'Akita',
        foo_10: 'Ishigawa Kentosan'
      }

      return ns;
    case LOAD_FRIENDS:
      ns.friends = action.data;

      return ns;
    default:
      return state;
  }
}