import {  faEnvelope, faLocationArrow, faPhone,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  React from 'react';
import Header from '../../Parts/Header';
import JoinUsToday from '../../Parts/JoinUsToday/JoinUsToday';
import LastPart from '../../Parts/LastPart/LastPart';
import './Contact.css'
const Contact = () => {

    return (
    <div>
      
    <Header 
       title="Contact"
       subTitle="Contact"
       
       />
    
      <div className="row">

          <div className="col-md-6 col-lg-7 ">
          <iframe className="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="%3$s" aria-label="%3$s"></iframe>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className="text-center">
              <h1>Get in touch</h1>
              <p>Nemo enim ipsam voluptatem quia voluptas</p>
              </div>
              <form className="form-group">
              
                <label for="name"></label>
                <input className="form-control p-3" type="text" id="name" placeholder="Your name" />

                <label for="email"></label>
                <input className="form-control p-3" type="email" id="email" placeholder="Email" /> 
       
                <label for="subject"></label>
                <input className="form-control p-3" type="text" id="subject" placeholder="subject" />
          
                <label for="message"></label>
                <textarea className="form-control p-3" type="text" id="message" rows="4" placeholder="Your message"/>
               
               <button className="bannerBtn" type="submit">Send message</button>
              </form>

          </div>
          </div>
         <div className="section1">
          <div className="row text-center" >


            <div className="cards"  style={{background:"white"}}>
             <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
             <h3 className="card-title mt-5">Email Address</h3>
             <p className="card-text">info@example.com</p>
            </div>
            
         
             <div className="cards" style={{background:"white"}}>
             <FontAwesomeIcon icon={faPhone} className="contactIcon" />
             <h3 className="card-title mt-5">Phone Number</h3>
             <p className="card-text">+93 5676432976</p>
            </div>


            <div className="cards" style={{background:"white"}}>
             <FontAwesomeIcon icon={faLocationArrow} className="contactIcon"/>
             <h3 className="card-title mt-5">Office Location</h3>
             <p className="card-text">202 New Hampshir Avenu, Kabul</p>
            </div>
         
          </div>
          </div>
         
         <JoinUsToday />
          <LastPart />
         
      
    </div>
    );
}


export default Contact;

