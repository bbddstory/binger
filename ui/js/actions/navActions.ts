// Action types
export const TOGGLE_NAV_OPT = 'TOGGLE_NAV_OPT';

// Action creators
export function toggleNavOpt(optName: string) {
  return {
    type: TOGGLE_NAV_OPT,
    optName
  }
}