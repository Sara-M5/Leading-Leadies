import  React from 'react';
import Header from '../../Parts/Header';
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
             <i className="contactIcon fas fa-envelope"></i>
             <h3 className="card-title mt-5">Email Address</h3>
             <p className="card-text">info@example.com</p>
            </div>
            
         
             <div className="cards" style={{background:"white"}}>
             <i className="contactIcon fas fa-phone"></i>
             <h3 className="card-title mt-5">Phone Number</h3>
             <p className="card-text">+93 5676432976</p>
            </div>


            <div className="cards" style={{background:"white"}}>
             <i className="contactIcon fas fa-map-marked-alt"></i>
             <h3 className="card-title mt-5">Office Location</h3>
             <p className="card-text">202 New Hampshir Avenu, Kabul</p>
            </div>
         
          </div>
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


export default Contact;

