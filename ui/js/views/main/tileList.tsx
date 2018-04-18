'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetPages } from '../../util/utils';
import cats from '../../util/cats';
import { setKeyAct, syncCatAct, loadDataAct } from '../../actions/dataActions';
import Pages from '../components/pages';

interface IReduxProps extends React.Props<any> {
  dataState: any,
  setKeyDispatch: any
}

interface ICompProps extends React.Props<any> {
  dataRef: any,
  showPages: boolean,
  category: string
}

class TileList extends React.Component<IReduxProps & ICompProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.showPages) {
      window.addEventListener('scroll', resetPages, true);
      window.addEventListener('resize', resetPages, true);
    }
  }

  componentWillUnmount() {
    if (this.props.showPages) {
      window.removeEventListener('scroll', resetPages, true);
      window.removeEventListener('resize', resetPages, true);
    }
  }

  render() {
    const buffer = this.props.dataRef;
    const { dataState } = this.props;

    console.log(buffer);

    return (
      <div>
        {/* buffer && Object.keys(buffer).length &&  */}
        {Object.keys(buffer).map((key: any) => {
          return <div className="tile" key={key}>
            <Link to={"/main/details/" + key} onClick={e => this.props.setKeyDispatch(key)}>
              {buffer[key].poster && buffer[key].poster !== 'N/A' ?
                <img className="thumbnail" alt="Poster" src={buffer[key].poster} /> :
                <div className={'dummy-poster-' + dataState.category.toLowerCase()}></div>}
            </Link>
            <div className="details">
              <div className="title">{buffer[key].engTitle}</div>
              <div className="details-btm">
                <span className="year">{buffer[key].year}</span><br />
                {buffer[key].director || buffer[key].creator || buffer[key].prod}
              </div>
            </div>
          </div>
        })}
        {this.props.showPages && buffer && Object.keys(buffer).length && <Pages />}
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
  }
});

export default connect<{}, {}, ICompProps>(mapStateToProps, mapDispatchToProps)(TileList);
