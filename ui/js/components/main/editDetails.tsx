'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";

class EditDetails extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const { dataState } = this.props;
    {/* {dataState.key} */ }

    return (
      <div className="popup-bg">
        <div className="popup-panel">
          <div className="panel-body">
            <form action="">
              <label>English Title</label><input type="text" placeholder="N/A" />
              <label>Original Title</label><input type="text" placeholder="N/A" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '23%' }}>
                  <label>Year</label><input type="text" width="4" className="year" placeholder="N/A" />
                </div>
                <div style={{ width: '23%' }}>
                  <label>Runtime</label><input type="text" className="runtime" placeholder="N/A" />
                </div>
                <div style={{ width: '49%' }}>
                  <label>Director</label><input type="text" placeholder="N/A" />
                </div>
              </div>
              <label>Poster</label><input type="text" placeholder="N/A" />
              <label className="textarea-lbl">Plot</label><textarea placeholder="N/A" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '23%' }}>
                  <label>IMDB ID</label><input type="text" className="imdb" placeholder="N/A" />
                </div>
                <div style={{ width: '23%' }}>
                  <label>Rating</label><input type="text" className="rating" placeholder="N/A" />
                </div>
                <div style={{ width: '23%' }}>
                  <label>Status</label><input type="text" className="rating" placeholder="N/A" />
                </div>
                <div style={{ width: '23%' }}>
                  <label>Type</label><input type="text" placeholder="N/A" />
                </div>
              </div>
            </form>
          </div>
          <div className="panel-footer">
            <button>Cancel</button>
            <button>OK</button>
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
  // setKeyDispath: (key: string) => {
  //   dispatch(setKeyAct(key))
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);
