'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { initPage } from '../../actions/dataActions';
import Pages from '../pages';
import { anime_data, doc_data, movie_data, tv_data } from './data';

class Movies extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { movies: {}, dummyPoster: 'ui/images/movie/poster.png' };
  }

  componentWillMount() {
    // this.props.loginState.firebase.database().ref('Movies')
    //   .orderByChild('index').startAt(0).endAt(11)
    //   .once('value').then((snapshot: any) => {
    //   let value = snapshot.val();
    //   this.props.initPage(value, Object.keys(value).length, 12);
    // })

    let i = 0, itemPerPage = 21, data: any = {};
    for (let p in movie_data) {
      if (i < itemPerPage) {
        data[p] = movie_data[p];
        i++;
      } else {
        break
      }
    }

    this.props.initPage(data, Object.keys(movie_data).length, itemPerPage);
  }

  render() {
    return (
      <div className="movies">
        {Object.keys(this.props.dataState.data).map((key: any) => {
          return <div className="tile" key={key}>
            <img className="thumbnail" alt="Poster"
              src={this.props.dataState.data[key].poster === 'N/A' ?
                this.state.dummyPoster : this.props.dataState.data[key].poster} />
            <div className="details">
              <div className="title">{this.props.dataState.data[key].engTitle}</div>
              <div className="director">
                <span className="year">{this.props.dataState.data[key].year}</span>
                <br />{this.props.dataState.data[key].director}
              </div>
            </div>
          </div>
        })}
        <Pages />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  loginState: state.loginReducer,
  dataState: state.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  initPage: (data: any, itemCnt: number, itemPerPage: number) => {
    dispatch(initPage(data, itemCnt, itemPerPage))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
