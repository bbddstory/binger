'use strict';

import axios from 'axios';

import { CEM_URL } from '../util/utils';
import { LOAD_LATEST } from './loginActions';

// Action types
export const SYNC_HOME_LIST = 'SYNC_HOME_LIST';
export const REMOVE_HOME_LIST_ITEM = 'REMOVE_HOME_LIST_ITEM';

// Action creators
export function syncHomeListAct() {
  return async (dispatch: any, getState: any) => {
    axios.post(CEM_URL() + '/home/latest', {token: getState().loginReducer.token}).then(res => {
      if (res.status === 200) {
        dispatch({ type: LOAD_LATEST, latest: res.data });
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}

export function removeHomeListItemAct(key: string, list: string) {
  return async (dispatch: any, getState: any) => {
    // let firebase = getState().loginReducer.firebase;

    // if (firebase.apps) {
    //   await firebase.database().ref('Users/' + getState().loginReducer.user + '/' + list + '/' + key)
    //     .remove().then((snapshot: any) => {
    //       dispatch({ type: REMOVE_HOME_LIST_ITEM, list: list, key: key });
    //     });
    // }
  }
}