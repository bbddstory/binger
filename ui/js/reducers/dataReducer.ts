'use strict';

import { INIT_PAGES, GOTO_PAGE } from '../actions/dataActions';

let init = {
  data: {
    "-L75lYVDwtkdnCrElxSV": {
      "contentRating": "N/A",
      "director": "Khian BartlettCarol Damgen",
      "engTitle": "The Invisible Man",
      "imdb_id": "tt7651078",
      "origTitle": "The Invisible Man",
      "plot": "A modern retelling of H.G. Wells classic novel, The Invisible Man. Motivated by the death of his son, Griffin, a brilliant but eccentric scientist discovers a method to invisibility. He is ... See full summary »",
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
  let ns;
  switch (action.type) {
    case INIT_PAGES:
      ns = (<any>Object).assign({}, state);
      ns.data = action.data;
      ns.itemCnt = action.itemCnt;
      ns.totalPage = Math.ceil(action.itemCnt / action.itemPerPage);
      ns.itemPerPage = action.itemPerPage;
      ns.itemEndIdx = --action.itemPerPage;

      return ns;
    case GOTO_PAGE:
      ns = (<any>Object).assign({}, state);
      ns.data = action.data;
      ns.currPage = action.currPage;
      ns.itemStartIdx = action.itemStartIdx;
      ns.itemEndIdx = action.itemEndIdx;

      return ns;
    default:
      return state;
  }
}