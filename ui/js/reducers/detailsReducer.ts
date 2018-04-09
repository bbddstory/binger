'use strict';

import { SAVE_DETAILS } from '../actions/detailsActions';

let init = {}

export function detailsReducer(state: any = init, action: any) {
  switch (action.type) {
    // case SAVE_DETAILS:
    //   let ns = (<any>Object).assign({}, state);
      
    //   return ns;
    default:
      return state;
  }
}