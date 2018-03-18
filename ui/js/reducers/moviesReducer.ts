'use strict';

import * as firebase from 'firebase';
import { LOAD_MOVIES } from '../actions/moviesActions';

let init = {
  movies: ''
}

export function moviesReducer(state: any = init, action: any) {
  switch (action.type) {
    case LOAD_MOVIES:
      let ns = (<any>Object).assign({}, state);
      ns.movies = action.movies;

      return ns;
    default:
      return state;
  }
}