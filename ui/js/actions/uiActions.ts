'use strict';

// Action types
export const TOGGLE_EDIT_DETAILS = 'TOGGLE_EDIT_DETAILS';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';

// Action creators
export function toggleEditDetailsAct(status: boolean) {
  return {
    type: TOGGLE_EDIT_DETAILS,
    status
  }
}