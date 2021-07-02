import React from 'react';
import './DigiMarket.css';

const DigiMarkets = () => {
    return(
  <div className="container">
      
      <div className="row">

         <div className="cards mb-5" style={{background:"rgba(144, 19, 254, 0.06)"}}>
          <i className="codeIcon fas fa-code mt-4"></i>
          <h5 style={{color:"#7D6E9B" }}className="card-title mt-3">We are Open Source</h5>
          <p className="card-text">Lorem ipsum dummy text in print and website industry are usually use in these section</p>
         </div>
     
         <div className="cards mb-5" style={{background:"rgba(43, 98, 201, 0.06)"}}>
          <i className="lightIcon fas fa-lightbulb mt-4"></i>
          <h5 style={{color:"#707DAC"}}className="card-title mt-3">Problem Solvers</h5>
          <p className="card-text">Lorem ipsum dummy text in print and website industry are usually use in these section</p>
         </div>

      

         <div className="cards mb-5" style={{background:"background: rgba(0, 130, 255, 0.06)"}}>
          <i className="handsIcon fas fa-hands-helping mt-4"></i>
          <h5 style={{color:"#637595" }}className="card-title mt-3">Highly-Rated Support</h5>
          <p className="card-text">Lorem ipsum dummy text in print and website industry are usually use in these section</p>
         </div>
      
      
         <div className="cards mb-5" style={{background:"rgba(233, 79, 68, 0.06)"}}>
          <i className="puzzelIcon fas fa-puzzle-piece mt-4"></i>
          <h5 style={{color:"#866E7D" }}className="card-title mt-3">Feature-Rich Free &amp; Pro Plugins</h5>
          <p className="card-text">Lorem ipsum dummy text in print and website industry are usually use in these section</p>
         </div>

      
         <div className="cards mb-5" style={{background:"rgba(26, 188, 156, 0.06)"}}>
          <i className="powerIcon fab fa-superpowers mt-4"></i>
          <h5 style={{color:"#607E70"}}className="card-title mt-3">Regular Updates &amp; Bug fixes</h5>
          <p className="card-text">Lorem ipsum dummy text in print and website industry are usually use in these section</p>
         </div>

         <div className="cards mb-5" style={{background:"rgba(245, 166, 35, 0.06)"}}>
          <i className="cogIcon fab fas fa-cog mt-4"></i>
          <h5 style={{color:"#897C66"}}className="card-title mt-3">Extensions to step-up your game</h5>
          <p className="card-text">Lorem ipsum dummy text in print and website industry are usually use in these section</p>
         </div>

      </div>
  </div>


    );
}

export default DigiMarkets;
