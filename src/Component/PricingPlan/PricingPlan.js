import React from 'react'; 
import './PricingPlan.css'

const PricingPlan = (props) => {
    return (
       
        <div className="card4">
           
                <div className="card_img4">
                <img className="img4" src={props.images} />
                </div>
               <div className="wrapper4">
                   <div className="card-body">          
                   <div className="newPrice4">{props.Price}</div>
                
                   <h4 className="card-title pt-3">{props.title}</h4>
                   <p className="paragraph1 card-text">Demo Content Install<hr></hr>Theme Updates<hr></hr>Support And Updates<hr></hr>
                   Access All Themes<hr></hr>All Themes For Life</p>
            
                   </div>
                </div>
             <button className="mt-4 align-items-center">Purchase Now</button>
             </div>
        
       )};
   


export default PricingPlan;
