import React from 'react';
import Description from '../../Component/Description/Description';
import ClientFeedback from '../../Parts/ClientFeedback/ClientFeedback';
import Text from '../../Parts/Text/Text';
import LastPart from '../../Parts/LastPart/LastPart';
import Teams from './Teams'
import './About.css';
import Header from '../../Parts/Header';


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
    
     <div className="row grid-3">
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
       
          <div className="col-md-3">
          <Description
          images= "../images/logo1.JPG"
          amount= "30"
          text="Total Items" />
          </div>

          <div className="col-md-3">
          <Description
          images= "../images/logo2.JPG"
          amount="48"
          text="Total Sells"/></div>
          <div className="col-md-3">
          <Description
          images="../images/logo3.JPG"
          amount="104"
          text="Customers" />
          </div>
          <div className="col-md-3">
          <Description
          images="../images/logo4.JPG"
          amount="45"
          text="Rating" />
          </div>
        
          </div>
          

          <div className="section">
          <Text title="Our Clients Feedback" />
          

          <ClientFeedback 
           images="../images/3(1).JPG"
           text="Awesome Product highly recomended Lorem ipsum dolor alamet, nsectetur mayalipol tempor eiusmod tempor recomended Lorem ipsum dolor alamet, nsec tetur mayalipol tempor eiusmod tempor incubto ectetur alasiqua enim ad nim veniam, quis nostrud ullam "
           name="Nancoda Mao"
           job="Ui/Ux Designer &amp; Product Designer "
          />
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
