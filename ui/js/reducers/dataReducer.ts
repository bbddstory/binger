'use strict';

import { GOTO_PAGE, SET_KEY } from '../actions/dataActions';
import { SAVE_COMMENT, DEL_COMMENT, SAVE_DETAILS } from '../actions/detailsActions';
import { SWITCH_CAT } from '../actions/categoriesActions';
import cats from '../util/cats';

interface initInterface {
  [key: string]: any
}

let init: initInterface = {
  // key: '-L75lYVDwtkdnCrElxSV',
  // data: {
  //   "-L75lYVDwtkdnCrElxSV": {
  //     "director": "Khian Bartlett, Carol Damgen",
  //     "engTitle": "Three Billboards Outside Ebbing, Missouri",
  //     "imdb_id": "tt7651078",
  //     "index": 1,
  //     "origTitle": "東京物語",
  //     "plot": "A modern retelling of H.G. Wells classic novel, The Invisible Man. Motivated by the death of his son, Griffin, a brilliant but eccentric scientist discovers a method to invisibility. He is able to complete the experiment, with the aid of his assistant, Faith. The formula allows him to exact revenge on murderer that killed his son, but at a tragic expense, the formula slowly begins to consume his mind.",
  //     "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmVkNDQ1NTQtNzU4NC00MDkzLThkNTktMmM1YTRhNzljODcwXkEyXkFqcGdeQXVyNzAwMzgyMDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  //     "rating": "4.4",
  //     "runtime": "1h 28min",
  //     "status": 1,
  //     "year": "1933"
  //   }
  // },
  key: '',
  data: {},
  category: cats.HOME,
  itemCnt: 0, // Total number of records in designated category
  ipp: 12, // itemPerPage
  pageCnt: 0,
  currPage: 1,
  startAt: 0, // Start index of items on current page
  endAt: 11 // End index of items on current page
}

export function dataReducer(state: any = init, action: any) {
  let ns = (<any>Object).assign({}, state);

  switch (action.type) {
    case SWITCH_CAT:
      if (action.cat === cats.HOME) {
        ns.category = action.cat;
      } else { // Needs to reset all pagination related values
        ns.category = action.cat;
        ns.itemCnt = 0;
        ns.pageCnt = 0;
        ns.currPage = 1;
        ns.startAt = 0;
        ns.endAt = 11;
      }

      return ns;
    case GOTO_PAGE:
      ns.data = action.data;
      ns.itemCnt = action.itemCnt;
      ns.pageCnt = Math.ceil(action.itemCnt / init.ipp);
      ns.currPage = action.currPage;
      ns.startAt = action.startAt;
      ns.endAt = action.endAt;

      return ns;
    case SET_KEY:
      ns.key = action.key;

      return ns;
    case SAVE_DETAILS:
      ns.data[state.key] = action.values;

      return ns;
    case SAVE_COMMENT:
      let ck = Object.keys(action.values)[0];
      ns.data[state.key].comments[ck] = action.values[ck];

      return ns;
    case DEL_COMMENT:
      delete ns.data[state.key].comments[action.id];

      return ns;
    default:
      return state;
  }
}