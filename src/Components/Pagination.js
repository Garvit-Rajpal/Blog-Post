import React from 'react'
import { AppContext } from '../Context/AppContext'
import {useContext} from 'react'

const Pagination = () => {
    const {page,totalPages,pageHandler}=useContext(AppContext);
  return (
    <div className='flex w-full fixed bottom-0 justify-center items-center  bg-white border border-b-black-400 py-3'>
        <div className='flex w-6/12 justify-between  items-center'>
        <div className='flex gap-4'>
            {
                page>1 &&
                <button
                 className='border-2 border-black-400 py-1 px-3 rounded-md cursor-pointer '
                 onClick={()=>(pageHandler(page-1))}>
                   Previous
                </button>

            }

           {
                page<totalPages &&
                <button
                 className='border-2 border-black-400 py-1 px-3 rounded-md cursor-pointer '
                 onClick={()=>(pageHandler(page+1))}>
                   Next
                </button>

            }
        
        </div>
        <div>
            <p className='font-bold text-sm'>Page {page} of {totalPages}</p>
        </div>
        </div>
    </div>
  )
}

export default Pagination