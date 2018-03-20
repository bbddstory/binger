'use strict';

// Action types
export const LOAD_DATA = 'LOAD_DATA';

// Action creators
export function dataAct(data: any) {
  return {
    type: LOAD_DATA,
    data
  }
}