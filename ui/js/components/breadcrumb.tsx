import * as React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => (
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/categories">Categories</Link></li>
    <li className="breadcrumb-item"><Link to="/categories/movies">Movies</Link></li>
    <li className="breadcrumb-item active">Details</li>
  </ol>
);

export default Breadcrumb;