'use strict';

import { LOGIN, LOAD_LATEST, LOAD_WATCH_LATER, LOAD_RECOMM, SET_TOKEN } from '../actions/loginActions';
import { REMOVE_HOME_LIST_ITEM } from '../actions/homeActions';

// interface ILocaleLang {
//   [key: string]: any
// }

let init = {
  token: '',
  user: '',
  email: '',
  latest: {},
  watchLater: {},
  recomm: {}
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

      return ns;
    case LOAD_LATEST:
      ns.latest = action.data.latest;

      return ns;
    case LOAD_WATCH_LATER:
      ns.watchLater = action.data.watchLater;

      return ns;
    case LOAD_RECOMM:
      ns.recomm = action.data.recomm;

      return ns;
    case REMOVE_HOME_LIST_ITEM:
      console.log(ns[action.list]);
      let arr = [];
    
      for (let i = 0; i < ns[action.list].length; i++) {
        // const element = array[i];
        // console.log(ns[action.list][i]);
        if (ns[action.list][i].id !== action.key) {
          // ns[action.list].splice(i, 1)
          arr.push(ns[action.list][i])
        }
      }
      ns[action.list] = arr;
        console.log(ns);
        
      // });
      // delete ns[action.list][action.key]

      return ns;
    default:
      return state;
  }
}