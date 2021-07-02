import React from 'react';
import PricingPlans from '../../../Component/PricingPlan/PricingPlan';
import Header from '../../../Parts/Header';
import LastPart from '../../../Parts/LastPart/LastPart';


const PricingPlan = () => {
    return(
        
    <div className="Container">
    
    <Header 
       title="Pricing Plan"
       subTitle="Pricing Plan"
       
       />
    
   
   
         <div className="row text-center grid-3">
        
              <PricingPlans
                 title="Basic"
                 images="../images/pricing1.JPG"
                 sign="$"
                 Price="59"
                  />

              <PricingPlans 
                 title="Standard"
                 images="../images/pricing2.JPG"
                 sign="$"
                 Price= "59"
                  />

              <PricingPlans 
         
                 title="Premium"
                 images="../images/pricing3.JPG"
                 sign="$"
                 Price="120"
                 />
         </div>
      
         <LastPart />
    
    </div>
    );
}
export default PricingPlan;
