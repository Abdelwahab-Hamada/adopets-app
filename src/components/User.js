import {UserIcon,XIcon,MenuIcon,LoginIcon,LogoutIcon } from '@heroicons/react/solid'
import { useNavigate } from "react-router-dom";
import { Popover } from '@headlessui/react'
import { useMutation } from '@apollo/client'

import logoutMutation from '../gql/mutations/logout';



const User = () => {
    const logged=(JSON.parse(localStorage.getItem("logged")) || false)

    const [logout]=useMutation(logoutMutation)

    const navTo=useNavigate()

    let log=logged
          ? <>
                <button 
                className='relative '
                onClick={()=>{
                logout()
                localStorage.setItem("logged", false);
                navTo('/adopets-app/login')
                }}><LogoutIcon className=' bg-white/40  rounded p-0.5 w-6 peer ...'/>
                <span className="hidden absolute peer-hover:block whitespace-nowrap bg-black/50 text-white px-1 rounded right-full top-2 text-xs font-bold ">Logout</span> 
                </button>
                
            </>
          : <>
                <button 
                className='relative pt-0.5'
                onClick={()=>navTo('/adopets-app/login')}><LoginIcon className='bg-white/40  rounded  w-5 my-0.5 peer ...'/>
                <span className="hidden absolute peer-hover:block whitespace-nowrap bg-black/50 text-white px-1 rounded right-full top-2 text-xs font-bold">Login</span> 
                
                </button>
                {/* <button 
                className=' bg-black/30 rounded-full hover:text-black no-underline text-white px-1 mb-1'
                onClick={()=>navTo('/adopets-app/register')}>Register</button> */}
            </>

  return (
            <>
                {log}
            </>
  )
}

export default User