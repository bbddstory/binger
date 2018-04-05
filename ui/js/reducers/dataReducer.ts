'use strict';

import { INIT_PAGES, GOTO_PAGE, SET_KEY } from '../actions/dataActions';

let init = {
  key: '-L75lYVDwtkdnCrElxSV',
  data: {
    "-L75lYVDwtkdnCrElxSV": {
      "director": "Khian Bartlett, Carol Damgen",
      "engTitle": "Three Billboards Outside Ebbing, Missouri",
      "imdb_id": "tt7651078",
      "origTitle": "東京物語",
      "plot": "A modern retelling of H.G. Wells classic novel, The Invisible Man. Motivated by the death of his son, Griffin, a brilliant but eccentric scientist discovers a method to invisibility. He is able to complete the experiment, with the aid of his assistant, Faith. The formula allows him to exact revenge on murderer that killed his son, but at a tragic expense, the formula slowly begins to consume his mind.",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmVkNDQ1NTQtNzU4NC00MDkzLThkNTktMmM1YTRhNzljODcwXkEyXkFqcGdeQXVyNzAwMzgyMDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "rating": "4.4",
      "runtime": "1h 28min",
      "status": 1,
      "type": "Movie",
      "year": "1933",
      "index": 1
    }
  },
  itemCnt: -1,
  totalPage: -1,
  currPage: 1,
  itemPerPage: -1,
  itemStartIdx: 0, // start index of items on current page
  itemEndIdx: -1 // end index of items on current page
}

export function dataReducer(state: any = init, action: any) {
  let ns = (<any>Object).assign({}, state);

  switch (action.type) {
    case INIT_PAGES:
      ns.data = action.data;
      ns.itemCnt = action.itemCnt;
      ns.totalPage = Math.ceil(action.itemCnt / action.itemPerPage);
      ns.itemPerPage = action.itemPerPage;
      ns.itemEndIdx = --action.itemPerPage;

      return ns;
    case GOTO_PAGE:
      ns.data = action.data;
      ns.currPage = action.currPage;
      ns.itemStartIdx = action.itemStartIdx;
      ns.itemEndIdx = action.itemEndIdx;

      return ns;
    case SET_KEY:
      ns.key = action.key;
      
      return ns;
    default:
      return state;
  }
}