import { TOGGLE_NAV_OPT } from '../actions/navActions';

let init = {
  apps: 'none',
  notice: 'none',
  me: 'none'
}

export function toggleNavOpt(state: any = init, action: any) {
  switch (action.type) {
    case TOGGLE_NAV_OPT:
      let t = (<any>Object).assign({}, state);
      for (let i in t)
        if(i === action.optName) 
          t[i] === 'none' ? t[i] = 'block' : t[i] = 'none';
        else
          t[i] = 'none';
      return t;
    default:
      return state;
  }
}