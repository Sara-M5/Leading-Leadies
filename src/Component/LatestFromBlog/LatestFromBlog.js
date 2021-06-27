import React from 'react';
import './LatestFromBlog.css';

const LatestFromBlog = (props) => {
  return (
    <div className="blog">
      <div className="wrapper">
        <div className="photos">
          <div class="img-gal">
            <img src={props.images} alt="" />
          </div>
        </div>

        <div className="card-body p-4">
          <div className="Group">
            {props.pText}
            <div className="Group date"> {props.date} </div>
          </div>

          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestFromBlog;
