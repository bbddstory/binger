'use strict';

import axios from 'axios';

import cats from '../util/cats';
import { TOGGLE_LOADER } from './uiActions';
// import { loadLatestAct } from './dataActions';
import { NODE_URL } from '../util/utils';

// Action types
export const LOGIN = 'LOGIN';
export const SET_TOKEN = 'SET_TOKEN';

// Action creators
export function registerAct(form: any) {
  return (dispatch: any, getState: any) => {
    dispatch({ type: TOGGLE_LOADER, status: true, loaderTxt: 'Registering...' });

    axios.post(NODE_URL() + '/users/register', form).then(res => {
      if (res.status === 201) {
        dispatch({
          type: SET_TOKEN,
          token: res.data.token,
          email: form.email,
          user: form.firstName
        });
        dispatch({ type: TOGGLE_LOADER, status: false });

        location.hash = 'main/home'
      }
    }).catch(err => console.log(err));
  }
}

export function loginAct(form: any) {
  return (dispatch: any, getState: any) => {
    dispatch({ type: TOGGLE_LOADER, status: true, loaderTxt: 'Signing in...' });

    axios.post(NODE_URL() + '/users/login', form).then(res => {
      if (res.status === 200) {
        dispatch({
          type: SET_TOKEN,
          token: res.data.token,
          email: form.email,
          user: res.data.user
        });
        dispatch({ type: TOGGLE_LOADER, status: false });

        document.cookie = "token=" + res.data.token;
        document.cookie = "email=" + form.email;
        document.cookie = "user=" + res.data.user;

        location.hash = 'main/home'
      }
    }).catch(err => console.log(err));
  }
}

export function setTokenAct(token: string, email: string, user: string) {
  return (dispatch: any, getState: any) => {
    dispatch({ type: SET_TOKEN, token: token, email: email, user: user });
  }
}