'use strict';

import axios from 'axios';

import { CEM_URL } from '../util/utils';
import { LOAD_LATEST, LOAD_WATCH_LATER, LOAD_RECOMM } from './loginActions';

// Action types
export const SYNC_HOME_LIST = 'SYNC_HOME_LIST';
export const REMOVE_HOME_LIST_ITEM = 'REMOVE_HOME_LIST_ITEM';

// Action creators
export function syncHomeListAct() {
  return (dispatch: any, getState: any) => {
    axios.post(CEM_URL() + '/home/latest', {
      token: getState().loginReducer.token
    }).then(res => {
      if (res.status === 200) {
        dispatch({ type: LOAD_LATEST, data: res.data });
      }
    }).catch(err => {
      console.log(err);
    });

    axios.post(CEM_URL() + '/home/watch_later', {
      token: getState().loginReducer.token,
      email: getState().loginReducer.email
    }).then(res => {
      if (res.status === 200) {
        dispatch({ type: LOAD_WATCH_LATER, data: res.data });
      }
    }).catch(err => {
      console.log(err);
    });

    axios.post(CEM_URL() + '/home/recomm', {
      token: getState().loginReducer.token,
      email: getState().loginReducer.email
    }).then(res => {
      if (res.status === 200) {
        dispatch({ type: LOAD_RECOMM, data: res.data });
      }
    }).catch(err => {
      console.log(err);
    });
  }
}

export function removeHomeListItemAct(key: string, list: string) {
  return (dispatch: any, getState: any) => {
    axios.post(CEM_URL() + '/home/del_item', {
      token: getState().loginReducer.token,
      email: getState().loginReducer.email,
      key: key,
      list: list
    }).then(res => {
      console.log(res);
      
      if (res.status === 200) {
        dispatch({ type: REMOVE_HOME_LIST_ITEM, key: key, list: list });
      }
    }).catch(err => {
      console.log(err);
    });
  }
}