'use strict';

// Action types
export const FIRST_PAGE = 'FIRST_PAGE';
export const LAST_PAGE = 'LAST_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';

// Action creators
export function firstPageAct() {
  return {
    type: FIRST_PAGE
  }
}

export function lastPageAct() {
  return {
    type: LAST_PAGE,
  }
}

export function prevPageAct() {
  return {
    type: PREV_PAGE
  }
}

export function nextPageAct() {
  return {
    type: NEXT_PAGE
  }
}