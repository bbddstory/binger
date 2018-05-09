'use strict';

import axios from 'axios';

import cats from '../util/cats';
import { TOGGLE_LOADER, resetIsSearchAct } from './uiActions';
import { CEM_URL } from '../util/utils';

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
  return (dispatch: any, getState: any) => {
    dispatch({ type: TOGGLE_LOADER, status: true });

    axios.post(CEM_URL() + '/videos/load_cat', category).then(res => {
      if (res.status === 200) {
        dispatch({
          // type: SET_TOKEN,
          // token: res.data.token,
          // email: form.email,
          // user: form.firstName
        });
        dispatch({ type: TOGGLE_LOADER, status: false });

        // location.hash = '/main/home'
      }
    }).catch(err => console.log(err));

    // let firebase = getState().loginReducer.firebase;

    // if (firebase.apps) {
    //   dispatch({ type: TOGGLE_LOADER, status: true });
    //   let itemCnt: number, noData = false;

    //   await firebase.database().ref(category)
    //     .orderByChild('index').limitToLast(1)
    //     .once('value').then((snapshot: any) => {
    //       let buffer = snapshot.val();

    //       if (buffer) {
    //         for (let p in buffer) {
    //           itemCnt = buffer[p]['index'] + 1;
    //         }
    //       } else {
    //         noData = true;
    //       }
    //     });

    //   if (!noData) {
    //     await firebase.database().ref(category)
    //       .orderByChild('index').startAt(startAt).endAt(endAt)
    //       .once('value').then((snapshot: any) => {
    //         dispatch(resetIsSearchAct());
    //         dispatch({ type: GOTO_PAGE, buffer: snapshot.val(), itemCnt, currPage, startAt, endAt });
    //         dispatch({ type: TOGGLE_LOADER, status: false });
    //       });
    //   } else {
    //     dispatch({ type: TOGGLE_LOADER, status: false });
    //   }
    // }
  }
}