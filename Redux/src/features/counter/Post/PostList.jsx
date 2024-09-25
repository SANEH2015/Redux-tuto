import { useSelector } from "react-redux";
import { selectAllposts } from "./PostSlice";

import React from 'react'

const PostList = () => {
    const posts =useSelector(selectAllposts)
    const renderedposts = posts.map(post => (
        <article key={post.id} style={{border:"1px solid" ,margin:"10px",borderRadius:"5px",padding:"10px"}}>
         <h3>{post.title}</h3>
         <p>{post.content.substring(0 ,100)}</p>
        </article>
    ))
  return (
  <section>
    <h2>Posts</h2>
    {renderedposts }
  </section>
  )
}

export default PostList
