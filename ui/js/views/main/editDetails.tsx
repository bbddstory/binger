'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { toggleEditDetailsAct } from '../../actions/uiActions';
import { saveDetailsAct } from '../../actions/detailsActions';
import cats from '../../util/cats';
// import regex from '../../util/regex';
import { LocalForm, Field, Control } from 'react-redux-form';

class EditDetails extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  onChange(values: any) {
    // for (let p in values) {
    //   if (!regex[p].test(values[p])) {
    //     this.setState({ [p]: true })
    //   } else {
    //     this.setState({ [p]: false })
    //   }
    // }
  }

  onSubmit(values: any) {
    console.log(values);

    let formValid = true;

    // for (let p in values) {
    //   values[p] = values[p].trim()
    // }

    // for (let p in values) {
    //   if (!regex[p].test(values[p])) {
    //     formValid = false;
    //   }
    // }

    if (formValid) {
      this.props.saveDetailsDispatch(values);
    }
  }

  render() {
    // Detect whether this is modifying an existing record or adding a new one
    let item;

    if (this.props.uiState.newRec) { // New record
      item = {}
    } else { // Existing record
      let key = this.props.dataState.key;
      
      if (this.props.uiState.isSearch) { // Edit records in search results
        item = this.props.dataState.search[key];
      } else { // Edit records in categories
        item = this.props.dataState.buffer[key];
      }
    }

    return (
      <div className="popup-bg">
        <LocalForm onChange={(values) => this.onChange(values)} onSubmit={(values) => this.onSubmit(values)}>
          <div className="popup-panel">
            <div className="panel-body">

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48.5%' }}>
                  <label>English Title</label>
                  <Control.text model=".engTitle" placeholder="N/A" defaultValue={item.engTitle} />
                  {this.state.engTitle && <span>Contains invalid characters</span>}
                </div>
                <div style={{ width: '49%' }}>
                  <label>Original Title</label>
                  <Control.text model=".origTitle" placeholder="N/A" defaultValue={item.origTitle} />
                  {this.state.origTitle && <span>Contains invalid characters</span>}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '22.9%' }}>
                  <label>Year</label>
                  <Control.text model=".year" placeholder="N/A" defaultValue={item.year} />
                  {this.state.year && <span>Must be 4 digits</span>}
                </div>
                <div style={{ width: '22.9%' }}>
                  <label>Runtime</label>
                  <Control.text model=".runtime" placeholder="N/A" defaultValue={item.runtime} />
                  {this.state.runtime && <span>Format: 1h 30min</span>}
                </div>
                <div style={{ width: '49%' }}>
                  <label>Stars</label>
                  <Control.text model=".stars" placeholder="N/A" defaultValue={item.stars} />
                  {this.state.director && <span>One or more names separated by comma</span>}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48.5%' }}>
                  <label>Director</label>
                  <Control.text model=".director" placeholder="N/A" defaultValue={item.director} />
                  {this.state.director && <span>One or more names separated by comma</span>}
                </div>
                <div style={{ width: '49%' }}>
                  <label>Creator</label>
                  <Control.text model=".creator" placeholder="N/A" defaultValue={item.creator} />
                  {this.state.director && <span>One or more names separated by comma</span>}
                </div>
              </div>

              <label className="textarea-lbl">Plot</label>
              <Control.textarea model=".plot" className="plot" placeholder="N/A" defaultValue={item.plot} />
              {this.state.plot && <span>Contains invalid characters</span>}

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '23%' }}>
                  <label>IMDB ID</label>
                  <Control.text model=".imdb_id" placeholder="N/A" defaultValue={item.imdb_id} />
                  {this.state.imdb_id && <span>Format: tt1234567</span>}
                </div>
                <div style={{ width: '23%' }}>
                  <label>Rating</label>
                  <Control.text model=".rating" placeholder="N/A" defaultValue={item.rating} />
                  {this.state.rating && <span>Format: 9.9</span>}
                </div>
                <div style={{ width: '23%' }}>
                  <label>Douban</label>
                  <Control.text model=".douban" placeholder="N/A" defaultValue={item.douban} />
                  {this.state.imdb_id && <span>Format: tt1234567</span>}
                </div>
                <div style={{ width: '23%' }}>
                  <label>Mtime</label>
                  <Control.text model=".mtime" placeholder="N/A" defaultValue={item.mtime} />
                  {this.state.rating && <span>Format: 9.9</span>}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '23%' }}>
                  <label>Trailer</label>
                  <Control.text model=".trailer" placeholder="N/A" defaultValue={item.trailer} />
                  {this.state.imdb_id && <span>Format: tt1234567</span>}
                </div>
                <div style={{ width: '23%' }}>
                  <label>Featurette</label>
                  <Control.text model=".featurette" placeholder="N/A" defaultValue={item.featurette} />
                  {this.state.rating && <span>Format: 9.9</span>}
                </div>
                <div style={{ width: '23%' }}>
                  <label>Status</label>
                  <Control.select model=".status" defaultValue={item.status}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </Control.select>
                </div>
                <div style={{ width: '23%' }}>
                  <label>Category</label>
                  <Control.select ref="catSel" model=".cat" defaultValue={item.cat} disabled={!this.props.uiState.newRec}>
                    <option value={cats.MOVIE}>Movie</option>
                    <option value={cats.TV}>TV</option>
                    <option value={cats.DOC}>Documentary</option>
                    <option value={cats.ANIME}>Animation</option>
                  </Control.select>
                </div>
              </div>

              <label>Poster</label>
              <Control.textarea model=".poster" className="poster" placeholder="N/A" defaultValue={item.poster} />
              {this.state.poster && <span>Must be a valid URL</span>}

              <label>Subtitle</label>
              <Control.text model=".subtitle" placeholder="N/A" defaultValue={item.subtitle} />
              {this.state.subtitle && <span>Must be a valid URL</span>}

            </div>
            <div className="panel-footer">
              <button className="btn-cancel" onClick={e => this.props.editDetailsDispatch(false, false)}>Cancel</button>
              <button className="btn-main" type="submit">Save</button>
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
  editDetailsDispatch: (status: boolean, newRec: boolean) => {
    dispatch(toggleEditDetailsAct(status, newRec))
  },
  saveDetailsDispatch: (values: any) => {
    dispatch(saveDetailsAct(values))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);
