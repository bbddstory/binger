'use strict';

// Action types
export const FIRST_PAGE = 'FIRST_PAGE';
export const LAST_PAGE = 'LAST_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';

// Action creators
export function firstPageAct(data: any) {
  return {
    type: FIRST_PAGE,
    data
  }
}