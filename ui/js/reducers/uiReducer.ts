'use strict';

import { TOGGLE_EDIT_DETAILS } from '../actions/uiActions';

let init = {
  editDetails: false
}

export function uiReducer(state: any = init, action: any) {
  switch (action.type) {
    case TOGGLE_EDIT_DETAILS:
      let ns = (<any>Object).assign({}, state);
      ns.editDetails = action.status;
      
      return ns;
    default:
      return state;
  }
}