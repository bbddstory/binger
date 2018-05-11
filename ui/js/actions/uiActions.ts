'use strict';

// Action types
export const LOCALE = 'LOCALE';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const TOGGLE_EDIT_DETAILS = 'TOGGLE_EDIT_DETAILS';
export const RESET_IS_SEARCH = 'RESET_IS_SEARCH';

// Action creators
export function switchLocaleAct(locale: string) {
  return {
    type: LOCALE,
    locale
  }
}

export function toggleEditDetailsAct(status: boolean, newRec: boolean) {
  return {
    type: TOGGLE_EDIT_DETAILS,
    status,
    newRec
  }
}