'use strict';

// Action types
export const EDIT_DETAILS = 'EDIT_DETAILS';

// Action creators
export function editDetailsAct(status: boolean) {
  return {
    type: EDIT_DETAILS,
    status
  }
}