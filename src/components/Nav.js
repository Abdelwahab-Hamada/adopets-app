import { useNavigate,NavLink,useLocation } from "react-router-dom";
import {UserIcon,XIcon,MenuIcon,LoginIcon,LogoutIcon,HomeIcon,PencilIcon } from '@heroicons/react/solid'

import React from 'react'

const Nav = () => {
    const navTo=useNavigate()
    const location=useLocation()
    const logged=(JSON.parse(localStorage.getItem("logged")) || false)

  return (
    <div className="relative flex bg-white/40 w-fit mt-1 rounded">
        <button 
        className={
        (location.pathname === '/adopets-app/' || location.pathname === '/adopets-app')
        ? `pb-1 bg-white rounded`
        : ``
        }
        onClick={()=>navTo('/adopets-app/')}>         
            <HomeIcon className=" peer ... w-5 "/>
            
        </button>
        <button 
        className={
        (location.pathname === '/adopets-app/my-pets/' || location.pathname === '/adopets-app/my-pets')
        ? `pb-1 bg-white rounded`
        : ``
        }
        onClick={()=>{
            logged
            ? navTo('/adopets-app/my-pets/',{state:{from:location}})
            : navTo('/adopets-app/login',{state:{from:'/adopets-app/my-pets/'}})
            }}>         
            <UserIcon className="w-5 peer ..."/>
            <span className="hidden absolute peer-hover:block whitespace-nowrap bg-black/50 text-white px-1 rounded left-full bottom-1 text-xs font-bold">My Ads</span>
        </button>
    </div>
  )
}

export default Nav