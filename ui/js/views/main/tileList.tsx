'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cats from '../../util/cats';
import { setKeyAct, syncCatAct, loadDataAct } from '../../actions/dataActions';
import { removeHomeListItemAct } from '../../actions/homeActions';
import Pages from '../components/pages';

interface IReduxProps extends React.Props<any> {
  dataState: any,
  setKeyDispatch: any,
  removeHomeListItemDispatch: any
}

interface ICompProps extends React.Props<any> {
  dataRef: any,
  delBtn: boolean,
  showPages: boolean,
  isSearch: boolean,
  category: string
}

class TileList extends React.Component<IReduxProps & ICompProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  delItem(e: any, key: string, list: string) {
    e.preventDefault();
    this.props.removeHomeListItemDispatch(key, list);
  }

  render() {
    const buffer = this.props.dataRef;
    const { dataState } = this.props;
    console.log(typeof buffer);


    return (
      <div className="tile-list">
        {Object.keys(buffer).map((key: any) => {
          return <div className="tile" key={buffer[key].id}>
            <Link to={(this.props.isSearch ? '/main/search_details/' : '/main/cat_details/') + buffer[key].id} onClick={e => this.props.setKeyDispatch(buffer[key].id)}>
              {this.props.delBtn && <div className="del-item" title="Remove from the list" onClick={e => this.delItem(e, buffer[key].id, 'recomm')}></div>}
              {buffer[key].poster && buffer[key].poster !== 'N/A' ?
                <img alt="Poster" src={buffer[key].poster} /> :
                <div className={'dummy-poster poster-' + buffer[key].category.toLowerCase()}></div>}
            </Link>
            <div className="info">
              <div className="title">{buffer[key].eng_title}</div>
              <div className="details">
                <span className="year">{buffer[key].year}</span><br />
                {buffer[key].director || buffer[key].creator || buffer[key].prod}
              </div>
            </div>
          </div>
        })}
        {this.props.showPages && buffer && buffer.length && <Pages />}
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  setKeyDispatch: (key: string) => {
    dispatch(setKeyAct(key))
  },
  removeHomeListItemDispatch: (key: string, list: string) => {
    dispatch(removeHomeListItemAct(key, list))
  }
});

export default connect<{}, {}, ICompProps>(mapStateToProps, mapDispatchToProps)(TileList);
