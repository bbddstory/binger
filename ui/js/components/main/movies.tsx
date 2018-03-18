'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { moviesAct } from '../../actions/moviesActions';

class Movies extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { movies: []};
  }

  componentDidMount() {
    this.props.loginState.firebase.database().ref('Animations').once('value').then((snapshot: any) => {
      let value = snapshot.val();
      // this.props.moviesDispath(value);
      this.setState({
        movies: value
      });
    })
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

  //   // console.log(this.props.moviesState.movies);
  // }

  render() {
    return (
      // <div>MOVIE LIST</div>
      <div className="movies">
        {Object.keys(this.state.movies).map((key: any) => {
          console.log(this.state.movies[key]);
          
          return <div className="tile">
            <div className="thumbnail tus"></div>
            <div className="details">
              <div className="title">{this.state.movies[key].engTitle}</div>
              <div className="year">{this.state.movies[key].year}</div>
              <div className="director">{this.state.movies[key].type}</div>
            </div>
          </div>
        })}
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
