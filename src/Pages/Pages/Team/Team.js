import React from 'react';
import Header from '../../../Parts/Header';
import LastPart from '../../../Parts/LastPart/LastPart';
import Teams from '../../About/Teams';


const Team = () => {
    return (
    <div className="Container">

    <Header 
       title="Team"
       subTitle="Team"
       />
    
     
      <div className="row grid-3 mb-5">
        
         <Teams 
         image="images/3(1).JPG"
         name="Sanam Hamza"
         job="Software Engineer"
         />

        <Teams
         image="images/team2.jpg"
         name="Sara Mahmoodi"
         job="Software Engineer"
         />

        <Teams
         image="images/3(3).JPG"
         name="Zohra Baraki"
         job="Software Engineer"
         />
    
      </div>
        
    <LastPart />
   
    </div>
    );
}
export default Team;
