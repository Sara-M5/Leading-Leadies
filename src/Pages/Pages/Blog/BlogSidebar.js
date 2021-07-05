import React from 'react';
import './BlogSidebar.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () =>{
    return( 

  <div>
      <div className="card mb-5">
   
   <h3 className="card-title px-4">Recent Posts</h3>
   <div><span className="mx-4 line text-white">hellooo</span></div>
   <div className="mx-4 line3 mb-4"></div>

   <ul>
   <li className="blogSidebarItem d-flex justify-content-between">
      <img className="sidebarImg" src="../images/6.JPG" alt=""/>
   <div className="blogInfo">
      <NavLink className="item" to="#">The best advice to start your own project</NavLink><br /> 
       <span className="blogDate">Octobar 29,2018</span>
   </div>
   </li>
   <li className="blogSidebarItem d-flex justify-content-between">
      <img className="sidebarImg"src="../images/9.JPG" alt=""/>
   <div className="blogInfo">
      <NavLink className="item" to="#">Top Web Design Trends You Must Know in 2021</NavLink><br /> 
       <span className="blogDate">June 12,2018</span>
   </div>
   </li>
   <li className="blogSidebarItem d-flex justify-content-between">
      <img className="sidebarImg" src="../images/2.JPG" alt=""/>
   <div className="blogInfo">
        <NavLink  to="#" className="item">Best Free Responsive WordPress Themes ...</NavLink><br />
       <span className="blogDate">May 11,2018</span>
   </div>
   </li>

    </ul>

   </div>
    <div className="card mb-5">
    <h3 className="sidebar-title px-4">Categories</h3>
    <div><span className="mx-4 line text-white">hellooo</span></div>
    <div className="mx-4 line3"></div>
    <ul className="sidebar-list px-4">
       <li class=" border-bottom d-flex justify-content-between"><a className="item"href="#">App</a> <span className="count">(1)</span></li>
       <li class="border-bottom d-flex justify-content-between"><a className="item"href="#">CMS Themes</a><span className="count">(3)</span></li>
       <li class=" border-bottom d-flex justify-content-between"><a className="item"href="#">eCommerce</a><span className="count">(1)</span></li>
       <li class=" border-bottom d-flex justify-content-between"><a className="item"href="#">Ecommerce Template</a><span className="count">(1)</span></li>
       <li class=" border-bottom d-flex justify-content-between"><a className="item"href="#">Html Template</a><span className="count">(2)</span></li>
       <li class=" border-bottom d-flex justify-content-between"><a className="item"href="#">Joomla Templates</a><span className="count">(1)</span></li>
       <li class=" border-bottom d-flex justify-content-between"><a className="item"href="#">PSD Templates</a> <span className="count">(1)</span></li>
       <li class="border-bottom d-flex justify-content-between"><a className="item"href="#">Site Templates</a> <span className="count">(5)</span></li>
       <li class=" border-bottom d-flex justify-content-between"><a className="item"href="#">Sketch Templates</a> <span className="count">(1)</span></li>
       <li class=" d-flex justify-content-between"><a className="item"href="#">WordPress</a> <span className="count">(1)</span></li>
      
   </ul>
   </div>


   <div className="card mb-5">
   <h3 className="pt-4 px-4">Tags</h3>
   <div><span className="mx-4 line text-white">hellooo</span></div>
    <div className="mx-4 line3"></div>
    <div className="m-4 mt-0 ">
         <button className="blog-btn">Andriod</button>
         <button className="blog-btn">Apple</button>
         <button className="blog-btn">Blackberry</button>
         <button className="blog-btn">boot</button>
         <button className="blog-btn">css</button>
         <button className="blog-btn">html</button>
         <button className="blog-btn">joomla</button>
         <button className="blog-btn">jquery</button>
         <button className="blog-btn">PSD</button>
         <button className="blog-btn">WordPress</button>
                
                   </div>
                  </div>
               </div>
 
);
}

export default Sidebar;
