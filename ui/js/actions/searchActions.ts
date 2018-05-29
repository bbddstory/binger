'use strict';

import axios from 'axios';

import { NODE_URL } from '../util/utils';

// Action types
export const SEARCH = 'SEARCH';
export const SEARCH_RETURN = 'SEARCH_RETURN';
export const SET_SEARCH_FLAG = 'SET_SEARCH_FLAG';

// Action creators
export function searchAct(key: string) {
  return (dispatch: any, getState: any) => {

    axios.post(NODE_URL() + '/search', {
      token: getState().loginReducer.token,
      key: key,
      type: 1 // 0: fuzzy search, 1: exact search
    }).then(res => {
      let results = res.data.results;

      if (res.status === 200) {
        dispatch({ type: SET_SEARCH_FLAG });
        dispatch({ type: SEARCH_RETURN, results });
        location.hash = '#/main/search';
      }
    }).catch(err => {
      console.log(err);
    });
  }
}