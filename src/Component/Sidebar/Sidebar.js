import React from 'react';
import './Sidebar.css';

const Sidebar = () =>{
    return( 

  <div className="mx-3">
    <div className="card mb-5">
    <h3 className="sidebar-title px-4 pt-5">Product Categories</h3>
    <div><span className="mx-4 line text-white">hellooo</span></div>
    <div className="mx-4 line3"></div>
        
    <ul className="sidebar-list px-4">
        
        <li class="border-bottom d-flex justify-content-between">
           <a className="item"href="#">CMS Themes</a>
               <span className="count">(7)</span>
       </li>
    
       <li class=" border-bottom d-flex justify-content-between">
           <a className="item"href="#">eCommerce</a>
               <span className="count">(9)</span>
      </li>
    
      <li class=" border-bottom d-flex justify-content-between">
           <a className="item"href="#">Joomla</a> 
               <span className="count">(6)</span>
      </li>
    
       <li class=" border-bottom d-flex justify-content-between">
           <a className="item"href="#">PSD Templates</a> 
               <span className="count">(5)</span>
       </li>
    
       <li class="border-bottom d-flex justify-content-between">
           <a className="item"href="#">Site Templates</a> 
               <span className="count">(5)</span>
       </li>
    
       <li class="d-flex justify-content-between">
           <a className="item"href="#">WordPress</a>
               <span className="count">(8)</span>
       </li>
    
   </ul>
   </div>

    <div className="card mb-5">
   
    <h3 className="card-title px-4 pt-5">Average rating</h3>
    <div><span className="mx-4 line text-white">hellooo</span></div>
    <div className="mx-4 line3"></div>

    <ul className="sidebar-list px-4">
   <li class="border-bottom d-flex justify-content-between">
    <a className="item"href="#">(15)</a>
     <span className="count">
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"gold"}} className="fas fa-star"></i> 
    </span>
   </li>

    <li class=" border-bottom d-flex justify-content-between">
    <a className="item"href="#">(14)</a>
     <span className="count">
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"#e9e9e9"}} className="fas fa-star"></i>
     </span>
    </li>

   <li class=" border-bottom d-flex justify-content-between">
    <a className="item"href="#">(6)</a>
     <span className="count">
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"#e9e9e9"}} className="fas fa-star"></i>
      <i style={{color:"#e9e9e9"}} className="fas fa-star"></i>
    </span>
   </li>

   <li class=" border-bottom d-flex justify-content-between">
    <a className="item"href="#">(4)</a>
     <span className="count">
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"#e9e9e9"}} className="fas fa-star"></i>
      <i style={{color:"#e9e9e9"}} className="fas fa-star"></i>
      <i style={{color:"#e9e9e9"}} className="fas fa-star"></i>
     </span>
   </li>

   <li class="d-flex justify-content-between">
    <a className="item"href="#">(1)</a>
     <span className="count">
      <i style={{color:"gold"}} className="fas fa-star"></i>
      <i style={{color:"#e9e9e9"}} className="fas fa-star"></i>
      <i style={{color:"#e9e9e9"}} className="fas fa-star"></i>
      <i style={{color:"#e9e9e9"}} className="fas fa-star"></i>
      <i style={{color:"#e9e9e9"}} className="fas fa-star"></i>
     </span>
    </li>

   </ul>

   </div>

<div className="card mb-5">
   <h3 className="pt-5 px-4">Product Tags</h3>
   <div><span className="mx-4 line text-white">hellooo</span></div>
    <div className="mx-4 line3"></div>
    <div className="m-4">
       <button className="blog-btn">business</button>
       <button className="blog-btn">Car Insurance</button>
       <button className="blog-btn">corporate website</button>
       <button className="blog-btn">finance</button>
       <button className="blog-btn">healt insurance</button>
       <button className="blog-btn">insurance</button>
       <button className="blog-btn">insurance agency</button>
       <button className="blog-btn">insurance theme</button>
       <button className="blog-btn">insurance company</button>
       <button className="blog-btn">life insurance</button>
       </div>
     </div>
   </div>
);
}

export default Sidebar;
