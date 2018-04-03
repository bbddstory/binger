'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { editDetailsAct } from '../../actions/uiActions';
// import { Form, Text } from 'react-form';

class EditDetails extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  onChange() {

  }

  cancelEdit() {
    this.props.editDetailsDispath(false)
  }

  onSubmit(e: any) {
    console.log(e);
    
  }

  render() {
    const { dataState } = this.props;
    const key = this.props.dataState.key;

    return (
      <div className="popup-bg">
            <form onSubmit={e => this.onSubmit(e)}>
        <div className="popup-panel">
          <div className="panel-body">

{/* <Form> */}
  {/* {formApi => ( */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48.5%' }}>
                  <label>English Title</label>
                  <input type="text" placeholder="N/A" value={dataState.data[key].engTitle} onChange={e => this.onChange()} />
                </div>
                <div style={{ width: '49%' }}>
                  <label>Original Title</label>
                  <input type="text" placeholder="N/A" value={dataState.data[key].origTitle} onChange={e => this.onChange()} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '22.9%' }}>
                  <label>Year</label>
                  <input type="text" width="4" className="year" placeholder="N/A" value={dataState.data[key].year} onChange={e => this.onChange()} />
                </div>
                <div style={{ width: '22.9%' }}>
                  <label>Runtime</label>
                  <input type="text" className="runtime" placeholder="N/A" value={dataState.data[key].runtime} onChange={e => this.onChange()} />
                </div>
                <div style={{ width: '49%' }}>
                  <label>Director(s)</label>
                  <input type="text" placeholder="N/A" value={dataState.data[key].director} onChange={e => this.onChange()} />
                </div>
              </div>
              <label>Poster</label>
              <textarea className="poster" placeholder="N/A" defaultValue={dataState.data[key].poster} onChange={e => this.onChange()} />
              <label className="textarea-lbl">Plot</label>
              <textarea className="plot" placeholder="N/A" defaultValue={dataState.data[key].plot} onChange={e => this.onChange()} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '23%' }}>
                  <label>IMDB ID</label>
                  <input type="text" placeholder="N/A" value={dataState.data[key].imdb_id} onChange={e => this.onChange()} />
                </div>
                <div style={{ width: '23%' }}>
                  <label>Rating</label>
                  <input type="text" placeholder="N/A" value={dataState.data[key].rating} onChange={e => this.onChange()} />
                </div>
                <div style={{ width: '23%' }}>
                  <label>Status</label>
                  <select value={dataState.data[key].status} onChange={e => this.onChange()}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div style={{ width: '23%' }}>
                  <label>Type</label>
                  {/* <input type="text" placeholder="N/A" value={dataState.data[key].type} /> */}
                  <select value={dataState.data[key].status} onChange={e => this.onChange()}>
                    <option value="1">Movie</option>
                    <option value="2">TV</option>
                    <option value="3">Documentary</option>
                    <option value="4">Animation</option>
                    <option value="5">XXX</option>
                    <option value="5">JAV</option>
                  </select>
                </div>
              </div>
{/* )} */}
{/* </Form> */}

          </div>
          <div className="panel-footer">
            <button onClick={e => this.cancelEdit()}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </div>
            </form>
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
