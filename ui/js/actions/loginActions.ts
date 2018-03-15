// Action types
export const LOGIN = 'LOGIN';

// Action creators
export function loginAct(email: string, pwd: string) {
  return {
    type: LOGIN,
    email,
    pwd
  }
}