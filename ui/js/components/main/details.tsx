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
      dummyPoster: 'ui/images/movie/poster.png',
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
    const { opts, recomm } = this.state;

    if (Object.keys(dataState.data).length) {
      return (
        <div>
          <div className="video-details">
            <div className="poster" onMouseEnter={e => this.toggleOpts()} onMouseLeave={e => this.toggleOpts()}>
              <img alt="Poster" width="182px"
                src={dataState.data[key].poster && dataState.data[key].poster !== 'N/A' ?
                  dataState.data[key].poster : this.state.dummyPoster} />
              {/* {opts && <div className="watch-later" title="Watch later" onClick={e => this.props.watchLaterDispatch()}></div>}
              {opts && <div className="recomm" title="Recommend to a friend" onClick={e => this.toggleRecomm()}></div>}
              {recomm && <ul>
                {Object.keys(loginState.friends).map((user: string) => {
                  return <li key={user} onClick={e => this.props.recommDispatch(user)}>{loginState.friends[user]}</li>
                })}
              </ul>}
              {opts && <div className="edit" title="Edit details" onClick={e => this.props.editDetailsDispatch(true)}></div>} */}
            </div>

            <div className="entries">
              <span className="title">{dataState.data[key].engTitle}</span>
              <span className="orig-title">
                {dataState.data[key].origTitle === 'N/A' || dataState.data[key].engTitle === dataState.data[key].origTitle ?
                  '' : dataState.data[key].origTitle + ' (original title)'}
              </span>
              <span className="misc">
                Year: {dataState.data[key].year}<br />
                Runtime: {dataState.data[key].runtime} (each episode)<br />
                Creator: {dataState.data[key].creator}<br />
                Stars: {dataState.data[key].stars}
              </span>
              <div className="actions" title="Show this movie on IMDB">
                <div className="watch-later" title="Watch later" onClick={e => this.props.watchLaterDispatch()}></div>
                <div className="recomm" title="Recommend to a friend" onClick={e => this.toggleRecomm()}></div>
                <div className="edit" title="Edit details" onClick={e => this.props.editDetailsDispatch(true)}></div>
                <a className="closed-caption" target="_blank" href={'https://subscene.com/subtitles/title?q=/' + dataState.data[key].engTitle}></a>
                {/* <a title="IMDB" target="_blank" href={'http://www.imdb.com/title/' + dataState.data[key].imdb_id}></a>
                <span className="rating">{dataState.data[key].rating}</span>
                <span className="out-of">/10</span> */}
              </div>
            </div>

            <div className="plot">
              <div className="plot-txt">{dataState.data[key].plot}</div>
              <div className="sites">
                <a className="imdb" target="_blank" href={'http://www.imdb.com/title/' + dataState.data[key].imdb_id}></a>
              </div>
            </div>

            {uiState.editDetails && <EditDetails />}
          </div>

          <h1>Trailer and featurette</h1>
          <div className="trailer">
            <iframe width="440" height="247.5" src={dataState.data[key].trailer} frameBorder="0" allowFullScreen></iframe>
            <iframe width="440" height="247.5" src={dataState.data[key].featurette} frameBorder="0" allowFullScreen></iframe>
          </div>
          <a className="more-vid" target="_blank" href={'https://www.youtube.com/results?search_query=' + dataState.data[key].engTitle}>
            <img src="ui/images/details/youtube.png" alt="YouTube" /> More videos on YouTube
          </a>

          <h1>Comments</h1>
          <div className="comments">
            <span>No comments</span>
          </div>
        </div>
      )
    } else {
      return null
    }
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