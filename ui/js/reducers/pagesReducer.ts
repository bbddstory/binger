'use strict';

import { FIRST_PAGE } from '../actions/pagesActions';
// import { anime_data, doc_data, movie_data, tv_data } from '../components/main/data';

let init = {
  data: {}
}

export function pagesReducer(state: any = init, action: any) {
  switch (action.type) {
    case FIRST_PAGE:
      console.log('dataReducer: ', action);
      
      let ns = (<any>Object).assign({}, state);
      ns.data = action.data;

      return ns;
    default:
      return state;
  }
}