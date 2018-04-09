'use strict';

import swal from 'sweetalert2';

// Action types
export const GOTO_PAGE = 'GOTO_PAGE';
export const SET_KEY = 'SET_KEY';

// Action creators
export function setKeyAct(key: string) {
  return {
    type: SET_KEY,
    key
  }
}

export function loadDataAct(category: string, currPage: number, startAt: number, endAt: number) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;

    if (firebase.apps) {
      swal('Loading Data', 'Please wait...', 'info').then(() => { }, (dismiss) => { });
      swal.showLoading();
      let itemCnt: number, noData = false;

      await firebase.database().ref(category)
        .orderByChild('index').limitToLast(1)
        .once('value').then((snapshot: any) => {
          let data = snapshot.val();
          
          if (data) {
            for (let p in data) {
              itemCnt = data[p]['index'];
            }
          } else {
            noData = true;
          }
        });

      if (!noData) {
        await firebase.database().ref(category)
          .orderByChild('index').startAt(startAt).endAt(endAt)
          .once('value').then((snapshot: any) => {
            // DISPATCH from here
            dispatch({ type: GOTO_PAGE, data: snapshot.val(), itemCnt, currPage, startAt, endAt });
            swal.close();
          });
      } else {
        swal.close();
      }
    } else {
      swal({
        type: 'error',
        title: 'You\'re Not Signed In',
        html: 'Please sign in using your Google account.',
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: 'Sign In'
      }).then(() => {
        location.hash = '#';
      }, (dismiss) => { });
    }
  }
}