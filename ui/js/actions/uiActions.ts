'use strict';

// Action types
export const TOGGLE_EDIT_DETAILS = 'TOGGLE_EDIT_DETAILS';

// Action creators
export function toggleEditDetailsAct(status: boolean) {
  return {
    type: TOGGLE_EDIT_DETAILS,
    status
  }
}