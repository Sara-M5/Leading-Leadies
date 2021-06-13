import React from 'react'; 
import './Description.css'

const Description = (props) => {
    return (

        <div class="desc">
      
      
                
            <img className="info" src={props.images} />
            <h2 className="total">{props.amount}</h2>
            <p>{props.text}</p> 
            

             </div>
        
       )};
   


export default Description;
