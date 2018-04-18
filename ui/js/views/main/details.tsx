'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { setKeyAct } from '../../actions/dataActions';
import { toggleEditDetailsAct } from '../../actions/uiActions';
import { watchLaterAct, recommAct, commentAct, delCommentAct } from '../../actions/detailsActions';
import EditDetails from './editDetails';

class Details extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dummyPoster: 'images/movie/poster.png',
      opts: false,
      recomm: false,
      title: '',
      comment: '',
      showComment: false
    }
  }

  toggleRecomm() {
    this.setState({ recomm: !this.state.recomm });
  }

  commentFocus() {
    this.setState({ showComment: true });
  }

  cancelComment() {
    this.setState({ title: '', comment: '', showComment: false });
  }

  titleChange(e: any) {
    this.setState({ title: e.target.value });
  }

  commentChange(e: any) {
    this.setState({ comment: e.target.value });
  }

  submitComment() {
    if (this.state.title && this.state.comment) {
      let t = new Date();
      this.props.commentDispatch({
        [t.getTime()]: {
          time: t.getFullYear() + '.' + (t.getMonth() + 1) + '.' + t.getDate(),
          title: this.state.title,
          txt: this.state.comment,
          user: this.props.loginState.user
        }
      });
      this.cancelComment();
    }
  }

  render() {
    const { loginState, dataState, uiState } = this.props;
    const key = this.props.dataState.key;
    const { opts, recomm, showComment } = this.state;

    if (Object.keys(dataState.buffer).length) {
      return (
        <div>
          <div className="video-details">
            <div className="poster">
              {dataState.buffer[key].poster && dataState.buffer[key].poster !== 'N/A' ?
              <img alt="Poster" width="182px" src={dataState.buffer[key].poster} /> :
              <div className={'dummy-poster-' + dataState.category.toLowerCase()}></div>}
            </div>

            <div className="entries">
              <span className="title">{dataState.buffer[key].engTitle}</span>
              <span className="orig-title">
                {dataState.buffer[key].origTitle === 'N/A' || dataState.buffer[key].engTitle === dataState.buffer[key].origTitle ?
                  '' : dataState.buffer[key].origTitle + ' (original title)'}
              </span>
              <span className="misc">
                Year: {dataState.buffer[key].year}<br />
                Runtime: {dataState.buffer[key].runtime}<br />
                {dataState.buffer[key].director ? 'Director: ' + dataState.buffer[key].director : 'Creator: ' + dataState.buffer[key].creator}<br />
                Stars: {dataState.buffer[key].stars}
              </span>
              <div className="actions">
                <div className="watch-later" title="Watch later" onClick={e => this.props.watchLaterDispatch()}></div>
                <div className="recomm" title="Recommend to friends" onClick={e => this.toggleRecomm()}></div>
                <div className="edit" title="Edit details" onClick={e => this.props.editDetailsDispatch(true)}></div>
                <a target="_blank" href={'https://subscene.com/subtitles/title?q=' + dataState.buffer[key].engTitle}></a>
                {recomm && <ul>
                  {Object.keys(loginState.friends).map((user: string) => {
                    return <li key={user} onClick={e => this.props.recommDispatch(user)}>{loginState.friends[user]}</li>
                  })}
                </ul>}
              </div>
            </div>

            <div className="plot">
              <div className="plot-txt">{dataState.buffer[key].plot}</div>
              <div className="sites">
                <a className="imdb" target="_blank" href={'http://www.imdb.com/title/' + dataState.buffer[key].imdb_id}></a>
                <a className="douban" target="_blank" href={dataState.buffer[key].douban}></a>
                <a className="mtime" target="_blank" href={dataState.buffer[key].mtime}></a>
              </div>
            </div>
          </div>

          <h1>Trailer and featurette</h1>
          <div className="trailer">
            <iframe width="440" height="247.5" src={dataState.buffer[key].trailer} frameBorder="0" allowFullScreen></iframe>
            <iframe width="440" height="247.5" src={dataState.buffer[key].featurette} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="youtube">
            <a target="_blank" href={'https://www.youtube.com/results?search_query=' + dataState.buffer[key].engTitle}>More videos on YouTube</a>
          </div>

          <h1>Comments</h1>

          <div className="add-comment">
            <input className={showComment ? "comment-title" : "comment-title-lt"} type="text" placeholder={showComment ? "Title" : "Add a public comment..."} value={this.state.title} onChange={e => this.titleChange(e)} onFocus={e => this.commentFocus()} />
            {showComment && <textarea placeholder="Add a public comment..." value={this.state.comment} onChange={e => this.commentChange(e)}></textarea>}
            {showComment && <div>
              <button className="btn-cancel" onClick={e => this.cancelComment()}>Cancel</button>
              <button className="btn-main" type="submit" onClick={e => this.submitComment()}>Comment</button>
            </div>}
          </div>

          {dataState.buffer[key].comments && Object.keys(dataState.buffer[key].comments).map((id: any) => {
            return <div className="comment" key={id}>
              <div className="title-row">
                {dataState.buffer[key].comments[id].user === loginState.user && <div className="del-comment" onClick={e => this.props.delCommentDispatch(id)}></div>}
                <div>
                  <h2>{dataState.buffer[key].comments[id].title}</h2>
                  <h4>{dataState.buffer[key].comments[id].time} by {dataState.buffer[key].comments[id].user}</h4>
                </div>
              </div>
              <span>{dataState.buffer[key].comments[id].txt}</span>
            </div>
          })}

          {uiState.editDetails && <EditDetails />}
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
  commentDispatch: (values: any) => dispatch(commentAct(values)),
  delCommentDispatch: (id: string) => dispatch(delCommentAct(id)),
  editDetailsDispatch: (status: boolean) => dispatch(toggleEditDetailsAct(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);