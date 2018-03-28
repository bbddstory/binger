'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { cleanUrl } from '../../util/utils';
// import { loginAct } from '../../actions/loginActions';

class Details extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { dummyPoster: 'ui/images/movie/poster.png' }
  }

  componentWillMount() {
    cleanUrl();
    let hash = location.hash;
    hash = hash.substring(hash.lastIndexOf('/') + 1);
    this.setState({ key: hash });
  }

  render() {
    const { dataState } = this.props;

    return (
      <div id="details">
        <div className="details-box">
          <div className="poster">
            <img className="thumbnail" alt="Poster" width="182px"
              src={dataState.data[this.state.key].poster === 'N/A' ?
                this.state.dummyPoster : dataState.data[this.state.key].poster} />
          </div>

          <div className="details">
            <span className="title">{dataState.data[this.state.key].engTitle}</span>
            <span className="orig-title">
              {dataState.data[this.state.key].engTitle === dataState.data[this.state.key].origTitle ?
                '' : dataState.data[this.state.key].origTitle + ' (original title)'}
            </span>
            <span className="entries">
              {dataState.data[this.state.key].year}<br />
              {dataState.data[this.state.key].director}<br />
              {dataState.data[this.state.key].runtime}<br />
            </span>
            <div className="imdb">
              <a target="_blank" href={'http://www.imdb.com/title/' + dataState.data[this.state.key].imdb_id}>
                <img src="ui/images/details/imdb.png" alt="IMDB" width="68px" />
              </a>
              <span className="rating">{dataState.data[this.state.key].rating}</span>
              <span className="out-of">/10</span>
            </div>
          </div>

          <div className="plot">
            {dataState.data[this.state.key].plot}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  // loginDispath: (email: string, pwd: string) => {
  //   dispatch(loginAct(email, pwd))
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
