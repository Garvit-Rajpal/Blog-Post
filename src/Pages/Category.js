import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'

const Category = () => {

    const navigate =useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1); 
    // console.log(category);
  return (
    <div>
        <Header/>
        <div className='mt-[80px] flex justify-center items-center gap-4 mr-[350px] '>
            <button
             className='border-2 border-black-400 py-1 px-3 rounded-md cursor-pointer '
             onClick={()=>navigate(-1)}>
                back
            </button>
            <p className='font-bold text-lg '>Blogs on {category}</p>

        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default Category