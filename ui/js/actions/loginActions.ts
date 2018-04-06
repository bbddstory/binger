'use strict';

import swal from 'sweetalert2';
import * as firebase from 'firebase';
import config from '../util/firebase';

// Action types
export const LOGIN = 'LOGIN';

// Action creators
export function loginAct(email: string, pwd: string) {
  return (dispatch: any) => {
    swal('Signing In', 'Please wait...', 'info').then(() => {}, (dismiss) => {});
    swal.showLoading();

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    let authPromise = firebase.auth().signInWithEmailAndPassword(email, pwd).catch(error => {
      // Handle Errors here.
      swal({
        type: 'error',
        title: 'Sign in Failed',
        html: '<span class="err-code">' + error.code + '</span>' + '<br>' + error.message,
        showConfirmButton: true,
        allowOutsideClick: true,
        allowEscapeKey: true
      }).then(() => {
      }, (dismiss) => {
      });
    });

    authPromise.then((e) => {
      if(e) {
        swal.close();
        location.hash = location.hash + 'main/home'
        
        dispatch({
          type: LOGIN,
          email,
          firebase
        })
      }
    }, reason => {
      console.log(reason);
    });
  }
}