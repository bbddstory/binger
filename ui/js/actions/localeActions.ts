'use strict';

// Action types
export const LOCALE = 'LOCALE';

// Action creators
export function switchLangAct(lang: string) {
  return {
    type: LOCALE,
    lang
  }
}