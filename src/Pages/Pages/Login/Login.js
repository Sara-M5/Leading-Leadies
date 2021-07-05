import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../../Parts/Header';
import LastPart from '../../../Parts/LastPart/LastPart';
import './Login.css';

const Login = () => {
return (
<div className="login">

<Header 
       title="My account"
       subTitle="My account"
       
       />
       <div class="container login-form my-5">
           <div className="row">
               <div className="col-md-5 mt-5">
               <h2 className="mb-3">Login</h2>
               <form className="login-form login" method="post">

               <p>
               <label for="username">Username or email address&nbsp;<span class="required">*</span></label>
               <input className="form-control p-3"  type="text" name="username" id="username" autocomplete="username" />
               </p>

               <p>
               <label for="password">Password&nbsp;<span class="required">*</span></label>
               <input className="form-control p-3" type="password" name="password" id="password" autocomplete="current-password"/>
               </p>

               <p>
               <label for="checkbox">
               <input className="p-3" name="rememberme" type="checkbox" id="rememberme" value="forever" />
               <span className="mx-3 m-0">Remember me</span></label>
               </p>
               
               <button type="submit" className="product m-0 px-5" name="login" value="Log in">Log in</button>
              




                <p class="mt-3">
                <NavLink className="items " to="#">Lost your password?</NavLink>
                </p>
                </form>
               </div>
       
      
               <div className="col-md-5 mt-5">
               <h2 className="mb-3">Register</h2>
               <form className="login-form login" method="post">

               <p>
               <label for="email">Email address&nbsp;<span class="required">*</span></label>
               <input className="form-control p-3"  type="email" name="email" id="email" autocomplete="email"  />
               </p>

               <p>
               <label for="password">Password&nbsp;<span class="required">*</span></label>
               <input className="form-control p-3" type="password" name="password" id="password" autocomplete="current-password"/>
               </p>


               <button type="submit" className="product  px-5" name="login" value="Log in">Register</button>

              </form>
 
             </div>

   </div>
</div>
<LastPart />
</div>

);

}

export default Login;
