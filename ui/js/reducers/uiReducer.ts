'use strict';

import { LOCALE, TOGGLE_LOADER, TOGGLE_EDIT_DETAILS, RESET_IS_SEARCH } from '../actions/uiActions';
import { SET_SEARCH_FLAG } from '../actions/searchActions';

let init = {
  locale: 'en',
  loader: false,
  loaderTxt: '',
  loading: true,
  editDetails: false,
  newRec: false
}

export function uiReducer(state: any = init, action: any) {
  let ns = (<any>Object).assign({}, state);

  switch (action.type) {
    case LOCALE:
      ns.locale = action.locale;

      return ns;
    case TOGGLE_LOADER:
      ns.loader = action.status;
      ns.loaderTxt = action.loaderTxt || 'Loading data...';
      ns.loading = action.hasOwnProperty('loading') ? action.loading : true;

      return ns;
    case TOGGLE_EDIT_DETAILS:
      ns.editDetails = action.status;
      ns.newRec = action.newRec;
      // ns.isSearch = action.isSearch;
      
      return ns;
    case SET_SEARCH_FLAG:
      ns.isSearch = true;
      return ns;
    case RESET_IS_SEARCH:
      ns.isSearch = false;

      return ns;
    default:
      return state;
  }
}