import React from 'react';
import './ClientFeedback.css';

const ClientFeedback = (props) => {
return(

<div className="container">
<div className="d-flex justify-content-between">
     <div className="col1">
     <img className="circle" src={props.images} />
     </div>
     <div className="col2">
         {props.text}
         
         <h3>{props.name}</h3>
         {props.job}
         
     </div>
</div>

</div>

);
} 


export default ClientFeedback;