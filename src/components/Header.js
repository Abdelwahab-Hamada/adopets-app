import User from "./User"
import Notifications from "./Notifications"
import {UserIcon,XIcon,MenuIcon,LoginIcon,LogoutIcon,HomeIcon,PencilIcon } from '@heroicons/react/solid'
import { useNavigate,NavLink,useLocation } from "react-router-dom";
import Nav from "./Nav";
import PostAd from "./PostAd";

const Header = () => {
  const logged=(JSON.parse(localStorage.getItem("logged")) || false)
  const navTo=useNavigate()
  


  return (
    <div className="absolute w-full right-0 px-2 flex text-black/25 bg-black/25 rounded z-10 h-8">
        <div className="h-fit">        
          {logged 
            ? (<div className=" gap-2 w-full h-fit flex ">   
                
                <div className="absolute top-9 left-1 sm:bottom-9">
                <Notifications />
                <PostAd/>

                </div>

              </div>)
            : ""
          }
          
        </div>
        <div className="gap-2 w-full h-fit flex justify-between ">   
          <Nav />
          <img alt="Adopets Logo" className=" w-32" src={process.env.PUBLIC_URL+"/logo192.png"} />
          <User />

        </div>
    </div>
  )
}

export default Header