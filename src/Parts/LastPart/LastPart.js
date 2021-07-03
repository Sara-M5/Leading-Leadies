import React from 'react';
import './LastPart.css'
import  { NavLink }  from 'react-router-dom';

const LastPart = () => {
    return(
       <div className="foot">
        <hr />
           <div className="container mt-5">
           <div className="row justify-content-between">
           <div className="col-md-4">
        
                <div className="row">
                <h5>Leading Leadies</h5>
                <p>Popularised in the with the release
                     of etras sheets containing passages and more rcently
                     with desop publishing software like Maker including.</p>
        
                <div className="footer-icons">
                  <NavLink to="/"><i className="footer-icon fIcon fab fa-facebook-f"></i></NavLink>
                  <NavLink to="/"><i className="footer-icon tIcon fab fa-twitter"></i></NavLink>
                  <NavLink to="/"><i className="footer-icon pIcon fab fa-pinterest-p"></i></NavLink>
                  <NavLink to="/"><i className="footer-icon iIcon fab fa-linkedin-in"></i></NavLink>       
                </div>
        
               </div>
           </div>
        
           <div className="col-md-2">
                 <h5>Products</h5>
                 <NavLink className="items nav-link"to="/">My account</NavLink>
                 <NavLink className="items nav-link"to="/">About Us</NavLink>
                 <NavLink className="items nav-link"to="/">Checkout</NavLink>
                 <NavLink className="items nav-link"to="/">Contact Us</NavLink>
                 <NavLink className="items nav-link"to="/">Plugins</NavLink>
    
            </div>
        
            <div className="col-md-2">
                 <h5>Resources</h5>
                 <NavLink className="items nav-link" to="/">About Us</NavLink>
                 <NavLink className="items nav-link" to="/">My account</NavLink>
                 <NavLink className="items nav-link"to="/">Themes</NavLink>
                 <NavLink className="items nav-link"to="/">Contact Us</NavLink>
                 <NavLink className="items nav-link"to="/">Checkout</NavLink>

            </div>
        
            <div className="col-md-2">
                 <h5>Company</h5>
                 <NavLink className="items nav-link"to="/">My account</NavLink>
                 <NavLink className="items nav-link"to="/">About Us</NavLink>
                 <NavLink className="items nav-link"to="/">Checkout</NavLink>
                 <NavLink className="items nav-link"to="/">Contact Us</NavLink>
                 <NavLink className="items nav-link"to="/">Plugins</NavLink>

            </div>
        
            <div className="col-md-2">
                 <h5>Help and FAQs</h5>
                 <NavLink className="items nav-link" to="/">About Us</NavLink>
                 <NavLink className="items nav-link" to="/">My account</NavLink>
                 <NavLink className="items nav-link" to="/">Themes</NavLink>
                 <NavLink className="items nav-link" to="/">Contact Us</NavLink>
                 <NavLink className="items nav-link" to="/">Checkout</NavLink>

            </div> 
        
        </div>
      </div>
        
        <div className="footer">
        <p>Copyright © 2021 Leading Leadies All Rights Reserved.</p>
        </div>
        
  </div>
      

    );
}

export default LastPart;
