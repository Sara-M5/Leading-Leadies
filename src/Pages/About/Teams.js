import React from 'react';

const Teams = (props) => {
return(

     <div className="teams col-sm-4 my-5">
     <img className="Picture" src={props.image} alt=""/>
     <div class="tijarah-team-content p-4">
     <h4>{props.name}</h4>
     <span>{props.job}</span>
     </div>
     </div>
);
}


export default Teams;
