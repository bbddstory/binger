'use strict';

import * as firebase from 'firebase';

// Action types
export const LOGIN = 'LOGIN';

// Action creators
export function loginAct(email: string, pwd: string) {
  return (dispatch: any) => {
    const config = {
      apiKey: 'AIzaSyDM7aH-HGeu6e0F6IKjgy0gjeoeTqkLGOc',
      authDomain: 'phantomzone-leon.firebaseapp.com',
      databaseURL: 'https://phantomzone-leon.firebaseio.com',
      projectId: 'phantomzone-leon',
      storageBucket: 'phantomzone-leon.appspot.com',
      messagingSenderId: '885937044869'
    };

    firebase.initializeApp(config);

    let authPromise = firebase.auth().signInWithEmailAndPassword(email, pwd).catch(error => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
    });

    authPromise.then(() => {
      location.hash = location.hash + 'main/home'
      
      dispatch({
        type: LOGIN,
        email,
        firebase
      })
    }, reason => {
      console.log(reason);
    });
  }
}