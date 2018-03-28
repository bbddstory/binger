'use strict';

import { LOCALE } from '../actions/localeActions';

let init = {
  lang: 'ja'
}

export function localeReducer(state: any = init, action: any) {
  switch (action.type) {
    case LOCALE:
      let ns = (<any>Object).assign({}, state);
      ns.lang = action.lang;
      
      return ns;
    default:
      return state;
  }
}