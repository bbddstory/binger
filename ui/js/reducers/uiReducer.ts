'use strict';

import { TOGGLE_EDIT_DETAILS, TOGGLE_LOADER } from '../actions/uiActions';

let init = {
  editDetails: false,
  loader: false
}

export function uiReducer(state: any = init, action: any) {
  let ns = (<any>Object).assign({}, state);

  switch (action.type) {
    case TOGGLE_EDIT_DETAILS:
      ns.editDetails = action.status;
      
      return ns;
    case TOGGLE_LOADER:
      ns.loader = action.status

      return ns;
    default:
      return state;
  }
}