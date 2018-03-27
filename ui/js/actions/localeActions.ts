'use strict';

// Action types
export const LOCALE = 'LOCALE';

// Action creators
export function switchLang(lang: string) {
  return {
    type: LOCALE,
    lang
  }
}