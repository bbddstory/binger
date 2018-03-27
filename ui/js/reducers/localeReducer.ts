'use strict';

import { LOCALE } from '../actions/localeActions';

let init = {
  lang: 'ja'
}

export function localeReducer(state: any = init, action: any) {
  switch (action.type) {
    case LOCALE:
      let ns = (<any>Object).assign({}, state);
      ns.lang = action.lang;
      
      // const config = {
      //   apiKey: 'AIzaSyDM7aH-HGeu6e0F6IKjgy0gjeoeTqkLGOc',
      //   authDomain: 'phantomzone-leon.firebaseapp.com',
      //   databaseURL: 'https://phantomzone-leon.firebaseio.com',
      //   projectId: 'phantomzone-leon',
      //   storageBucket: 'phantomzone-leon.appspot.com',
      //   messagingSenderId: '885937044869'
      // };
      
      // firebase.initializeApp(config);
      
      // let authPromise = firebase.auth().signInWithEmailAndPassword(action.email, action.pwd).catch(error => {
      //   // Handle Errors here.
      //   let errorCode = error.code;
      //   let errorMessage = error.message;
      // });
      
      // authPromise.then(() => {
      //   ns.email = action.email;
      //   ns.firebase = firebase;
      //   window.location.hash = window.location.hash + 'main/'
      // }, reason => {
      //   console.log(reason);
      // });

      return ns;
    default:
      return state;
  }
}