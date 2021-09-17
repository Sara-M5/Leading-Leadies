import React from 'react'; 
import './Description.css'

const Description = () => {
    return (  
         <div class="row text-center mt-5">
                <div className="counter-icon col-md-3 mb-3">
                   <i className="envira1-icon fab fa-envira" ></i>
                   <h2 className="total">30</h2>
                   <p>Total Items</p>
                </div>
                <div className="counter-icon col-md-3 mb-3">
                   <i className="store-icon fab fa-app-store-ios" ></i>
                   <h2 className="total">49</h2>
                   <p>Total Sells</p>
                </div>
                <div className="counter-icon col-md-3 mb-3">
                   <i className="user-icon fas fa-user-friends" ></i>
                   <h2 className="total">104</h2>
                   <p>Customers</p>
                </div> 
                <div className="counter-icon col-md-3 mb-3">
                   <i className="envira2-icon fab fa-envira" ></i>
                   <h2 className="total">54</h2>
                   <p>Rating</p>
                </div>  
          </div>
        
       )};
   


export default Description;
