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

export function loadDataAct(category: string) {
  return (dispatch: any, getState: any) => {
    let firebase = getState().loginReducer.firebase;
    
    if (firebase.apps) {
      swal('Loading ' + category + ' Data', 'Please wait...', 'info').then(() => {}, (dismiss) => {});
      swal.showLoading();

      firebase.database().ref(category)
        // .orderByChild('year').startAt('2016').endAt('2017')
        .orderByChild('index').startAt(0).endAt(20)
        // .limitToFirst(3)
        .once('value').then((snapshot: any) => {
          let value = snapshot.val();

          console.log(value);
          
          swal.close();
        });
    } else {
      swal({
        type: 'error',
        title: 'You\'re Not Signed In',
        html: 'Please sign in first, using your Google account.',
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: 'Sign In'
      }).then(() => {
        location.hash = '#';
      }, (dismiss) => {});
      swal.showLoading();
    }

    // let authPromise = firebase.auth().signInWithEmailAndPassword(email, pwd).catch(error => {
    //   // Handle Errors here.
    //   swal({
    //     type: 'error',
    //     title: 'Sign in Failed',
    //     html: '<span class="err-code">' + error.code + '</span>' + '<br>' + error.message,
    //     showConfirmButton: true,
    //     allowOutsideClick: true,
    //     allowEscapeKey: true
    //   }).then(() => {
    //   }, (dismiss) => {
    //   });
    // });

    // authPromise.then((e) => {
    //   if (e) {
    //     swal.close();
    //     location.hash = location.hash + 'main/home'

    //     dispatch({
    //       type: LOGIN,
    //       email,
    //       firebase
    //     })
    //   }
    // }, reason => {
    //   console.log(reason);
    // });
  }
}