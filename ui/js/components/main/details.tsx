'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { loginAct } from '../../actions/loginActions';

class Details extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { dummyPoster: 'ui/images/movie/poster.png' }
  }

  componentWillMount() {
    let url = window.location.hash,
      lastChar = url.substring(url.length - 1);

    if (lastChar === '/') {
      url = url.substring(0, url.length - 1);
    }
    url = url.substring(url.lastIndexOf('/') + 1);
    this.setState({ key: url });
  }

  render() {
    return (
      <div id="details">
        <div className="details-box">
          <div className="poster">
            <img className="thumbnail" alt="Poster" width="182px"
              src={this.props.dataState.data[this.state.key].poster === 'N/A' ?
                this.state.dummyPoster : this.props.dataState.data[this.state.key].poster} />
          </div>

          <div className="details">
            {/* {this.props.dataState.data[this.state.key].type} */}
            <span className="title">{this.props.dataState.data[this.state.key].engTitle}</span>
            <br />
            <span>
              {this.props.dataState.data[this.state.key].engTitle === this.props.dataState.data[this.state.key].origTitle ?
                '' : this.props.dataState.data[this.state.key].origTitle}
            </span>
            <br />
            <span className="entries">
              {this.props.dataState.data[this.state.key].year}<br />
              {this.props.dataState.data[this.state.key].director}<br />
              {this.props.dataState.data[this.state.key].runtime}<br />
            </span>
            <div className="imdb">
              <div>
                <span className="rating">{this.props.dataState.data[this.state.key].rating}</span>&nbsp;/10
              </div>
              <a target="_blank" href={'http://www.imdb.com/title/' + this.props.dataState.data[this.state.key].imdb_id}>
                <img src="ui/images/details/imdb_horizontal.png" alt="IMDB" width="68px" />
              </a>
            </div>
          </div>

          <div className="plot">
            {this.props.dataState.data[this.state.key].plot}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  dataState: state.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispath: (email: string, pwd: string) => {
    dispatch(loginAct(email, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
