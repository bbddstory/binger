import * as React from 'react';
import { Link } from 'react-router-dom';

const path = () => (
  <ol className="path">
    <li><Link to="/categories">Categories</Link></li>
    <li><Link to="/categories/movies">Movies</Link></li>
    <li className="active">Details</li>
  </ol>
);

export default path;