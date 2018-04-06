'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { editDetailsAct } from '../../actions/uiActions';
import { saveDetailsAct } from '../../actions/detailsActions';
import regex from '../../util/regex';
import { LocalForm, Field, Control } from 'react-redux-form';

class EditDetails extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  cancelEdit() {
    this.props.editDetailsDispath(false)
  }

  onChange(values: any) {
    for (let p in values) {
      if (!regex[p].test(values[p])) {
        this.setState({ [p]: true })
      } else {
        this.setState({ [p]: false })
      }
    }
  }

  onSubmit(values: any) {
    let formValid = true;
    
    for (let p in values) {
      if (!regex[p].test(values[p])) {
        formValid = false;
      }
    }
    
    if (formValid) {
      this.props.saveDetailsDispath(values);
    }
  }

  render() {
    const { dataState } = this.props;
    const key = this.props.dataState.key;

    return (
      <div className="popup-bg">
        <LocalForm onChange={(values) => this.onChange(values)} onSubmit={(values) => this.onSubmit(values)}>
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
                  <Control.text model=".runtime" placeholder="N/A" defaultValue={dataState.data[key].runtime} />
                  {this.state.runtime && <span>Format: 1h 30min</span>}
                </div>
                <div style={{ width: '49%' }}>
                  <label>Director(s)</label>
                  <Control.text model=".director" placeholder="N/A" defaultValue={dataState.data[key].director} />
                  {this.state.director && <span>Name(s) separated by comma</span>}
                </div>
              </div>
              <label>Poster</label>
              <Control.textarea className="poster" model=".poster" placeholder="N/A" defaultValue={dataState.data[key].poster} />
              {this.state.poster && <span>Must be a valid URL</span>}
              <label className="textarea-lbl">Plot</label>
              <Control.textarea className="plot" model=".plot" placeholder="N/A" defaultValue={dataState.data[key].plot} />
              {this.state.plot && <span>Contains invalid characters</span>}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '23%' }}>
                  <label>IMDB ID</label>
                  <Control.text model=".imdb_id" placeholder="N/A" defaultValue={dataState.data[key].imdb_id} />
                  {this.state.imdb_id && <span>Format: tt1234567</span>}
                </div>
                <div style={{ width: '23%' }}>
                  <label>Rating</label>
                  <Control.text model=".rating" placeholder="N/A" defaultValue={dataState.data[key].rating} />
                  {this.state.rating && <span>Format: 9.9</span>}
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
  },
  saveDetailsDispath: (values: any) => {
    dispatch(saveDetailsAct(values))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);
