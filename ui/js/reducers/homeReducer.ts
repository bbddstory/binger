'use strict';

import { LOAD_WATCH_LATER, LOAD_RECOMM } from '../actions/homeActions';

let init = {
  watchlater: {},
  recomm: {}
}

export function homeReducer(state: any = init, action: any) {
  let ns = (<any>Object).assign({}, state);
  
  switch (action.type) {
    case LOAD_WATCH_LATER:
      ns.watchlater = action.data;
      
      return ns;
    case LOAD_WATCH_LATER:
      ns.recomm = action.data;

      return ns;
    default:
      return state;
  }
}