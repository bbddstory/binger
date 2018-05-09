'use strict';

import { GOTO_PAGE, SET_KEY, SYNC_CAT } from '../actions/dataActions';
import { SAVE_COMMENT, DEL_COMMENT, SAVE_NEW, UPDATE_BUFFER_DETAILS } from '../actions/detailsActions';
import { SWITCH_CAT } from '../actions/categoriesActions';
import { LOAD_HOME_LISTS } from '../actions/homeActions';
import { SEARCH_RETURN } from '../actions/searchActions';
import { LOAD_LATEST, LOAD_WATCH_LATER, LOAD_RECOMM, REMOVE_HOME_LIST_ITEM } from '../actions/homeActions';
import cats from '../util/cats';

interface IDataReducer {
  [key: string]: any
}

let init: IDataReducer = {
  key: '',
  buffer: {},
  search: {},
  latest: {},
  watchLater: {},
  recomm: {},
  prevCat: cats.HOME,
  category: cats.HOME,
  itemCnt: 0, // Total number of records in designated category
  ipp: 12, // itemPerPage
  pageCnt: 1,
  currPage: 1,
  startAt: 0, // Start index of items on current page
  endAt: 11 // End index of items on current page
}

export function dataReducer(state: any = init, action: any) {
  let ns = (<any>Object).assign({}, state);

  switch (action.type) {
    case LOAD_HOME_LISTS:
      ns.buffer = action.homeList;
      ns.prevCat = ns.category;

      return ns;
    case LOAD_LATEST:
      ns.latest = action.data.latest;

      return ns;
    case LOAD_WATCH_LATER:
      ns.watchLater = action.data.watchLater;

      return ns;
    case LOAD_RECOMM:
      ns.recomm = action.data.recomm;

      return ns;
    case REMOVE_HOME_LIST_ITEM:
      let arr = [];

      for (let i = 0; i < ns[action.list].length; i++) {
        if (ns[action.list][i].id !== action.key) {
          arr.push(ns[action.list][i])
        }
      }
      ns[action.list] = arr;

      return ns;
    case SWITCH_CAT:
      ns.category = action.cat;

      if (state.prevCat !== action.cat) { // Needs to reset all pagination related values
        ns.itemCnt = 0;
        ns.pageCnt = 1;
        ns.currPage = 1;
        ns.startAt = 0;
        ns.endAt = 11;
      }

      return ns;
    case GOTO_PAGE:
      ns.buffer = action.buffer;
      ns.itemCnt = action.itemCnt;
      ns.pageCnt = Math.ceil(action.itemCnt / init.ipp);
      ns.currPage = action.currPage;
      ns.startAt = action.startAt;
      ns.endAt = action.endAt;

      return ns;
    case SET_KEY:
      ns.key = action.key;

      return ns;
    case SYNC_CAT:
      ns.prevCat = ns.category;

      return ns;
    case SAVE_NEW:
      if (ns.category === action.arr[0]) {
        ns.buffer[action.arr[1]] = action.vc;
      }

      return ns;
    case UPDATE_BUFFER_DETAILS:
      if (action.isSearch) {
        ns.search[state.key] = action.vc
        if (ns.buffer[state.key]) {
          ns.buffer[state.key] = action.vc;
        }
      } else {
        ns.buffer[state.key] = action.vc;
      }

      return ns;
    case SAVE_COMMENT:
      let ck = Object.keys(action.values)[0];
      
      if (action.isSearch) {
        ns.search[state.key].comments[ck] = action.values[ck];
        if (ns.buffer[state.key]) {
          ns.buffer[state.key].comments[ck] = action.values[ck];
        }
      } else {
        ns.buffer[state.key].comments[ck] = action.values[ck];
      }

      return ns;
    case DEL_COMMENT:
      if (action.isSearch) {
        delete ns.search[state.key].comments[action.id];
        if (ns.buffer[state.key]) {
          delete ns.buffer[state.key].comments[action.id];
        }
      } else {
        delete ns.buffer[state.key].comments[action.id];
      }

      return ns;
    case SEARCH_RETURN:
      ns.search = action.buffer;

      return ns;
    default:
      return state;
  }
}