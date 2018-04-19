'use strict';

import * as firebase from 'firebase';

// Action types
export const SYNC_HOME_LIST = 'SYNC_HOME_LIST';

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