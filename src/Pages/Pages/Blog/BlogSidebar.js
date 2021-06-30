import React from 'react';
import './BlogSidebar.css'

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
       <p className="blogDesc">The best advice to start your own project</p>
       <span className="blogDate">Octobar 29,2018</span>
   </div>
   </li>
   <li className="blogSidebarItem d-flex justify-content-between">
      <img className="sidebarImg"src="../images/9.JPG" alt=""/>
   <div className="blogInfo">
       <p className="blogDesc">Top Web Design Trends You Must Know in 2021</p>
       <span className="blogDate">June 12,2018</span>
   </div>
   </li>
   <li className="blogSidebarItem d-flex justify-content-between">
      <img className="sidebarImg" src="../images/2.JPG" alt=""/>
   <div className="blogInfo">
       <p className="blogDesc">Best Free Responsive WordPress Themes ...</p>
       <span className="blogDate">May 11,2018</span>
   </div>
   </li>

    </ul>

   </div>
    <div className="card mb-5">
    <h3 className="sidebar-title px-4">Categories</h3>
    <div><span className="mx-4 line text-white">hellooo</span></div>
    <div className="mx-4 line3"></div>
    <ul className="sidebar-list">
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


   <div className="card-1 mb-5">
   <h3 className="pt-4 px-4">Tags</h3>
   <div><span className="mx-4 line text-white">hellooo</span></div>
    <div className="mx-4 line3"></div>
    <div className="mx-4 ">
         <button className="blog-btn px-3 py-1 ml-4 mt-2">Andriod</button>
         <button className="blog-btn px-3 py-1 m-1">Apple</button>
         <button className="blog-btn px-3 py-1 m-1">Blackberry</button>
         <button className="blog-btn px-3 py-1 m-1">boot</button>
         <button className="blog-btn px-3 py-1 m-1">css</button>
         <button className="blog-btn px-3 py-1 m-1">html</button>
         <button className="blog-btn px-3 py-1 m-1">joomla</button>
         <button className="blog-btn px-3 py-1 m-1">jquery</button>
         <button className="blog-btn px-3 py-1 m-1">PSD</button>
         <button className="blog-btn px-3 py-1 m-1 mb-3 ">WordPress</button>
                
                   </div>
                  </div>
               </div>
 
);
}

export default Sidebar;