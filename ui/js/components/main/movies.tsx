'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { dataAct } from '../../actions/dataActions';
import Pages from '../pages';
import { anime_data, doc_data, movie_data, tv_data } from './data';

class Movies extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { movies: {}, dummyPoster: 'ui/images/movie/poster.png' };
  }

  componentDidMount() {
    // this.props.loginState.firebase.database().ref('Movies')
    //   .orderByChild('index').startAt(0).endAt(11)
    //   .once('value').then((snapshot: any) => {
    //   let value = snapshot.val();
    //   console.log('value: ', value);
      
    //   this.props.moviesDispath(value);
    // })

    this.props.moviesDispath(movie_data);
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
  moviesDispath: (movies: any) => {
    console.log('movies: ', movies);
    dispatch(dataAct(movies))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
