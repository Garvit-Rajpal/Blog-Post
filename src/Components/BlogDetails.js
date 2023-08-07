import React from 'react';
import {NavLink} from 'react-router-dom';

const BlogDetails = ({post}) => {
  return (
    <div className='flex flex-col flex-wrap w-11/12 gap-y-1'>
            <NavLink to={`/blog/${post.id}`}>
            <p className='font-bold text-lg'>{post.title}</p>
            </NavLink>
            
            <p className='italic text-sm'>By <span>{post.author}</span> on 
            <NavLink to={`/category/${post.category.replaceAll(" ","-")}`}>
            <span className='ml-1 font-bold underline'>{post.category}</span>
            </NavLink>
            </p>
            <p className='text-sm'>Posted on {post.date}</p>
            <p className='text-md mt-4'>{post.content}</p>

            <div className='flex flex-wrap text-blue-700 underline gap-x-3'>
             {
                 post.tags.map((tag,index)=>(
                     <div id={index}>
                        <NavLink to={`/tag/${tag.replaceAll(" ","-")}`}>
                         <p className='text-xs'>#{tag}</p>
                         </NavLink>
                     </div>
                 ))
             }
            </div>

    </div>

  )
}

export default BlogDetails