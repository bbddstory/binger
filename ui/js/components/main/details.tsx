'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { cleanUrl } from '../../util/utils';
import { setKeyAct } from '../../actions/dataActions';
import { toggleEditDetailsAct } from '../../actions/uiActions';
import { watchLaterAct, recommAct } from '../../actions/detailsActions';
import EditDetails from '../../components/main/editDetails';

class Details extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dummyPoster: 'images/movie/poster.png',
      opts: false,
      recomm: false
    }
  }

  toggleOpts() {
    this.setState({ opts: !this.state.opts, recomm: false })
    // this.setState({ opts: true, recomm: true })
  }

  toggleRecomm() {
    this.setState({ recomm: !this.state.recomm });
  }

  componentWillMount() {
    cleanUrl();
  }

  render() {
    const { loginState, dataState, uiState } = this.props;
    const key = this.props.dataState.key;
    const { dummyPoster, opts, recomm } = this.state;

    return (
      <div className="video-details">
        <div className="poster" onMouseEnter={e => this.toggleOpts()} onMouseLeave={e => this.toggleOpts()}>
          <img alt="Poster" width="182px"
            src={dataState.data[key].poster === 'N/A' ?
              dummyPoster : dataState.data[key].poster} />
          {opts && <div className="watch-later" title="Watch later" onClick={e => this.props.watchLaterDispatch()}></div>}
          {opts && <div className="recomm" title="Recommend to a friend" onClick={e => this.toggleRecomm()}></div>}
          {recomm && <ul>
            {Object.keys(loginState.friends).map((user: string) => {
              return <li key={user} onClick={e => this.props.recommDispatch(user)}>{loginState.friends[user]}</li>
            })}
          </ul>}
          {opts && <div className="edit" title="Edit details" onClick={e => this.props.editDetailsDispatch(true)}></div>}
        </div>

        <div className="entries">
          <span className="title">{dataState.data[key].engTitle}</span>
          <span className="orig-title">
            {dataState.data[key].engTitle === dataState.data[key].origTitle ?
              '' : dataState.data[key].origTitle + ' (original title)'}
          </span>
          <span className="misc">
            {dataState.data[key].year}<br />
            {dataState.data[key].runtime}<br />
            {dataState.data[key].director}<br />
          </span>
          <div className="imdb" title="Show this movie on IMDB">
            <a target="_blank" href={'http://www.imdb.com/title/' + dataState.data[key].imdb_id}>
              <img src="images/details/imdb.svg" alt="IMDB" width="68px" />
            </a>
            <span className="rating">{dataState.data[key].rating}</span>
            <span className="out-of">/10</span>
          </div>
        </div>

        <div className="plot">
          {dataState.data[key].plot}
        </div>

        {uiState.editDetails && <EditDetails />}
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  loginState: store.loginReducer,
  dataState: store.dataReducer,
  uiState: store.uiReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  watchLaterDispatch: () => dispatch(watchLaterAct()),
  recommDispatch: (user: string) => dispatch(recommAct(user)),
  editDetailsDispatch: (status: boolean) => dispatch(toggleEditDetailsAct(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);