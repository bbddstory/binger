'use strict';

import swal from 'sweetalert2';

// Action types
export const SET_KEY = 'SET_KEY';
export const WATCH_LATER = 'WATCH_LATER';
export const RECOMM = 'RECOMM';
export const SAVE_DETAILS = 'SAVE_DETAILS';
export const LOAD_FRIENDS = 'LOAD_FRIENDS';
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
        values = getState().dataReducer.data[getState().dataReducer.key];

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
      values = getState().dataReducer.data[getState().dataReducer.key];

    if (firebase.apps) {
      await firebase.database().ref('Users/' + user + '/recomm/' + getState().dataReducer.key)
        .set(values).then((snapshot: any) => {
          // dispatch({ type: RECOMM });
        });
    }
  }
}

export function saveDetailsAct(values: any) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;

    if (firebase.apps) {
      swal('Saving Data', 'Please wait...', 'info').then(() => { }, (dismiss) => { });
      swal.showLoading();

      await firebase.database().ref('Movies/' + getState().dataReducer.key)
        .set(values).then((snapshot: any) => {
          swal.close();
          dispatch(toggleEditDetailsAct(false));
          dispatch({ type: SAVE_DETAILS, values });
        });
    }
  }
}