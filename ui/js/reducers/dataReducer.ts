'use strict';

import { LOAD_DATA } from '../actions/dataActions';
// import { anime_data, doc_data, movie_data, tv_data } from '../components/main/data';

let init = {
  data: {}
}

export function dataReducer(state: any = init, action: any) {
  switch (action.type) {
    case LOAD_DATA:
      console.log('dataReducer: ', action);
      
      let ns = (<any>Object).assign({}, state);
      ns.data = action.data;

      return ns;
    default:
      return state;
  }
}