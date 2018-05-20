'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cats from '../../util/cats';
import { setKeyAct, syncCatAct, loadDataAct } from '../../actions/dataActions';
import { removeHomeListItemAct } from '../../actions/homeActions';
import { loadDetailsAct } from '../../actions/detailsActions';

interface IReduxProps extends React.Props<any> {
    dataState: any,
    setKeyDispatch: any,
    loadDetailsDispatch: any,
    removeHomeListItemDispatch: any
}

interface ICompProps extends React.Props<any> {
    dataRef: any,
    outLink: boolean,
    vertical: boolean, // Vertical or horizontal slides
    delBtn: boolean,
    showInfo: boolean,
    showDots: boolean,
    category: string, // For showing default category posters when there's none attached
    list: string, // specify which list on the home page
    ipp: any // number of items per page
}

class SlidesList extends React.Component<IReduxProps & ICompProps, any> {
    constructor(props: any) {
        super(props);
        this.state = { currPage: 0 };
    }

    delItem(e: any, key: string) {
        e.preventDefault();
        this.props.removeHomeListItemDispatch(this.props.list, key);
    }

    loadDetails(key: string) {
        this.props.setKeyDispatch(key);
        this.props.loadDetailsDispatch();
    }

    showSlide = (i: number) => {
        this.setState({ currPage: i})
    }

    slides = () => {
        const buffer = this.props.dataRef;
        const ipp = this.props.ipp;
        const hidePage = { display: 'none' };
        const showPage = { display: 'block' };
        const tileStyle = { width: this.props.vertical ? '100%' : 'calc(' + 100 / ipp + '% - 20px)' };
        const linkStyle = this.props.showInfo ? { background: 'rgba(#000, .2)' } : {};

        let slides = [];
        let page = [];

        for (let i = 0; i < Math.ceil(buffer.length / ipp); i++) {
            for (let j = 0; j < ipp; j++) {
                let el = buffer[j + i * ipp];

                if (el) {
                    page.push(
                        <div className="tile" key={j + i * ipp} style={tileStyle}>
                            <Link to={this.props.outLink ? '/main/details' : '#'} onClick={e => this.loadDetails(el.id)} style={linkStyle}>
                                {this.props.delBtn && <div className="del-item" title="Remove from the list" onClick={e => this.delItem(e, el.id)}></div>}
                                {el.poster && el.poster !== 'N/A' ?
                                    <img alt="Poster" src={el.poster} /> :
                                    <div className={'dummy-poster poster-' + el.category.toLowerCase()}></div>}
                            </Link>
                            {this.props.showInfo && <div className="info">
                                <div className="title">{el.eng_title}</div>
                                <div className="details">
                                    <span className="year">{el.year}</span><br />
                                    {el.director || el.creator || el.prod}
                                </div>
                            </div>}
                        </div>
                    )
                }
            }

            slides.push(
                <div className="slide" style={this.state.currPage === i ? showPage : hidePage} key={i}>
                    {page}
                </div>
            );
            page = [];
        }

        return slides;
    }

    dots = () => {
        let dots = [];

        for (let i = 0; i < Math.ceil(this.props.dataRef.length / this.props.ipp); i++) {
            dots.push(<span onClick={e => this.showSlide(i)} key={i}></span>)
        }
        
        return (
            <div className="dots">
                {dots}
            </div>
        );
    }

    render() {
        const buffer = this.props.dataRef;
        const { dataState } = this.props;
        const tileStyle = { width: 'calc(' + 100 / this.props.ipp + '% - 20px)' };
        const linkStyle = this.props.showInfo ? { background: 'rgba(0, 0, 0, .2)' } : {};

        return (
            <div className="tile-list">
                {this.slides()}
                {this.dots()}
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
    },
    removeHomeListItemDispatch: (list: string, key: string) => {
        dispatch(removeHomeListItemAct(list, key))
    }
});

export default connect<{}, {}, ICompProps>(mapStateToProps, mapDispatchToProps)(SlidesList);
