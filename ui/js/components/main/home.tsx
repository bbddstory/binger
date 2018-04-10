'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAct } from '../../actions/loginActions';
import { loadWatchLaterAct, loadRecommAct } from '../../actions/homeActions';
import { FormattedMessage } from "react-intl";
import { resetFooter } from '../../util/utils';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  list(type: string) {
    return !!Object.keys(this.props.homeState[type]).length
  }

  componentWillMount() {
    this.props.loadWatchLaterDispatch();
    this.props.loadRecommDispatch();
  }

  componentDidMount() {
    resetFooter();
  }

  render() {
    const { homeState } = this.props;

    return (
      <div className="home">
        <h3><FormattedMessage id='home.watch' /></h3>
        <div className={!this.list('watchlater') ? "my-list empty" : "my-list"}>
          {!this.list('watchlater') && <FormattedMessage id='home.empty' />}
          {Object.keys(homeState.watchlater).map((key: any) => {
            return <div className="tile" key={key}>
              <Link to={"/main/details/" + key} onClick={e => this.props.setKeyDispatch(key)}>
                <img className="thumbnail" alt="Poster"
                  src={homeState.watchlater[key].poster === 'N/A' ?
                    this.state.dummyPoster : homeState.watchlater[key].poster} />
              </Link>
              <div className="details">
                <div className="title">{homeState.watchlater[key].engTitle}</div>
                <div className="director">
                  <span className="year">{homeState.watchlater[key].year}</span>
                  <br />{homeState.watchlater[key].director}
                </div>
              </div>
            </div>
          })}
        </div>
        <h3><FormattedMessage id='home.recomm' /></h3>
        <div className={!this.list('recomm') ? "my-list empty" : "my-list"}>
          {!this.list('recomm') && <FormattedMessage id='home.empty' />}
          {Object.keys(homeState.recomm).map((key: any) => {
            return <div className="tile" key={key}>
              <Link to={"/main/details/" + key} onClick={e => this.props.setKeyDispatch(key)}>
                <img className="thumbnail" alt="Poster"
                  src={homeState.watchlater[key].poster === 'N/A' ?
                    this.state.dummyPoster : homeState.watchlater[key].poster} />
              </Link>
              <div className="details">
                <div className="title">{homeState.watchlater[key].engTitle}</div>
                <div className="director">
                  <span className="year">{homeState.watchlater[key].year}</span>
                  <br />{homeState.watchlater[key].director}
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  homeState: store.homeReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loadWatchLaterDispatch: () => {
    dispatch(loadWatchLaterAct())
  },
  loadRecommDispatch: () => {
    dispatch(loadRecommAct())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
