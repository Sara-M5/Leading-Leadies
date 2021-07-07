import React from 'react';
import LastPart from '../../../../Parts/LastPart/LastPart';
import BlogSidebar from '../BlogSidebar';
import RecentPosts from '../../../../Component/RecentPosts/RecentPosts';


const Posts = (props) => {

    return (
        <div className="singlePage">
            <div className="breadcrumb-banner">
               <div className="container">
                    <h1 className="text-white py-4">Best Free Responsive WordPress Themes in 2020</h1> 
                    <ol className="breadcrumb text-white">
                    <li className="breadcrumb-item"><a className="link text-white" href="/Home">Home</a> </li>
                    <li><span className="px-2">&#187;</span></li>
                    <li className="breadcrumb-item"><a className="link text-white" href="/Blog">Blog</a> </li>
                    <li><span className="px-2"> &#187;</span></li>
                    <li className="active ">Best Free Responsive WordPress Themes in 2020</li>
                    </ol>
               </div>
            </div>

            <div className="row">
                 <div className="col-md-8">
                 <RecentPosts />
                 </div>
                 <div className="col-md-4">
                 <BlogSidebar />
                 </div>
            </div>
      <LastPart />
    </div>
    );
}
export default Posts;
