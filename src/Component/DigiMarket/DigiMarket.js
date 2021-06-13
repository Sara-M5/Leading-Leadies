import React from 'react'; 
import './DigiMarket.css';

const DigiMarket = (props) => {
    return (
     <div className="cards">
            <div className="cards-wrapper">       
            <h3>{props.title}</h3>
            <p className="graph">{props.text}</p>
           
          </div>
     
     </div>
    )};



export default DigiMarket;
