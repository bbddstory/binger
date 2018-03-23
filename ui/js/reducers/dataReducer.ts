'use strict';

import { INIT_PAGES, GOTO_PAGE } from '../actions/dataActions';

let init = {
  data: {},
  itemCnt: -1,
  totalPage: -1,
  currPage: 1,
  itemPerPage: -1,
  itemStartIdx: 0, // start index of items on current page
  itemEndIdx: -1 // end index of items on current page
}

export function dataReducer(state: any = init, action: any) {
  let ns;
  switch (action.type) {
    case INIT_PAGES:
      ns = (<any>Object).assign({}, state);
      ns.data = action.data;
      ns.itemCnt = action.itemCnt;
      ns.totalPage = Math.ceil(action.itemCnt / action.itemPerPage);
      ns.itemPerPage = action.itemPerPage;
      ns.itemEndIdx = --action.itemPerPage;

      return ns;
    case GOTO_PAGE:
      ns = (<any>Object).assign({}, state);
      ns.data = action.data;
      ns.currPage = action.currPage;
      ns.itemStartIdx = action.itemStartIdx;
      ns.itemEndIdx = action.itemEndIdx;

      return ns;
    default:
      return state;
  }
}