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
    
   
   
         <div className="row text-center">
               <PricingPlans />
         </div>
      
         <LastPart />
    
    </div>
    );
}
export default PricingPlan;
