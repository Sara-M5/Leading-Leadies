import React from 'react';
import './Cards.css';

const Cards = (props) => {
  return (
    <div className="card p-0">
      <div className="card_img" data-category={props.label}>
        <img className="img" src={props.images} />
      </div>
      <div className="card-body p-4">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
        <div className="priceGroup">
          <div className="oldPrice">{props.oldPrice}</div>
          <div className="newPrice">{props.newPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
