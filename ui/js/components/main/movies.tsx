'use strict';

import * as jq from 'jquery';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { initPage } from '../../actions/dataActions';
import Pages from '../pages';
import { anime_data, doc_data, movie_data, tv_data } from './data';

class Movies extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { ipp: 21, dummyPoster: 'ui/images/movie/poster.png' };
  }

  inView = (el: string) => {
    var docViewTop = jq(window).scrollTop();
    var docViewBottom = docViewTop + jq(window).height();

    var elemTop = jq(el).offset().top;
    var elemBottom = elemTop + jq(el).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  handleScroll = () => {
    // For Search component
    if (!this.inView('#search') && !jq('#search-box').hasClass('search-fixed')) {
      jq('#search-box').removeClass('search-restore');
      jq('#search-box').addClass('search-fixed');
    }
    if (this.inView('#search') && jq('#search-box').hasClass('search-fixed')) {
      jq('#search-box').removeClass('search-fixed');
      jq('#search-box').addClass('search-restore');
    }
    // For Pages component
    if (!this.inView('#controls') && !jq('#controls').hasClass('controls-fixed')) {
      jq('#controls').addClass('controls-fixed')
    }
    if (this.inView('#pages')) {
      jq('#controls').removeClass('controls-fixed')
    }
  }
  
  resetFooter = () => {
    if (Math.ceil(jq('.footer').offset().top + jq('.footer').height()) < window.innerHeight) {
      jq('.footer').addClass('footer-fixed')
    }
    if (Math.ceil(document.getElementById('center').scrollHeight) > window.innerHeight) {
      jq('.footer').removeClass('footer-fixed')
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('resize', this.handleScroll, true);
    window.addEventListener('resize', this.resetFooter, true);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener('resize', this.handleScroll, true);
    window.removeEventListener('resize', this.resetFooter, true);
  }
  
  componentDidUpdate() {
    this.resetFooter();
    setTimeout(() => {
      this.handleScroll();
    }, 1000);
  }

  componentWillMount() {
    // this.props.loginState.firebase.database().ref('Movies')
    //   .orderByChild('index').startAt(0).endAt(11)
    //   .once('value').then((snapshot: any) => {
    //   let value = snapshot.val();
    //   this.props.initPage(value, Object.keys(value).length, 12);
    // })

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
