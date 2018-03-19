'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { moviesAct } from '../actions/moviesActions';

export default class Pages extends React.Component<any, any> {
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