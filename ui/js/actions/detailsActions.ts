'use strict';

// Action types
export const SET_KEY = 'SET_KEY';

// Action creators
export function setKeyAct(key: string) {
  return {
    type: SET_KEY,
    key
  }
}