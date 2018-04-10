'use strict';

// Action types
export const SET_CATEGORY = 'SET_CATEGORY';

// Action creators
export function setCategoryAct(cat: string) {
  return {
    type: SET_CATEGORY,
    cat
  }
}