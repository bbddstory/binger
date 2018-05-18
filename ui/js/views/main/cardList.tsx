'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cats from '../../util/cats';
import { setKeyAct, syncCatAct } from '../../actions/dataActions';
import { loadDetailsAct } from '../../actions/detailsActions';
import Pages from '../components/pages';

interface IReduxProps extends React.Props<any> {
  dataState: any,
  setKeyDispatch: any,
  loadDetailsDispatch: any
}

interface ICompProps extends React.Props<any> {
  dataRef: any,
  showPages: boolean,
  category: string
}

class CardList extends React.Component<IReduxProps & ICompProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  loadDetails(key: string) {
    this.props.setKeyDispatch(key);
    this.props.loadDetailsDispatch();
  }

  render() {
    const buffer = this.props.dataRef;
    const { dataState } = this.props;

    return (
      <div className="card-list">
        {Object.keys(buffer).map((key: any) => {
          return <div className="card" key={key}>
            <Link to={'/main/details'} onClick={e => this.loadDetails(key)}>
              {buffer[key].poster && buffer[key].poster !== 'N/A' ?
                <img alt="Poster" src={buffer[key].poster} /> :
                <img alt="Poster" src={"ui/images/posters/" + buffer[key].category + ".png"} />
              }
            </Link>
            <h2 className="title">{buffer[key].eng_title}</h2>
            <h4 className="year">{buffer[key].year}</h4>
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
  loadDetailsDispatch: () => {
    dispatch(loadDetailsAct())
  },
  setKeyDispatch: (key: string) => {
    dispatch(setKeyAct(key))
  }
});

export default connect<{}, {}, ICompProps>(mapStateToProps, mapDispatchToProps)(CardList);
