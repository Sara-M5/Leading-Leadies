import React from 'react';
import './PricingPlan.css';

const PricingPlan = () => {
  return (
      <div className="grid-3">
      <div className="card4">
        <div className="counter-icon">
          <i className="basic fas fa-dice-d20" ></i>
          <div className="card-body">
          <div className="newPrice4">$ 39</div>
          <h4 className="card-title">Basic</h4>
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
     </div>
     <div className="card4">
        <div className="counter-icon">
          <i className="standard fas fa-crown" ></i>
          <div className="card-body">
          <div className="newPrice4">$ 59</div>
          <h4 className="card-title">Standard</h4>
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
     </div>
     <div className="card4">
        <div className="counter-icon">
          <i className="wordpress fab fa-wordpress" ></i>
          <div className="card-body">
          <div className="newPrice4">$ 120</div>
          <h4 className="card-title">Premium</h4>
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
     </div>
    </div>
  );
};

export default PricingPlan;
