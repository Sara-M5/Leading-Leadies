import React from 'react';
import DigiMarkets from '../../../Component/DigiMarket/DigiMarkets';
import Header from '../../../Parts/Header';
import LastPart from '../../../Parts/LastPart/LastPart';

const Service = () => {
  return(
    <div className="Container">

      <Header 
       title="Services"
       subTitle="Services"
       
       />  

    <DigiMarkets />
    <LastPart />


    </div>
    );
}
export default Service;
