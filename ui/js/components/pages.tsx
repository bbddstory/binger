'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { goToPage } from '../actions/dataActions';
import { anime_data, doc_data, movie_data, tv_data } from './main/data';

class Pages extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { movies: {}, dummyPoster: 'ui/images/movie/poster.png' };
    }

    goToPage(page: string) {
        let currPage, itemStartIdx, itemEndIdx;
        switch (page) {
            case 'FIRST':
                currPage = 1;
                itemStartIdx = 0;
                itemEndIdx = this.props.dataState.itemPerPage - 1;
                break;
            case 'LAST':
                currPage = this.props.dataState.totalPage;
                itemStartIdx = this.props.dataState.itemPerPage * (this.props.dataState.totalPage - 1);
                itemEndIdx = this.props.dataState.itemCnt - 1;
                break;
            case 'PREV':
                if (this.props.dataState.currPage > 1) {
                    currPage = this.props.dataState.currPage - 1;
                    itemStartIdx = this.props.dataState.itemStartIdx - this.props.dataState.itemPerPage;
                    itemEndIdx = itemStartIdx + this.props.dataState.itemPerPage - 1;
                } else {
                    return
                }
                break;
            case 'NEXT':
                if (this.props.dataState.currPage < this.props.dataState.totalPage) {
                    currPage = this.props.dataState.currPage + 1;
                    itemStartIdx = this.props.dataState.itemStartIdx + this.props.dataState.itemPerPage;
                    itemEndIdx = this.props.dataState.itemEndIdx + this.props.dataState.itemPerPage;
                    if (itemEndIdx > (this.props.dataState.itemCnt - 1)) {
                        itemEndIdx = this.props.dataState.itemCnt - 1
                    }
                } else {
                    return
                }
                break;
        }

        let i = 0, data: any = {};
        for (let p in movie_data) {
            if (i >= itemStartIdx && i <= itemEndIdx) {
                data[p] = movie_data[p];
            }
            i++;
        }

        this.props.goToPage(data, currPage, itemStartIdx, itemEndIdx);
    }

    render() {
        return (
            <div className="pages">
                <button className="first" onClick={e => this.goToPage('FIRST')}>First</button>
                <button onClick={e => this.goToPage('PREV')}>Prev</button>
                <div>{this.props.dataState.currPage} / {this.props.dataState.totalPage}</div>
                <button onClick={e => this.goToPage('NEXT')}>Next</button>
                <button className="last" onClick={e => this.goToPage('LAST')}>Last</button>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    dataState: state.dataReducer,
    pagesState: state.pagesReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    goToPage: (data: any, currPage: number, itemStartIdx: number, itemEndIdx: number) => {
        dispatch(goToPage(data, currPage, itemStartIdx, itemEndIdx))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
