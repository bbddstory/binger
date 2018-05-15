'use strict';

import axios from 'axios';
import { NODE_URL } from '../util/utils';

import { TOGGLE_LOADER } from './uiActions';

// Action types
export const LOAD_DETAILS = 'LOAD_DETAILS';
export const WATCH_LATER = 'WATCH_LATER';
export const RECOMM = 'RECOMM';
export const SAVE_COMMENT = 'SAVE_COMMENT';
export const DEL_COMMENT = 'DEL_COMMENT';
export const UPDATE_BUFFER_DETAILS = 'UPDATE_BUFFER_DETAILS';
export const SAVE_NEW = 'SAVE_NEW';
import { toggleEditDetailsAct } from '../actions/uiActions';

// Action creators
export function loadDetailsAct() {
  return (dispatch: any, getState: any) => {
    dispatch({ type: TOGGLE_LOADER, status: true });
    axios.post(NODE_URL() + '/details/load', {
      token: getState().loginReducer.token,
      key: getState().dataReducer.key
    }).then(res => {
      if (res.status === 200) {
        dispatch({ type: LOAD_DETAILS, details: res.data.details });
        dispatch({ type: TOGGLE_LOADER, status: false });
      }
    }).catch(err => console.log(err));
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
          dispatch({ type: SAVE_COMMENT, values, isSearch: getState().uiReducer.isSearch });
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
          dispatch({ type: DEL_COMMENT, id, isSearch: getState().uiReducer.isSearch });
        });
    }
  }
}

export function saveDetailsAct(values: any) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;

    if (firebase.apps) {
      dispatch({ type: TOGGLE_LOADER, status: true });

      let vc = (<any>Object).assign({}, values);
      let ref = '';
      let isNewRec = getState().uiReducer.newRec;

      if (isNewRec) {
        ref = values.cat

        // Get the max index of corresponding category, then plus one and give it to vc (values copy)
        await firebase.database().ref(ref)
          .orderByChild('index').limitToLast(1)
          .once('value').then((snapshot: any) => {
            let buffer = snapshot.val();

            if (buffer) {
              for (let p in buffer) {
                vc.index = buffer[p]['index'] + 1;
              }
            }
          });
      } else {
        ref = values.cat + '/' + getState().dataReducer.key
      }

      if (isNewRec) {
        await firebase.database().ref(ref)
          .push(vc).then((snapshot: any) => {
            let arr = snapshot.path.pieces_;

            dispatch({ type: TOGGLE_LOADER, status: false });
            dispatch({ type: SAVE_NEW, vc, arr }); // For a new record, add it to buffer if category matches
            dispatch(toggleEditDetailsAct(false, false));
          });
      } else {
        await firebase.database().ref(ref)
          .update(vc).then((snapshot: any) => {
            dispatch({ type: TOGGLE_LOADER, status: false });
            // if (!getState().uiReducer.isSearch) {
            dispatch({ type: UPDATE_BUFFER_DETAILS, vc, isSearch: getState().uiReducer.isSearch });
            // };
            dispatch(toggleEditDetailsAct(false, false));
          });
      }
    }
  }
}