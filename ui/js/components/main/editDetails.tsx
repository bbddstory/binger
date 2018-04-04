'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { editDetailsAct } from '../../actions/uiActions';
import { regex } from '../../util/regex';
import { LocalForm, Field, Control } from 'react-redux-form';

class EditDetails extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  cancelEdit() {
    this.props.editDetailsDispath(false)
  }

  // handleUpdate(form: any) {
  //   console.log(form);
  // }
  
  handleChange(values: any) {
    for (let p in values) {
      if (!regex[p].test(values[p])) {
        this.setState({ [p]: true })
      } else {
        this.setState({ [p]: false })
      }
    }
  }

  handleSubmit(values: any) {
    console.log(values);
  }

  render() {
    const { dataState } = this.props;
    const key = this.props.dataState.key;

    return (
      <div className="popup-bg">
        <LocalForm
          // onUpdate={(form) => this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <div className="popup-panel">
            <div className="panel-body">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48.5%' }}>
                  <label>English Title</label>
                  <Control.text model=".engTitle" placeholder="N/A" defaultValue={dataState.data[key].engTitle} />
                  {this.state.engTitle && <span>Contains invalid characters</span>}
                </div>
                <div style={{ width: '49%' }}>
                  <label>Original Title</label>
                  <Control.text model=".origTitle" placeholder="N/A" defaultValue={dataState.data[key].origTitle} />
                  {this.state.origTitle && <span>Contains invalid characters</span>}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '22.9%' }}>
                  <label>Year</label>
                  <Control.text model=".year" placeholder="N/A" defaultValue={dataState.data[key].year} />
                  {this.state.year && <span>Must be 4 digits</span>}
                </div>
                <div style={{ width: '22.9%' }}>
                  <label>Runtime</label>
                  <input type="text" className="runtime" placeholder="N/A" defaultValue={dataState.data[key].runtime} />
                </div>
                <div style={{ width: '49%' }}>
                  <label>Director(s)</label>
                  <input type="text" placeholder="N/A" defaultValue={dataState.data[key].director} />
                </div>
              </div>
              <label>Poster</label>
              <textarea className="poster" placeholder="N/A" defaultValue={dataState.data[key].poster} />
              <label className="textarea-lbl">Plot</label>
              <textarea className="plot" placeholder="N/A" defaultValue={dataState.data[key].plot} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '23%' }}>
                  <label>IMDB ID</label>
                  <input type="text" placeholder="N/A" defaultValue={dataState.data[key].imdb_id} />
                </div>
                <div style={{ width: '23%' }}>
                  <label>Rating</label>
                  <input type="text" placeholder="N/A" defaultValue={dataState.data[key].rating} />
                </div>
                <div style={{ width: '23%' }}>
                  <label>Status</label>
                  <select defaultValue={dataState.data[key].status}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div style={{ width: '23%' }}>
                  <label>Type</label>
                  <select defaultValue={dataState.data[key].type}>
                    <option value="1">Movie</option>
                    <option value="2">TV</option>
                    <option value="3">Documentary</option>
                    <option value="4">Animation</option>
                    <option value="5">XXX</option>
                    <option value="6">JAV</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <button onClick={e => this.cancelEdit()}>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </div>
        </LocalForm>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  dataState: store.dataReducer,
  uiState: store.uiReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  editDetailsDispath: (status: boolean) => {
    dispatch(editDetailsAct(status))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);
