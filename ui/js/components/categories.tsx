'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="categories">
        <ol>
          <li><Link to="/main/movies" className="active">Movies</Link></li>
          <li><Link to="/main/tv">TV</Link></li>
          <li><Link to="/main/docs">Documentaries</Link></li>
          <li><Link to="/main/anime">アニメ</Link></li>
          <li><Link to="/main/adult">Adult</Link></li>
          <li><Link to="/main/ero">エロ</Link></li>
        </ol>
      </div>
    )
  }
}