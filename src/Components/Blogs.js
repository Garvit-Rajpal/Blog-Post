import React from 'react'
import { AppContext } from '../Context/AppContext'
import {useContext} from 'react'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = () => {
    const {posts,loading} =useContext(AppContext);
  return (
    <div className='w-6/12 mx-auto mt-[66px] mb-[66px] flex flex-col gap-8'>
        {
            loading ?
            (<Spinner/>):
            (
               
                posts.length===0?
                <div>
                    No Posts found
                </div>
                :
                (
                    posts.map((post)=>(
                        <BlogDetails post={post}/>
                    )

                    )
                )
               
            )
        }
        
    </div>
  )
}

export default Blogs