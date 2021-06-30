import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () =>{
    return( 

  <div>
    <div className="card mb-5">
    <h3 className="sidebar-title px-4">Product Categories</h3>
    <div><span className="mx-4 line text-white">hellooo</span></div>
    <div className="mx-4 line3"></div>
    <ul className="sidebar-list">
   <li class="border-bottom d-flex justify-content-between"><a className="item"href="#">CMS Themes</a><span className="count">(7)</span></li>
       <li class=" border-bottom d-flex justify-content-between"><a className="item"href="#">eCommerce</a><span className="count">(9)</span></li>
       <li class=" border-bottom d-flex justify-content-between"><a className="item"href="#">Joomla</a> <span className="count">(6)</span></li>
       <li class=" border-bottom d-flex justify-content-between"><a className="item"href="#">PSD Templates</a> <span className="count">(5)</span></li>
       <li class="border-bottom d-flex justify-content-between"><a className="item"href="#">Site Templates</a> <span className="count">(5)</span></li>
       <li class="d-flex justify-content-between"><a className="item"href="#">WordPress</a> <span className="count">(8)</span></li>
   </ul>
   </div>

    <div className="card mb-5">
   
    <h3 className="card-title px-4">Average rating</h3>
    <div><span className="mx-4 line text-white">hellooo</span></div>
    <div className="mx-4 line3"></div>

    <ul>
   <li class="border-bottom d-flex justify-content-between">
    <a className="item"href="#">(15)</a><span className="count">
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="gold"/> </span></li>

    <li class=" border-bottom d-flex justify-content-between">
    <a className="item"href="#">(14)</a><span className="count">
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="#e9e9e9"/> </span></li>

   <li class=" border-bottom d-flex justify-content-between">
    <a className="item"href="#">(6)</a><span className="count">
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="#e9e9e9"/>
   <FontAwesomeIcon icon={faStar}color="#e9e9e9"/> </span></li>

   <li class=" border-bottom d-flex justify-content-between">
    <a className="item"href="#">(4)</a><span className="count">
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="#e9e9e9"/>
   <FontAwesomeIcon icon={faStar}color="#e9e9e9"/>
   <FontAwesomeIcon icon={faStar}color="#e9e9e9"/> </span></li>

   <li class=" border-bottom d-flex justify-content-between">
    <a className="item"href="#">(1)</a><span className="count">
   <FontAwesomeIcon icon={faStar}color="gold"/>
   <FontAwesomeIcon icon={faStar}color="#e9e9e9"/>
   <FontAwesomeIcon icon={faStar}color="#e9e9e9"/>
   <FontAwesomeIcon icon={faStar}color="#e9e9e9"/>
   <FontAwesomeIcon icon={faStar}color="#e9e9e9"/> </span></li>
   </ul>

   </div>

<div className="card-1 mb-5">
   <h3 className="pt-4 px-4">Product Tags</h3>
   <div><span className="mx-4 line text-white">hellooo</span></div>
    <div className="mx-4 line3"></div>
    <div className="mx-4 ">
       <button className="blog-btn px-3 py-1 ml-4">business</button>
       <button className="blog-btn px-3 py-1 m-1">Car Insurance</button>
       <button className="blog-btn px-3 py-1 m-1">corporate website</button>
       <button className="blog-btn px-3 py-1 m-1">finance</button>
       <button className="blog-btn px-2 py-1 m-1">healt insurance</button>
       <button className="blog-btn px-3 py-1 m-1">insurance</button>
       <button className="blog-btn px-2 py-1 m-1">insurance agency</button>
       <button className="blog-btn px-2 py-1 m-1">insurance theme</button>
       <button className="blog-btn px-2 py-1 m-1">insurance company</button>
       <button className="blog-btn px-2 py-1 m-1">life insurance</button>
       </div>
   </div>
   </div>
);
}

export default Sidebar;
