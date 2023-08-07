import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'


const Tag = () => {
    const navigate =useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1); 
  return (
    <div>
        <Header/>
        <div className='mt-[80px] flex justify-center items-center gap-4 mr-[480px]'>
            <button
             className='border-2 border-black-400 py-1 px-3 rounded-md cursor-pointer '
             onClick={()=>navigate(-1)}>
                back
            </button>
            <p className='text-lg font-bold'>Blogs Tagged <span className='underline text-blue-600 italic font-bold'>#{tag}</span></p>

        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default Tag