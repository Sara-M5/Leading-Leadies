import React from 'react';
import Post from '../../../Component/Post/Post';
import BlogSidebar from './BlogSidebar';
import Header from '../../../Parts/Header';
import LastPart from '../../../Parts/LastPart/LastPart';
const Blog = () => {
     return(
    <div >
       <Header 
       title="Latest news"
       subTitle="Blog"
       
       />
       <div className="row">
    
           <div className="col-md-8">
          
              <Post
               images="../images/6.JPG"
               title="The best advice to start your own project"
               label="Octobar 29, 2018"
               />

               <Post
               images="../images/9.JPG"
               title="Top Web Design Trends You Must Know in 2021"
               label="June 12, 2018"
               />


              

               <Post
               images="../images/2.JPG"
               title="Best Free Responsive WordPress Themes in 2020"
               label="May 11, 2018"
               />
               

           </div>
           <div className="col-md-4 my-5">      
               <BlogSidebar />
           </div>
          
       </div>

  
    <LastPart />
    </div>
    );
}
export default Blog;
