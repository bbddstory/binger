'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { cleanUrl } from '../util/utils';
import { setCategoryAct } from '../actions/categoriesActions';
import vTypes from '../util/vTypes';

class Categories extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  setCat(cat: string) {
    // return cat === parseHash() ? 'active' : ''
    // this.setState({ currCat: cat})
    this.props.setCatDispatch(cat)
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
            <Link to="/main/movies" className={currCat === vTypes.MOVIE ? 'active' : ''} onClick={e => this.setCat(vTypes.MOVIE)}>
              <FormattedMessage id='cats.movies' />
            </Link>
          </li>
          <li>
            <Link to="/main/tv" className={currCat === vTypes.TV ? 'active' : ''} onClick={e => this.props.setCatDispatch(vTypes.TV)}>
              <FormattedMessage id='cats.tv' />
            </Link>
          </li>
          <li>
            <Link to="/main/docs" className={currCat === vTypes.DOC ? 'active' : ''} onClick={e => this.props.setCatDispatch(vTypes.DOC)}>
              <FormattedMessage id='cats.docs' />
            </Link>
          </li>
          <li>
            <Link to="/main/anime" className={currCat === vTypes.ANIME ? 'active' : ''} onClick={e => this.props.setCatDispatch(vTypes.ANIME)}>
              <FormattedMessage id='cats.anime' />
            </Link>
          </li>
          <li>
            <Link to="/main/xxx" className={currCat === vTypes.XXX ? 'active' : ''} onClick={e => this.props.setCatDispatch(vTypes.XXX)}>
              <FormattedMessage id='cats.xxx' />
            </Link>
          </li>
          <li>
            <Link to="/main/jav" className={currCat === vTypes.JAV ? 'active' : ''} onClick={e => this.props.setCatDispatch(vTypes.JAV)}>
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
  setCatDispatch: (cat: string) => {
    dispatch(setCategoryAct(cat))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);