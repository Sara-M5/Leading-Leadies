import React from 'react';
import './LastPart.css'
import  { NavLink }  from 'react-router-dom';

const LastPart = () => {
    return(
       <div className="foot">
           <div className="container">
        <div className="row">
            <div className="colL">
                <h3>Leading Leadies</h3>
                <p>Popularised in the with the release
                     of etras sheets containing passages and more rcently
                     with desop publishing software like Maker including.</p>
                     <i></i>
            </div>
            <div className="col">
                <h3>Products</h3>
                <div>
                 <NavLink className="nav-link"to="/">My account</NavLink>
                 <NavLink className="nav-link"to="/">About Us</NavLink>
                 <NavLink className="nav-link"to="/">Checkout</NavLink>
                 <NavLink className="nav-link"to="/">Contact Us</NavLink>
                 <NavLink className="nav-link"to="/">Plugins</NavLink>
                 </div>
            </div>
            <div className="col">
                <h3>Resources</h3>
                 <NavLink className="nav-link" to="/">About Us</NavLink>
                 <NavLink className="nav-link" to="/">My account</NavLink>
                 <NavLink className="nav-link"to="/">Themes</NavLink>
                 <NavLink className="nav-link"to="/">Contact Us</NavLink>
                 <NavLink className="nav-link"to="/">Checkout</NavLink>

            </div>
            <div className="col">
                <h3>Company</h3>
                 <NavLink className="nav-link"to="/">My account</NavLink>
                 <NavLink className="nav-link"to="/">About Us</NavLink>
                 <NavLink className="nav-link"to="/">Checkout</NavLink>
                 <NavLink className="nav-link"to="/">Contact Us</NavLink>
                 <NavLink className="nav-link"to="/">Plugins</NavLink>

            </div>
            <div className="col">
                <h3>Help and FAQs</h3>
                 <NavLink className="nav-link" to="/">About Us</NavLink>
                 <NavLink className="nav-link"to="/">My account</NavLink>
                 <NavLink className="nav-link"to="/">Themes</NavLink>
                 <NavLink className="nav-link"to="/">Contact Us</NavLink>
                 <NavLink className="nav-link"to="/">Checkout</NavLink>

           

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