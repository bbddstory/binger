'use strict';

import * as firebase from 'firebase';
import { LOGIN } from '../actions/loginActions';

let init = {
  email: ''
}

export function login(state: any = init, action: any) {
  switch (action.type) {
    case LOGIN:
      let ns = (<any>Object).assign({}, state);
      // ns.email = action.email;
      // console.log(window.location.hash);
      window.location.hash = window.location.hash + 'categories/'
      
      const config = {
        apiKey: 'AIzaSyDM7aH-HGeu6e0F6IKjgy0gjeoeTqkLGOc',
        authDomain: 'phantomzone-leon.firebaseapp.com',
        databaseURL: 'https://phantomzone-leon.firebaseio.com',
        projectId: 'phantomzone-leon',
        storageBucket: 'phantomzone-leon.appspot.com',
        messagingSenderId: '885937044869'
      };
      
      // firebase.initializeApp(config);
      
      // let authPromise = firebase.auth().signInWithEmailAndPassword(action.email, action.pwd).catch(error => {
      //   // Handle Errors here.
      //   let errorCode = error.code;
      //   let errorMessage = error.message;
      // });
      
      // authPromise.then(() => {
      //   firebase.database().ref('Animations').once('value').then((snapshot) => {
      //     let value = snapshot.val();
      //     console.log(value);
      //   });
      //   window.location.hash = window.location.hash + 'categories/'
        
      // }, reason => {
      //   console.log(reason);
      // });

      return ns;
    default:
      return state;
  }
}