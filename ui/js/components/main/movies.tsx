'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetPages, resetFooter } from '../../util/utils';
import vTypes from '../../util/vTypes';
import { loadDataAct, setKeyAct } from '../../actions/dataActions';
import Pages from '../pages';

class Movies extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { dummyPoster: 'images/movie/poster.png' };
  }

  componentWillMount() {
    let data = this.props.dataState.data;
    
    if (data.constructor === Object && Object.keys(data).length === 0) {
      this.props.loadDataDispatch(
        vTypes.MOVIE,
        this.props.dataState.currPage,
        this.props.dataState.startAt,
        this.props.dataState.endAt
      )
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', resetPages, true);
    window.addEventListener('resize', resetPages, true);
    resetFooter();
  }
  
  componentDidUpdate() {
    setTimeout(() => {
      resetPages();
      resetFooter();
    }, 200);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', resetPages, true);
    window.removeEventListener('resize', resetPages, true);
  }

  render() {
    const { dataState } = this.props;

    return (
      <div className="movies">
        {Object.keys(dataState.data).map((key: any) => {
          return <div className="tile" key={key}>
            <Link to={"/main/details/" + key} onClick={e => this.props.setKeyDispatch(key)}>
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
        {Object.keys(dataState.data).length && <Pages />}
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loadDataDispatch: (category: string, currPage: number, startAt: number, endAt: number) => {
    dispatch(loadDataAct(category, currPage, startAt, endAt))
  },
  setKeyDispatch: (key: string) => {
    dispatch(setKeyAct(key))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
