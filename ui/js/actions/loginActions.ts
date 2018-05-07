'use strict';

import axios from 'axios';
import cats from '../util/cats';
import { TOGGLE_LOADER } from './uiActions';
import { loadLatestAct } from './dataActions';

import { CEM_URL } from '../util/utils';

// Action types
export const SET_TOKEN = 'SET_TOKEN';
export const LOGIN = 'LOGIN';
export const LOAD_LATEST = 'LOAD_LATEST';

// Action creators
export function loginAct(form: any) {
  return (dispatch: any, getState: any) => {
    dispatch({ type: TOGGLE_LOADER, status: true, loaderTxt: 'Signing in...' });

    axios.post(CEM_URL() + '/users/login', form).then(res => {
      if (res.status === 200) {
        dispatch({ type: SET_TOKEN, token: res.data.token });
        dispatch({ type: TOGGLE_LOADER, status: false });
        document.cookie = "token=" + res.data.token;
        document.cookie = "email=" + form.email;

        location.hash = '/main/home'
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}

export function registerAct(form: any) {
  return (dispatch: any, getState: any) => {
    dispatch({ type: TOGGLE_LOADER, status: true, loaderTxt: 'Registering...' });

    axios.post(CEM_URL() + '/users/register', form).then(res => {
      if (res.status === 201) {
        dispatch({ type: SET_TOKEN, token: res.data, user: form.firstName, email: form.email });
        dispatch({ type: TOGGLE_LOADER, status: false });

        location.hash = '/'
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}

export function setTokenAct(token: string, email: string) {
  return (dispatch: any, getState: any) => {
    dispatch({ type: SET_TOKEN,  token: token, email: email });
  }
}