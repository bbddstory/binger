'use strict';

import { TOGGLE_LOADER } from './uiActions';

// Action types
export const SET_KEY = 'SET_KEY';
export const WATCH_LATER = 'WATCH_LATER';
export const RECOMM = 'RECOMM';
export const SAVE_COMMENT = 'SAVE_COMMENT';
export const DEL_COMMENT = 'DEL_COMMENT';
export const SAVE_DETAILS = 'SAVE_DETAILS';
import { toggleEditDetailsAct } from '../actions/uiActions';

// Action creators
export function setKeyAct(key: string) {
  return {
    type: SET_KEY,
    key
  }
}

export function watchLaterAct() {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase,
      user = getState().loginReducer.user,
      values = getState().dataReducer.buffer[getState().dataReducer.key];

    if (firebase.apps) {
      await firebase.database().ref('Users/' + user + '/watchlater/' + getState().dataReducer.key)
        .set(values).then((snapshot: any) => {
          // dispatch({ type: WATCH_LATER });
        });
    }
  }
}

export function recommAct(user: string) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase,
      values = getState().dataReducer.buffer[getState().dataReducer.key];

    if (firebase.apps) {
      await firebase.database().ref('Users/' + user + '/recomm/' + getState().dataReducer.key)
        .set(values).then((snapshot: any) => {
          // dispatch({ type: RECOMM });
        });
    }
  }
}

export function commentAct(values: any) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;

    if (firebase.apps) {
      dispatch({ type: TOGGLE_LOADER, status: true });

      let ck = Object.keys(values)[0];
      await firebase.database().ref(getState().dataReducer.category + '/' + getState().dataReducer.key + '/comments')
        .update(values).then((snapshot: any) => {
          dispatch({ type: TOGGLE_LOADER, status: false });
          dispatch({ type: SAVE_COMMENT, values });
        });
    }
  }
}

export function delCommentAct(id: string) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;

    if (firebase.apps) {
      dispatch({ type: TOGGLE_LOADER, status: true });

      await firebase.database().ref(getState().dataReducer.category + '/' + getState().dataReducer.key + '/comments/' + id)
        .remove().then((snapshot: any) => {
          dispatch({ type: TOGGLE_LOADER, status: false });
          dispatch({ type: DEL_COMMENT, id });
        });
    }
  }
}

export function saveDetailsAct(values: any) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;

    if (firebase.apps) {
      dispatch({ type: TOGGLE_LOADER, status: true });

      let ref = '';

      if (getState().uiReducer.newRec) {
        ref = values.cat
        // TODO: get the max index of corresponding category, then plus one and give it to values.index
      } else {
        ref = values.cat + '/' + getState().dataReducer.key
      }

      await firebase.database().ref(ref)
        .set(values, { merge: true }).then((snapshot: any) => {
          dispatch({ type: TOGGLE_LOADER, status: false });
          
          if (getState().uiReducer.newRec) {
            // TODO: if it's a new record, push into buffer, create a new case SAVE_NEW in dataReducer.ts

          } else {
            dispatch({ type: SAVE_DETAILS, values });
          }

          dispatch(toggleEditDetailsAct(false, true, false));
        });
    }
  }
}