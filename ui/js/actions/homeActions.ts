'use strict';

// Action types
export const LOAD_WATCH_LATER = 'LOAD_WATCH_LATER';
export const LOAD_RECOMM = 'LOAD_RECOMM';

// Action creators
export function loadWatchLaterAct() {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase,
        user = getState().loginReducer.user;

    if (firebase.apps) {
      await firebase.database().ref('Users/' + user + '/watchlater')
        .orderByChild('index')
        .once('value').then((snapshot: any) => {
          let data = snapshot.val();

          if (data) {
            dispatch({ type: LOAD_WATCH_LATER, data })
          }
        })
    }
  }
}

export function loadRecommAct() {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase,
        user = getState().loginReducer.user;

    if (firebase.apps) {
      await firebase.database().ref('Users/' + user + '/recomm')
        .orderByChild('index')
        .once('value').then((snapshot: any) => {
          let data = snapshot.val();

          if (data) {
            dispatch({ type: LOAD_RECOMM, data })
          }
        })
    }
  }
}