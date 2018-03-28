'use strict';

import * as jq from 'jquery';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetPages, resetFooter } from '../../util/utils';
import { initPageAct } from '../../actions/dataActions';
import Pages from '../pages';
import { anime_data, doc_data, movie_data, tv_data } from '../../data/data';

class Movies extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { ipp: 21, dummyPoster: 'ui/images/movie/poster.png' };
  }

  componentDidMount() {
    window.addEventListener('scroll', resetPages, true);
    window.addEventListener('resize', resetPages, true);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', resetPages, true);
    window.removeEventListener('resize', resetPages, true);
  }
  
  componentDidUpdate() {
    resetPages();
    resetFooter();
    setTimeout(() => {
    }, 1000);
  }

  componentWillMount() {
    let i = 0, itemPerPage = this.state.ipp, data: any = {};
    for (let p in movie_data) {
      if (i < itemPerPage) {
        data[p] = movie_data[p];
        i++;
      } else {
        break
      }
    }

    this.props.initPageDispatch(data, Object.keys(movie_data).length, itemPerPage);
  }

  render() {
    const { dataState } = this.props;

    return (
      <div className="movies">
        {Object.keys(dataState.data).map((key: any) => {
          return <div className="tile" key={key}>
            <Link to={"/main/details/" + key}>
              <img className="thumbnail" alt="Poster"
                src={dataState.data[key].poster === 'N/A' ?
                  this.state.dummyPoster : dataState.data[key].poster} />
            </Link>
            <div className="details">
              <div className="title">{dataState.data[key].engTitle}</div>
              <div className="director">
                <span className="year">{dataState.data[key].year}</span>
                <br />{dataState.data[key].director}
              </div>
            </div>
          </div>
        })}
        <Pages />
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  loginState: store.loginReducer,
  dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  initPageDispatch: (data: any, itemCnt: number, itemPerPage: number) => {
    dispatch(initPageAct(data, itemCnt, itemPerPage))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
