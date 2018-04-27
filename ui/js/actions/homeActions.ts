'use strict';

import * as firebase from 'firebase';

// Action types
export const SYNC_HOME_LIST = 'SYNC_HOME_LIST';
export const REMOVE_HOME_LIST_ITEM = 'REMOVE_HOME_LIST_ITEM';

// Action creators
export function syncHomeListAct() {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;

    if (firebase.apps) {
      let ns = {};
      ns = (<any>Object).assign(ns, getState().loginReducer.latest);
      ns = (<any>Object).assign(ns, getState().loginReducer.watchlater);
      ns = (<any>Object).assign(ns, getState().loginReducer.recomm);

      dispatch({ type: SYNC_HOME_LIST, homeList: ns });
    }
  }
}

export function removeHomeListItemAct(key: string, list: string) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;

    if (firebase.apps) {
      await firebase.database().ref('Users/' + getState().loginReducer.user + '/' + list + '/' + key)
        .remove().then((snapshot: any) => {
          dispatch({ type: REMOVE_HOME_LIST_ITEM, list: list, key: key });
        });

    }
  }
}