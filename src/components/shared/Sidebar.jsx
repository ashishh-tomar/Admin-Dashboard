import React from 'react'
import { FcBusinessman, FcEnteringHeavenAlive } from "react-icons/fc";
import { SIDEBAR_LINKS} from '../../lib/consts/navigation.jsx';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames'


const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
const Sidebar = () => {
  return (
    <div className='flex flex-col bg-neutral-900 text-white w-60 p-3'>
      
      <div className='flex items-center gap-2 px-1 py-1'>
        <FcEnteringHeavenAlive fontSize={24}/>
        <span className='text-neutral-100 text-lg '>Dashboard</span>
      </div>
      
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {
          SIDEBAR_LINKS.map((item)=>(
            <SidebarLinks key={item.key} item={item} />
          ))
        }

      </div>


      <div className = 'flex items-center gap-2 font-light px-3 py-2 bg-neutral-600 rounded-sm text-base cursor-pointer' >
        <span className='text-xl'><FcBusinessman /></span>
        <p>Ashish Tomar</p>
      </div>
    </div>
  )
}


function SidebarLinks ({item}){

  const {pathname} = useLocation();


  return(
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-blue-300' : '',linkClasses)}>
        <span className='text-xl'>{item.icon}</span>
         {item.lable}
    </Link>
  )
}

export default Sidebar