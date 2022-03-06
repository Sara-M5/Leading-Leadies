import React from "react";
import Post from "../../../Component/Post/Post";
import BlogSidebar from "./BlogSidebar";
import Header from "../../../Parts/Header";
import LastPart from "../../../Parts/LastPart/LastPart";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const BLOG_POSTS = gql`
  {
    allBlogPosts {
      title
      published
      image {
        publicUrl
      }
    }
  }
`;

const Blog = () => {
  const { loading, error, data } = useQuery(BLOG_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Header title="Latest news" subTitle="Blog" />
      <div className="row">
        <div className="col-md-8">
          {data.allBlogPosts.map(({ title, published, image }) => (
            <Post images={image.publicUrl} title={title} label={published} />
          ))}
        </div>
        <div className="col-md-4 my-5">
          <BlogSidebar />
        </div>
      </div>

      <LastPart />
    </div>
  );
};
export default Blog;
