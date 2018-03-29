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
        <div className="edit-details">
          <form action="">
            
              <label>English Title</label><input type="text" placeholder="N/A" />
            
            
              <label>Original Title</label><input type="text" placeholder="N/A" />
            
            
              <label>Year</label><input type="text" width="4" className="year" placeholder="N/A" />
            
            
              <label>Director</label><input type="text" placeholder="N/A" />
            
            
              <label>Runtime</label><input type="text" className="runtime" placeholder="N/A" />
            
            
              <label>Poster</label><input type="text" placeholder="N/A" />
            
            
              <label className="textarea-lbl">Plot</label><textarea placeholder="N/A" />
            
            
              <label>IMDB ID</label><input type="text" className="imdb" placeholder="N/A" />
            
            
              <label>Rating</label><input type="text" className="rating" placeholder="N/A" />
            
            
              <label>Status</label><input type="text" className="rating" placeholder="N/A" />
            
            
              <label>Type</label><input type="text" placeholder="N/A" />
            
            {/* <div className="row">
              <label>English Title</label><input type="text" placeholder="N/A" />
            </div>
            <div className="row">
              <label>Original Title</label><input type="text" placeholder="N/A" />
            </div>
            <div className="row">
              <label>Year</label><input type="text" width="4" className="year" placeholder="N/A" />
            </div>
            <div className="row">
              <label>Director</label><input type="text" placeholder="N/A" />
            </div>
            <div className="row">
              <label>Runtime</label><input type="text" className="runtime" placeholder="N/A" />
            </div>
            <div className="row">
              <label>Poster</label><input type="text" placeholder="N/A" />
            </div>
            <div className="row">
              <label className="textarea-lbl">Plot</label><textarea placeholder="N/A" />
            </div>
            <div className="row">
              <label>IMDB ID</label><input type="text" className="imdb" placeholder="N/A" />
            </div>
            <div className="row">
              <label>Rating</label><input type="text" className="rating" placeholder="N/A" />
            </div>
            <div className="row">
              <label>Status</label><input type="text" className="rating" placeholder="N/A" />
            </div>
            <div className="row">
              <label>Type</label><input type="text" placeholder="N/A" />
            </div> */}
          </form>
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
