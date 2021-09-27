import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="card p-0 position-relative">
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
      <div className="cardOverlay">
        <div className="d-flex flex-column gap-3 align-items-center justify-content-center h-100">
          <button>Preview</button>
          <button>Details</button>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
