'use strict';

// Action types
export const INIT_PAGES = 'INIT_PAGES';
export const GOTO_PAGE = 'GOTO_PAGE';
export const SET_KEY = 'SET_KEY';

// Action creators
export function initPageAct(data: any, itemCnt: number, itemPerPage: number) {
  return {
    type: INIT_PAGES,
    data,
    itemCnt,
    itemPerPage
  }
}

export function goToPageAct(data: any, currPage: number, itemStartIdx: number, itemEndIdx: number) {
  return {
    type: GOTO_PAGE,
    data,
    currPage,
    itemStartIdx,
    itemEndIdx
  }
}

export function setKeyAct(key: string) {
  return {
    type: SET_KEY,
    key
  }
}