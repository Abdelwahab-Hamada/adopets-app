import { useSubscription,useMutation,gql,useQuery } from '@apollo/client'
import { notificationsSubscribtion } from '../gql/subscribtions/notifications'
import { useState,useEffect } from 'react'
import notificationsQuery from '../gql/queries/notifications'

import { Popover } from '@headlessui/react'
import {UserIcon,XIcon,MenuIcon,LoginIcon,LogoutIcon,BellIcon } from '@heroicons/react/solid'

import LatestNotifs from './latestNotifs'

const Notifications = () => {
    const [alert,setAlert]=useState('')
    const [msg,setMsg]=useState('')
    const [hidden,setHidden]=useState('hidden')
    const {}=useSubscription(
          notificationsSubscribtion,{
            reconnect:true,
            variables:{},
            onSubscriptionData:(data)=>{
              setMsg(data.subscriptionData.data?.subscribeNotifications.content)
              setHidden('fadeOut-it')
              setTimeout(()=>{
                setHidden('hidden')
                setAlert('text-red-500 ring-it')
              }, 2000)
            },
          },
        )


   
  return (
    <>
        <Popover className=" w-fit  mt-2 ml-2">
          <Popover.Button onClick={()=>setAlert('')} className={`relative h-full shadowy rounded-full focus:outline-none  `}><BellIcon className= {` w-9 p-2 bg-black/25 text-white  hover:w-10 hover:p-2.5 ease-in-out duration-200 rounded-full peer ... ${alert}`}/>
            <p className={` whitespace-nowrap top-0 px-4 ml-1 rounded absolute left-full ${hidden}  text-white bg-black/50`} >{msg}</p>
            {/* <span className="hidden absolute peer-hover:block whitespace-nowrap bg-black/50 text-white px-1 rounded left-0 -top-3 text-xs font-bold">Notifications</span> */}

          </Popover.Button>
          <Popover.Panel className="  overflow-hidden w-fit h-72 rounded left-0
             absolute  px-2  z-10 text-white bg-black/50 py-10 ">
              <Popover.Button className="absolute top-3 right-5">
                <XIcon className=' w-6 p-1 bg-black/50 text-white rounded-full hover:bg-black/25'/>
              </Popover.Button>
              <LatestNotifs />
          </Popover.Panel>
        </Popover>
    </>
  )
}

export default Notifications