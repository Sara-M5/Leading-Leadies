import { faComment, faEye, faTags, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Post.css'
const Post = (props) => {
    return (
        
        <div className="blog-card my-5">
            <div className="wrapper">
                
                <div className="card_img blog-image text-white" data-category={props.label} >
                <img className="blog-img" src={props.images}/>
               </div>
               
             <div className="card-body"> 
                   <div className="blog-card-body">
                   <ul class="list-inline">
                   <li className="list-inline-item">
                   <FontAwesomeIcon icon={faUser} className="blogIcon"/><a className="item"href="#">by ThemeBing</a> </li>
                   
                   <li className="list-inline-item">
                    <FontAwesomeIcon  icon={faComment} className="blogIcon"/>
                    <a className="item"href="#">4 Comments</a> </li>
             
                    <li className="list-inline-item">
                    <FontAwesomeIcon  icon={faTags} className="blogIcon"/>
                    <a className="item"href="#">CMS Themes</a> </li>

                    <li className="list-inline-item">
                    <FontAwesomeIcon  icon={faEye} className="blogIcon"/> <a className="item"href="#">Views 1296</a> </li>
                     </ul>



                   <h4 className="card-title">{props.title}</h4>
                   <p className="card-text">
                    Marketing is the management of exchange relationships.Marketing is the business process of creating relationships with and satisfy customers. with focus customer, marketing one of the primary component of business many desktop publishing... </p>
                   <button className="blogBtn mb-3">Read More</button>
                   </div> 
             </div>
             </div>
             </div>
    );
}

export default Post;
