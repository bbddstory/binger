'use strict';

// import swal from 'sweetalert2';
import { TOGGLE_LOADER } from '../actions/uiActions';

// Action types
export const GOTO_PAGE = 'GOTO_PAGE';
export const SET_KEY = 'SET_KEY';
export const SYNC_CAT = 'SYNC_CAT';

// Action creators
export function setKeyAct(key: string) {
  return {
    type: SET_KEY,
    key
  }
}

export function syncCatAct() {
  return {
    type: SYNC_CAT
  }
}

export function loadDataAct(category: string, currPage: number, startAt: number, endAt: number) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;

    if (firebase.apps) {
      dispatch({ type: TOGGLE_LOADER, status: true });
      // swal('Loading Data', 'Please wait...', 'info').then(() => { }, (dismiss) => { });
      // swal.showLoading();
      let itemCnt: number, noData = false;

      await firebase.database().ref(category)
        .orderByChild('index').limitToLast(1)
        .once('value').then((snapshot: any) => {
          let data = snapshot.val();

          if (data) {
            for (let p in data) {
              itemCnt = data[p]['index'] + 1;
            }
          } else {
            noData = true;
          }
        });

      if (!noData) {
        await firebase.database().ref(category)
          .orderByChild('index').startAt(startAt).endAt(endAt)
          .once('value').then((snapshot: any) => {
            dispatch({ type: GOTO_PAGE, data: snapshot.val(), itemCnt, currPage, startAt, endAt });
            dispatch({ type: TOGGLE_LOADER, status: false });
            // swal.close();
          });
      } else {
        dispatch({ type: TOGGLE_LOADER, status: false });
        // swal.close();
      }
    }
  }
}