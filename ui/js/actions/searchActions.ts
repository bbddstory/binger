'use strict';

// Action types
export const SEARCH = 'SEARCH';
export const SEARCH_RETURN = 'SEARCH_RETURN';
export const SET_SEARCH_FLAG = 'SET_SEARCH_FLAG';

// Action creators
export function searchAct(key: string) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;

    if (firebase.apps) {
      await firebase.database().ref(getState().dataReducer.category).orderByChild('engTitle').equalTo(key)
        .once('value').then((snapshot: any) => {
          let buffer = snapshot.val();

          if (buffer) {
            dispatch({ type: SET_SEARCH_FLAG });
            dispatch({ type: SEARCH_RETURN, buffer });
            location.hash = 'main/search';
          }
        });
    }
  }
}