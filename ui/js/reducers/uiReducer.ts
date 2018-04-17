'use strict';

import { LOCALE, TOGGLE_LOADER, TOGGLE_EDIT_DETAILS } from '../actions/uiActions';

let init = {
  locale: 'en',
  loader: false,
  editDetails: false
}

export function uiReducer(state: any = init, action: any) {
  let ns = (<any>Object).assign({}, state);

  switch (action.type) {
    case LOCALE:
      ns.locale = action.locale;

      return ns;
    case TOGGLE_LOADER:
      ns.loader = action.status

      return ns;
    case TOGGLE_EDIT_DETAILS:
      ns.editDetails = action.status;
      
      return ns;
    default:
      return state;
  }
}