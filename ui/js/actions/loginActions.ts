'use strict';

import swal from 'sweetalert2';
import * as firebase from 'firebase';

// Action types
export const LOGIN = 'LOGIN';

// Action creators
export function loginAct(email: string, pwd: string) {
  return (dispatch: any) => {
    swal('Signing In', 'Please wait...', 'info').then(() => {}, (dismiss) => {});
    swal.showLoading();

    const config = {
      apiKey: 'AIzaSyDM7aH-HGeu6e0F6IKjgy0gjeoeTqkLGOc',
      authDomain: 'phantomzone-leon.firebaseapp.com',
      databaseURL: 'https://phantomzone-leon.firebaseio.com',
      messagingSenderId: '885937044869',
      projectId: 'phantomzone-leon',
      storageBucket: 'phantomzone-leon.appspot.com'
    };

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