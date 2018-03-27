'use strict';

import * as jq from 'jquery';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { inView } from '../../util/utils';
import { initPage } from '../../actions/dataActions';
import Pages from '../pages';
import { anime_data, doc_data, movie_data, tv_data } from './data';

class Movies extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { ipp: 15, dummyPoster: 'ui/images/movie/poster.png' };
  }

  handleScroll = () => {
    // For Pages component
    if (!inView('#controls') && !jq('#controls').hasClass('controls-fixed')) {
      jq('#controls').addClass('controls-fixed')
    }
    if (inView('#pages')) {
      jq('#controls').removeClass('controls-fixed')
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('resize', this.handleScroll, true);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener('resize', this.handleScroll, true);
  }
  
  componentDidUpdate() {
    setTimeout(() => {
      this.handleScroll();
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

    this.props.initPage(data, Object.keys(movie_data).length, itemPerPage);
  }

  render() {
    return (
      <div className="movies">
        {Object.keys(this.props.dataState.data).map((key: any) => {
          return <div className="tile" key={key}>
            <Link to={"/main/details/" + key}>
              <img className="thumbnail" alt="Poster"
                src={this.props.dataState.data[key].poster === 'N/A' ?
                  this.state.dummyPoster : this.props.dataState.data[key].poster} />
            </Link>
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
