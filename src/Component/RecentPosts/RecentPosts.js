import React from 'react';
import { NavLink } from 'react-router-dom';
import './RecentPosts.css';



const RecentPosts = () => {
    return(
<div> 
        <div>
        <div className="post-thumbnail mb-4">
            <img className="blogImg" src="../images/2.JPG"/>
        </div>
        <div class="entry-meta">
           <ul className="list-inline">

                   <li className="list-inline-item">
                   <i className="blogIcon fa fa-user"></i> by <a className="item" href="#">ThemeBing</a>
                  </li>
                   
                   
                   <li className="list-inline-item">
                   <i className="blogIcon fa fa-comment"></i>
                   <a className="item"href="#">4 Comments</a> </li>
             
                    <li className="list-inline-item">
                    <i className="blogIcon fa fa-tags"></i> 
                    <a className="item"href="#">CMS Themes</a> </li>

                    <li className="list-inline-item">
                    <i className="blogIcon fa fa-eye"></i>Views 1296</li>
                     
                     </ul>
             </div>

             <div className="entry-content">
                <p>Marketing is the and management of exchange relationships. Marketing is the business process of creating relationships with and satisfy customers. With focus customer, marketing one of the primary component of business Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</p>
                <p>Business process of creating relationships with and satisfy customers. With focus marketings one of the primary component of business Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                <blockquote><p>Study and management of exchang relations. Marketing is the business process of creating relationship with satisfy customs With focus customer marketing one of primary</p></blockquote>
                <div className="row">
                    <figure className="col-md-6"><img className="postImg" src="../images/4(2).JPG"/></figure>     
                    <figure className="col-md-6"><img className="postImg" loading="lazy" src="../images/9.JPG"/></figure>
                </div>    
              
                
                <p>Marketing is the study and management of exchange relationships. Marketing is the business process of creating relationships with and satisfy customers. With focus customer, marketing one of the primary component of business Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</p>
                <div className="mb-3">
                <ul>
                <li>Marketplace makes it easy to buy and sell in your area</li>
                <li>Location where people regularly gather for the purchase and sale</li>
                <li>Purchase sale provisions In different parts of the</li>
                </ul>
                </div>
                <p>Business process of creating relationships with and satisfy customers. With focus marketings one of the primary component of business Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                
                </div>
                 </div>

                 <div className="entry-meta mt-4 d-flex justify-content-between">
                 <div className="d-flex">
                 Tags:
                 <button className="postBtn"><NavLink className="tag" to="#" rel="tag">jquery</NavLink></button> 
                 <button className="postBtn"><NavLink className="tag" to="#" rel="tag">PSD</NavLink></button> 
                 <button className="postBtn"><NavLink className="tag" to="#" rel="tag">WordPress</NavLink></button> 
                 </div>
                 
                 <div className="footer-icons">
                  <NavLink to="/"><i className="footer-icon fIcon fab fa-facebook-f"></i></NavLink>
                  <NavLink to="/"><i className="footer-icon tIcon fab fa-twitter"></i></NavLink>
                  <NavLink to="/"><i className="footer-icon pIcon fab fa-pinterest-p"></i></NavLink>
                  <NavLink to="/"><i className="footer-icon iIcon fab fa-linkedin-in"></i></NavLink>       
                </div>
               
            </div> 

                <div class="d-flex justify-content-between mt-5">
                    <button className="product"><a className="" href="#" rel="prev">&#171; Previous Post</a></button>                   
                    <button className="product"><a  href="#" rel="next">Next Post &#187;</a></button>                  
                </div>

                <h4>Related Post</h4>
                <hr />
                <div className="grid-3 mt-5">
                     
                     <div className="single-related-post">
                     <NavLink to=""><img src="../images/2.jpg" /></NavLink>
                     <NavLink className="related-post-title item" to="">The best advices to start your own project</NavLink>
                    <span>October 29, 2018</span>
                   
                    </div>
                
                   
                     <div className="single-related-post">
                     <NavLink to=""><img src="../images/9.jpg" /></NavLink>
                     <NavLink className="related-post-title item" to="">20+ Best Free HTML Marketplace Templates</NavLink>
                    <span>April 3, 2018</span>
                  
                    </div>
                </div>






   
</div>
     );
}
export default RecentPosts;
