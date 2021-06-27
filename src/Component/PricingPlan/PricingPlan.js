import React from 'react';
import './PricingPlan.css';

const PricingPlan = (props) => {
  return (
    <div className="card4">
      <div className="card_img4">
        <img className="img4" src={props.images} />
      </div>
      <div className="card-body">
        <div className="newPrice4">{props.Price}</div>

        <h4 className="card-title">{props.title}</h4>
        <ul className="card-list">
          <li>Demo Content Install</li>
          <li>Theme Updates</li>
          <li>Support And Updates</li>
          <li>Access All Themes</li>
          <li>All Themes For Life</li>
        </ul>
      </div>
      <button className="mt-4 align-items-center">Purchase Now</button>
    </div>
  );
};

export default PricingPlan;
