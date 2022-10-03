import { Outlet } from "react-router-dom"
import { Routes, Route } from 'react-router-dom';

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Header from "./components/Header";
import UserPets from "./pages/UserPets";
import Post from "./pages/Post";

import RequireAuth from './components/RequireAuth';
function App() {

  return (
    <div className=' font-mono flex flex-col h-screen mx-1 '>
      <div className='flex-1 flex justify-center overflow-hidden'>
      
        <div className='relative overflow-hidden justify-center flex gap-2  p-1 w-full rounded sm:w-full md:w-8/12 lg:w-6/12'>
          <Header/>
          <>
            <Routes >
              <Route path="adopets-app/" element={<Outlet />}>
                <Route path="login/" element={<Login />} />
                <Route path="register/" element={<Register />} />
                

                <Route element={<RequireAuth />}>
                    <Route path="my-pets/" element={<UserPets />} />
                    <Route path="post/" element={<Post />} />
                </Route>
                
                <Route path="" element={<Home />} />
              </Route>
            </Routes>
          </>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
