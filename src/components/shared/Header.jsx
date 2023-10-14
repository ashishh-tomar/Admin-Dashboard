import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
const Header = () => {
  return (
    <div className=' h-16 px-4 flex justify-between items-center w-full'>
        
        
        <div className='text-lg '>
            Hi Ashish !! 👋
        </div>
        
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 '/>
            <input type='text' placeholder='Search...'  className='text-sm focus:outline-none h-10 w-[18rem] border border-grey-300 rounded-sm pl-11 pr-4 '/>
        </div>
        
    </div>
  )
}

export default Header