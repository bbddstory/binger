'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { cleanUrl } from '../../util/utils';
import { setKeyAct } from '../../actions/dataActions';
import { editDetailsAct } from '../../actions/uiActions';
import EditDetails from '../../components/main/editDetails';

class Details extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { dummyPoster: 'ui/images/movie/poster.png', opts: false }
  }

  toggleOpts = () => {
    this.setState({ opts: !this.state.opts })
  }

  componentWillMount() {
    cleanUrl();
  }

  render() {
    const { dataState, uiState } = this.props;
    const key = this.props.dataState.key;
    const { opts, edit } = this.state;

    return (
      <div className="details">
        <div className="poster" onMouseEnter={e => this.toggleOpts() } onMouseLeave={e => this.toggleOpts() }>
          <img alt="Poster" width="182px"
            src={dataState.data[key].poster === 'N/A' ?
              this.state.dummyPoster : dataState.data[key].poster} />
          {opts && <div className="watch-later" title="Watch later"></div>}
          {opts && <div className="recomm" title="Recommend to a friend"></div>}
          {opts && <div className="edit" title="Edit details" onClick={e => this.props.editDetailsDispath(true)}></div>}
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
              <img src="ui/images/details/imdb.png" alt="IMDB" width="68px" />
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
  dataState: store.dataReducer,
  uiState: store.uiReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  setKeyDispath: (key: string) => dispatch(setKeyAct(key)),
  editDetailsDispath: (status: boolean) => dispatch(editDetailsAct(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);