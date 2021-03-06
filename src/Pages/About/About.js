import React from 'react';
import Description from '../../Component/Description/Description';
import ClientFeedback from '../../Parts/ClientFeedback/ClientFeedback';
import Text from '../../Parts/Text/Text';
import LastPart from '../../Parts/LastPart/LastPart';
import Teams from './Teams'
import './About.css';
import Header from '../../Parts/Header';
import { Data } from '../../Parts/ClientFeedback/Data';


const About = ()  => {
    return (
    <div>
        
      <Header 
       title="About"
       subTitle="About"
       
       />
    <div className="container">
    <div className="row justify-content-between">
        <div className="col-md-6 ">
            <h1 className="mt-4 mb-3">About DigiMarket</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration form, by injected humour, or randomised words which don’t look even slightly believable.<br></br>
               you need to be sure there isn’t anything embarrassing hidden in the middle of text.generators on the Internet.</p>
            <button className="mb-3">Read More</button>
        </div>
        <div className="col-md-6">
           <img className="Asset"src="images/Asset-3.png" />
        </div>
    </div>
    </div>
    <div className="section">
    <Text title="Our Awesome Team" />
    
     <div className="row grid-3  mb-5">
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
     </div>

    

         <div className="row center">
             <Description />
         </div>
          

          <div className="section">
          <Text title="Our Clients Feedback" />
           <ClientFeedback slides={Data} />
          </div>
         
        <div className="join">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h1 className="textColor">Join Us Today </h1>
            <button className="btn px-4">Join Us Today</button>
          </div>
          <div>
            <p className="textColor">
              Over 75,000 designers and developers trust the DigiMarket.
            </p>
          </div>
        </div>
       </div>
       <LastPart />
    </div>

);
}

export default About;
