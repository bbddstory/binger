'use strict';

import swal from 'sweetalert2';
import * as firebase from 'firebase';
import config from '../util/firebase';
import cats from '../util/cats';

// Action types
export const LOGIN = 'LOGIN';

// Action creators
export function loginAct(email: string, pwd: string) {
  return (dispatch: any, getState: any) => {
    swal('Signing In', 'Please wait...', 'info').then(() => { }, (dismiss) => { });
    swal.showLoading();
    
    // If Firebase has already been initialised, do not initialise again.
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
    
    authPromise.then(async e => {
      if (e) {
        let user = email.substr(0, email.indexOf('@'));

        /**
         * Set a cookie for keeping the user session.
         * When the page is refreshed, automatically sign in again.
         */
        document.cookie = 'email=' + email;
        document.cookie = 'pwd=' + pwd;

        await firebase.database().ref('Users/' + user)
          .on('value', (snapshot: any) => {
            let data = snapshot.val();

            if (data) {
              dispatch({ type: LOGIN, data, firebase });
              swal.close();

              let hash = location.hash;
              if (getState().dataReducer.category === cats.HOME && !hash.endsWith('main/home')) {
                location.hash = 'main/home'
              }
            }
          });

      }
    }, reason => {
      console.log(reason);
    });
  }
}