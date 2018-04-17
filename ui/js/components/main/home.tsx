'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAct } from '../../actions/loginActions';
import { FormattedMessage } from "react-intl";
import { resetFooter } from '../../util/utils';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  list(type: string) {
    return !!this.props.loginState[type]
  }

  componentDidMount() {
    resetFooter();
  }

  render() {
    const { loginState } = this.props;

    return (
      <div className="home">
        <h3><FormattedMessage id='home.watch' /></h3>
        <div className={!this.list('watchlater') ? "my-list empty" : "my-list"}>
          {!this.list('watchlater') ? <FormattedMessage id='home.empty' /> :
          Object.keys(loginState.watchlater).map((key: any) => {
            return <div className="tile" key={key}>
              <Link to={"/main/details/" + key} onClick={e => this.props.setKeyDispatch(key)}>
                <img className="thumbnail" alt="Poster"
                  src={loginState.watchlater[key].poster === 'N/A' ?
                    this.state.dummyPoster : loginState.watchlater[key].poster} />
              </Link>
              <div className="details">
                <div className="title">{loginState.watchlater[key].engTitle}</div>
                <div className="director">
                  <span className="year">{loginState.watchlater[key].year}</span>
                  <br />{loginState.watchlater[key].director}
                </div>
              </div>
            </div>
          })}
        
        </div>
        <h3><FormattedMessage id='home.recomm' /></h3>
        <div className={!this.list('recomm') ? "my-list empty" : "my-list"}>
          {!this.list('recomm') ? <FormattedMessage id='home.empty' /> :
          Object.keys(loginState.recomm).map((key: any) => {
            return <div className="tile" key={key}>
              <Link to={"/main/details/" + key} onClick={e => this.props.setKeyDispatch(key)}>
                <img className="thumbnail" alt="Poster"
                  src={loginState.recomm[key].poster === 'N/A' ?
                    this.state.dummyPoster : loginState.recomm[key].poster} />
              </Link>
              <div className="details">
                <div className="title">{loginState.recomm[key].engTitle}</div>
                <div className="director">
                  <span className="year">{loginState.recomm[key].year}</span>
                  <br />{loginState.recomm[key].director}
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
  loginState: store.loginReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  // loadRecommDispatch: () => dispatch(loadRecommAct())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
