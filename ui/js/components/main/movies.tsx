'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { moviesAct } from '../../actions/moviesActions';
import Pages from '../pages';
import { anime_data, doc_data, movie_data, tv_data } from './data';

class Movies extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { movies: {}, dummyPoster: 'ui/images/movie/poster.png' };
  }

  componentDidMount() {
    this.props.loginState.firebase.database().ref('Movies')
      // .limitToFirst(24)
      .orderByChild('index').startAt(24).endAt(35)
      // .orderByChild('year').startAt('2016').endAt('2017')
      .once('value').then((snapshot: any) => {
      let value = snapshot.val();
      // this.props.moviesDispath(value);
      this.setState({
        movies: value
      });
    })
    // this.setState({
    //   movies: movie_data 
    // });
  }

  // componentWillUpdate(prevProps: any, prevState: any) {
  //   // console.log('-- CB from reducer', prevProps);
  //   // console.log('-- CB from reducer', prevState);
  //   // console.log('-- CB from reducer', this.props);
  //   // console.log('-- CB from reducer', this.state);
  //   console.log('-- 1');

  //   this.setState({
  //     movies: this.props.moviesState.movies
  //   });
  // }

  render() {
    return (
      <div className="movies">
        {Object.keys(this.state.movies).map((key: any) => {
          return <div className="tile" key={key}>
            <img className="thumbnail" alt="Poster"
              src={this.state.movies[key].poster === 'N/A' ? this.state.dummyPoster : this.state.movies[key].poster} />
            <div className="details">
              <div className="title">{this.state.movies[key].engTitle}</div>
              {/* <div className="year">{this.state.movies[key].year}</div> */}
              <div className="director">
                <span className="year">{this.state.movies[key].year}</span>
                <br />{this.state.movies[key].director}
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
  moviesState: state.moviesReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  moviesDispath: (movies: any) => {
    dispatch(moviesAct(movies))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
