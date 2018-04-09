'use strict';

import swal from 'sweetalert2';

// Action types
export const SET_KEY = 'SET_KEY';
export const SAVE_DETAILS = 'SAVE_DETAILS';
import { editDetailsAct } from '../actions/uiActions';

// Action creators
export function setKeyAct(key: string) {
  return {
    type: SET_KEY,
    key
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
          dispatch(editDetailsAct(false));

          dispatch({ type: SAVE_DETAILS, values });
        });
    }
  }
}