'use strict';

import swal from 'sweetalert2';

// Action types
export const INIT_PAGES = 'INIT_PAGES';
export const GOTO_PAGE = 'GOTO_PAGE';
export const SET_KEY = 'SET_KEY';

// Action creators
export function initPagesAct(data: any, itemCnt: number, itemPerPage: number) {
  return {
    type: INIT_PAGES,
    data,
    itemCnt,
    itemPerPage
  }
}

export function goToPageAct(data: any, currPage: number, itemStartIdx: number, itemEndIdx: number) {
  return {
    type: GOTO_PAGE,
    data,
    currPage,
    itemStartIdx,
    itemEndIdx
  }
}

export function setKeyAct(key: string) {
  return {
    type: SET_KEY,
    key
  }
}

export function loadDataAct(category: string, ipp: number) {
  return async (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;
    
    if (firebase.apps) {
      swal('Loading ' + category + ' Data', 'Please wait...', 'info').then(() => {}, (dismiss) => {});
      swal.showLoading();
      let itemCnt: number;

      console.log('-- await "itemCnt"');
      
      await firebase.database().ref(category)
        .orderByChild('index').limitToLast(1)
        .once('value').then((snapshot: any) => {
          let data = snapshot.val();

          for(let p in data) {
            itemCnt = data[p]['index'];
          };
          console.log(itemCnt);
        });

      console.log('-- await "Movies data"');

      await firebase.database().ref(category)
        .orderByChild('index').startAt(0).endAt(20)
        // .limitToFirst(3)
        .once('value').then((snapshot: any) => {
          let data = snapshot.val();
          console.log(data);
          
          dispatch(initPagesAct(data, itemCnt, ipp));
          swal.close();
        });
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
      }, (dismiss) => {});
      swal.showLoading();
    }
  }
}