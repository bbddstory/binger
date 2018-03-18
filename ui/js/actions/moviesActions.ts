'use strict';

// Action types
export const LOAD_MOVIES = 'LOAD_MOVIES';

// Action creators
export function moviesAct(movies: any) {
  return {
    type: LOAD_MOVIES,
    movies
  }
}