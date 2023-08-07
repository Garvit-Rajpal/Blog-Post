import React from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from '../Components/Spinner';
import {useLocation,useNavigate} from 'react-router-dom';
import {useContext,useState,useEffect} from 'react';
import Header from '../Components/Header';
import BlogDetails from '../Components/BlogDetails';
 

const BlogPost = () => {
    const {loading,setLoading}=useContext(AppContext);
    const [blog,setBlog]=useState(null);
    const [relatedBlogs,setRelatedBlogs]=useState([]);
    const location =useLocation();
    const navigate=useNavigate();
    const blogId=location.pathname.split("/").at(-1);
    const newBaseUrl="https://codehelp-apis.vercel.app/api/"
    
    // Function to fetch related blogs
    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);

        try{
            const data=await fetch(url);
            const output= await data.json();
            setBlog(output.blog);
            setRelatedBlogs(output.relatedBlogs);
            console.log(relatedBlogs);

        }
        catch(error){
           console.log("dost pht gya api call");
           setBlog(null);
           setRelatedBlogs([]);
        }
        setLoading(false);

    }
    useEffect(()=>{
        if(blogId){
        
        fetchRelatedBlogs();
        }

    },[location.pathname])
  return (
    <div>
        <Header/>
        <div className='mt-[80px] flex justify-center mr-[660px]'>
            <button
             className='border-2 border-black-400 py-1 px-3 rounded-md cursor-pointer '
             onClick={()=>navigate(-1)}>
                back
            </button>
        </div>
        {
            loading?(<Spinner/>):
            blog? (
                <div className='w-6/12 mx-auto mt-2 mb-[66px] flex flex-col gap-8'>
                    <BlogDetails post={blog}/>
                    <h3 className='font-bold text-2xl'>Related Blogs</h3>
                    {
                       relatedBlogs.map((post)=>{
                        return(<div key={post.id}>
                            <BlogDetails post={post}/>
                        </div>)
                      })
                   }
                </div>
            ):
            (<div>No Blogs Found</div>)
        }

    </div>
  )
}

export default BlogPost;