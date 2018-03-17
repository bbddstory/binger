import * as React from 'react';

const Thumbs = () => (
  <div className="thumbs">

    <div className="thumb-row">
      <div className="thumb">
        <div className="thumbnail tus"></div>
        <div className="details">
          <div className="title">The Usual Suspects</div>
          <div className="year">1995</div>
          <div className="director">Bryan Singer</div>
        </div>
      </div>
      <div className="thumb">
        <div className="thumbnail tep"></div>
        <div className="details">
          <div className="title">The English Patient</div>
          <div className="year">1996</div>
          <div className="director">Anthony Minghella</div>
        </div>
      </div>
      <div className="thumb">
        <div className="thumbnail tsw"></div>
        <div className="details">
          <div className="title">The Shape of Water</div>
          <div className="year">2017</div>
          <div className="director">Guillermo del Toro</div>
        </div>
      </div>
    </div>

  </div>
);

export default Thumbs;