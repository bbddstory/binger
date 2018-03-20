'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { dataAct } from '../actions/dataActions';

class Pages extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { movies: {}, dummyPoster: 'ui/images/movie/poster.png' };
    }

    render() {
        return (
            <div className="pages">
                <button className="first">First</button>
                <button>Prev</button>
                <div>1 / 100</div>
                <button>Next</button>
                <button className="last">Last</button>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    dataState: state.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    moviesDispath: (movies: any) => {
        console.log('movies: ', movies);
        dispatch(dataAct(movies))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
