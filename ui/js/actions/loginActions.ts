'use strict';

import * as firebase from 'firebase';
import config from '../util/firebase';
import cats from '../util/cats';
import { TOGGLE_LOADER } from './uiActions';
import { loadLatestAct } from './dataActions';

// Action types
export const LOGIN = 'LOGIN';
export const LOAD_LATEST = 'LOAD_LATEST';

// Action creators
export function loginAct(email: string, pwd: string) {
  return (dispatch: any, getState: any) => {
    dispatch({ type: TOGGLE_LOADER, status: true, loaderTxt: 'Signing in...' });
    
    // If Firebase has already been initialised, do not initialise again.
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    
    let authPromise = firebase.auth().signInWithEmailAndPassword(email, pwd).catch(error => {
      // Handle Errors here.
      dispatch({ type: TOGGLE_LOADER, status: true, loaderTxt: 'Sign in Failed', loading: false });
      console.log(error.code, error.message);
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
            let buffer = snapshot.val();

            if (buffer) {
              dispatch({ type: LOGIN, buffer, firebase });
              dispatch({ type: TOGGLE_LOADER, status: false });

              dispatch(loadLatestAct());
              
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