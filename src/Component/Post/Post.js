import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        
        <div className="blog-card my-5">
            <div className="wrapper">
                
                <div className="blog-image text-white" data-category={props.label} >
                <img className="blog-img" src={props.images}/>
               </div>
               
             <div className="card-body"> 
                  
                   <ul class="list-inline">
                   <li className="list-inline-item">
                    <i className="blogIcon fa fa-user"></i> by <a className="item" href="#">ThemeBing</a>
                   </li>
                   
                   <li className="list-inline-item">
                    <i className="blogIcon fa fa-comment"></i>
                    <a className="item"href="#">4 Comments</a>
                   </li>
             
                    <li className="list-inline-item">
                     <i className="blogIcon fa fa-tags"></i> 
                    <a className="item"href="#">CMS Themes</a> 
                   </li>

                    <li className="list-inline-item">
                    <i className="blogIcon fa fa-eye"></i>Views 1296
                   </li>

                     </ul>



                   <h4 className="card-title">{props.title}</h4>
                   <p className="card-text">
                    Marketing is the management of exchange relationships.Marketing is the business process of creating relationships with and satisfy customers. with focus customer, marketing one of the primary component of business many desktop publishing... </p>
                   <button className="product mb-3">Read More</button>
                   </div> 
        
                </div>
             </div>
    );
}

export default Post;
