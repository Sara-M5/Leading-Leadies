import React from 'react'; 
import './WhyChooseUs.css';

const WhyChooseUs = (props) => {
    
    return (
     <div className="card2">
           
            <div className="center ">  
                
            <h3>{props.title}</h3>
            <p className="graph"> {props.text}</p>
                  </div>
     
     </div>
    )};



export default WhyChooseUs;
