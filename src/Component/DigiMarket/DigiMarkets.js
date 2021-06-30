import {  faCode, faGamepad, faLightbulb, faPuzzlePiece, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import DigiMarket from './DigiMarket';

const DigiMarkets = () => {
    return(
  <div className="container">
      
      <div className="row text-left">
      
      <DigiMarket 
       style={{background:'rgba(144, 19, 254, 0.06)'}} 
        icon={faCode}
        title="We are Open Source"
        text="Lorem ipsum dummy text in print and website industry are usually use in these section"
     
      />

      <DigiMarket  
       style={{background:'rgba(43, 98, 201, 0.06)'}}
        icon={faLightbulb}
        title="Problem Solvers"
        text="Lorem ipsum dummy text in print and website industry are usually use in these section"
     />

      <DigiMarket 
      style={{background:'rgba(26, 188, 156, 0.06)'}}
        icon={faThumbsUp}
        title= "Highly-Rated Support"
        text="Lorem ipsum dummy text in print and website industry are usually use in these section"
        alt="HighlyRated"
     />
      </div>

      <div className="row">
       <DigiMarket 
       icon={faPuzzlePiece}
        style={{background:'rgba(26, 188, 156, 0.06)'}} 
        title= "Feature-Rich Free And Pro Plugins"
        text="Lorem ipsum dummy text in print and website industry are usually use in these section"
      />

      
       <DigiMarket 
        icon={faThumbsUp}
        style={{background:'rgba(43, 98, 201, 0.06)'}}
        title= "Regular Updates And Bug fixes"
        text="Lorem ipsum dummy text in print and website industry are usually use in these section" />

       <DigiMarket 
        icon={faGamepad}
        style={{background:'rgba(255, 19, 10, 0.06)'}} 
        title= "Extensions to step-up your game"
        text="Lorem ipsum dummy text in print and website industry are usually use in these section"/>
        
        </div>
  </div>


    );
}

export default DigiMarkets;