'use strict';

import { FIRST_PAGE, LAST_PAGE, PREV_PAGE, NEXT_PAGE } from '../actions/pagesActions';
// import { anime_data, doc_data, movie_data, tv_data } from '../components/main/data';

let init = {
  totalPage: 0,
  currPage: 1,
  itemPerPage: 12,
  currPageStartIdx: 0,
  currPageEndIdx: 11
}

export function pagesReducer(state: any = init, action: any) {
  let ns = {};
  switch (action.type) {
    case FIRST_PAGE:
      ns = (<any>Object).assign({}, state);

      return ns;
    case LAST_PAGE:
      ns = (<any>Object).assign({}, state);

      return ns;
    case PREV_PAGE:
      ns = (<any>Object).assign({}, state);

      return ns;
    case NEXT_PAGE:
      ns = (<any>Object).assign({}, state);

      return ns;
    default:
      return state;
  }
}