'use strict';

import * as jq from 'jquery';
import * as React from 'react';
import { connect } from 'react-redux';
import { loadDataAct } from '../../actions/dataActions';

class Pages extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    gotoPage(page: string) {
        let currPage, startAt, endAt;

        switch (page) {
            case 'FIRST':
                if (this.props.dataState.currPage > 1) {
                    currPage = 1;
                    startAt = 0;
                    endAt = this.props.dataState.ipp - 1;
                } else {
                    return
                }
                break;
            case 'LAST':
                if (this.props.dataState.currPage < this.props.dataState.pageCnt) {
                    currPage = this.props.dataState.pageCnt;
                    startAt = this.props.dataState.ipp * (this.props.dataState.pageCnt - 1);
                    endAt = this.props.dataState.itemCnt - 1;
                } else {
                    return
                }
                break;
            case 'PREV':
                if (this.props.dataState.currPage > 1) {
                    currPage = this.props.dataState.currPage - 1;
                    startAt = this.props.dataState.startAt - this.props.dataState.ipp;
                    endAt = startAt + this.props.dataState.ipp - 1;
                } else {
                    return
                }
                break;
            case 'NEXT':
                if (this.props.dataState.currPage < this.props.dataState.pageCnt) {
                    currPage = this.props.dataState.currPage + 1;
                    startAt = this.props.dataState.startAt + this.props.dataState.ipp;
                    endAt = this.props.dataState.endAt + this.props.dataState.ipp;
                    if (endAt > (this.props.dataState.itemCnt - 1)) {
                        endAt = this.props.dataState.itemCnt - 1
                    }
                } else {
                    return
                }
                break;
        }

        this.props.loadDataDispatch(this.props.dataState.category, currPage, startAt, endAt);
    }

    currPage = () => {
        return this.props.dataState.currPage
    }

    onKeyUp(e: any) {
        console.log(e.target.value);
    }

    componentDidMount() {
        jq(document).on('keydown', (e) => {
            if (e.ctrlKey && e.which === 37) {
                this.gotoPage('PREV');
            }
            if (e.ctrlKey && e.which === 39) {
                this.gotoPage('NEXT');
            }
        })
    }

    componentWillUnmount() {
        jq(document).off('keydown');
    }

    render() {
        return (
            <div className="pages">
                <div className="controls">
                    <button className="first" onClick={e => this.gotoPage('FIRST')}>❬❬</button>
                    <button onClick={e => this.gotoPage('PREV')}>❬</button>
                    <div className="page-no">
                        <input type="text" className="page-no-input" placeholder={this.currPage()} onKeyUp={e => this.onKeyUp(e)} /><span className="page-cnt">/&nbsp;{this.props.dataState.pageCnt}</span>
                    </div>
                    <button onClick={e => this.gotoPage('NEXT')}>❭</button>
                    <button className="last" onClick={e => this.gotoPage('LAST')}>❭❭</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store: any) => ({
    dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    loadDataDispatch: (category: string, currPage: number, startAt: number, endAt: number) => {
        dispatch(loadDataAct(category, currPage, startAt, endAt))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
