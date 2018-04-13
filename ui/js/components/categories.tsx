'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { cleanUrl } from '../util/utils';
import { switchCatAct } from '../actions/categoriesActions';
import vTypes from '../util/vTypes';

class Categories extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    cleanUrl();
  }

  componentDidMount() {
    // console.log(parseParam('p'));
  }

  render() {
    // const { dataState } = this.props.dataState;
    const currCat = this.props.dataState.category;

    return (
      <div className="categories">
        <ol>
          <li>
            <Link to="/main/movies" className={currCat === vTypes.MOVIE ? 'active' : ''} onClick={e => this.props.switchCatDispatch(vTypes.MOVIE)}>
              <FormattedMessage id='cats.movies' />
            </Link>
          </li>
          <li>
            <Link to="/main/tv" className={currCat === vTypes.TV ? 'active' : ''} onClick={e => this.props.switchCatDispatch(vTypes.TV)}>
              <FormattedMessage id='cats.tv' />
            </Link>
          </li>
          <li>
            <Link to="/main/docs" className={currCat === vTypes.DOC ? 'active' : ''} onClick={e => this.props.switchCatDispatch(vTypes.DOC)}>
              <FormattedMessage id='cats.docs' />
            </Link>
          </li>
          <li>
            <Link to="/main/anime" className={currCat === vTypes.ANIME ? 'active' : ''} onClick={e => this.props.switchCatDispatch(vTypes.ANIME)}>
              <FormattedMessage id='cats.anime' />
            </Link>
          </li>
          <li>
            <Link to="/main/xxx" className={currCat === vTypes.XXX ? 'active' : ''} onClick={e => this.props.switchCatDispatch(vTypes.XXX)}>
              <FormattedMessage id='cats.xxx' />
            </Link>
          </li>
          <li>
            <Link to="/main/jav" className={currCat === vTypes.JAV ? 'active' : ''} onClick={e => this.props.switchCatDispatch(vTypes.JAV)}>
              <FormattedMessage id='cats.jav' />
            </Link>
          </li>
        </ol>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  localeState: store.localeReducer,
  dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  switchCatDispatch: (cat: string) => {
    dispatch(switchCatAct(cat))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);