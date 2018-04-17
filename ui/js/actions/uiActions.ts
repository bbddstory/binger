'use strict';

// Action types
export const LOCALE = 'LOCALE';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const TOGGLE_EDIT_DETAILS = 'TOGGLE_EDIT_DETAILS';

// Action creators
export function switchLocaleAct(lang: string) {
  return {
    type: LOCALE,
    lang
  }
}

export function toggleEditDetailsAct(status: boolean) {
  return {
    type: TOGGLE_EDIT_DETAILS,
    status
  }
}