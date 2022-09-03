import { useRef, useState, useEffect } from 'react';
import { useMutation, } from '@apollo/client'
import { useNavigate,useLocation,Link } from "react-router-dom";

import userPetsQuery from '../gql/queries/userPets';
import petsQuery from '../gql/queries/listPets'
import createPetMutation from '../gql/mutations/createPet'

const Post = ({Popover}) => {
    const nameRef=useRef()
    const [name,setName]=useState('')
    const [age,setAge]=useState()
    const [photo,setPhoto]=useState('')
    const [msg,setMsg]=useState('')

    const navTo=useNavigate()


    const [post,{loading,data,error}]=useMutation(createPetMutation,{
        refetchQueries:{
            userPetsQuery,
            petsQuery
        }
    })

    let spinner = (loading
        ? (
          <svg role="status" className="inline mr-3 w-4 h-4 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg>
          )
        : '' )

    const handlePost=async (e)=>{
        e.preventDefault()
    
        try {
    
            const {data}=await post({variables:{
            name:name,
            age:age,
            photo:photo
            }})
            
            setMsg(<p className='text-green-600 inline-block'>
                Succssefully Posted 
            </p>)
            navTo('/adopets-app/my-pets/')  
        } catch (error){ 
            setMsg(<p className='text-red-600 inline-block'>
                {error?.message}
            </p>)
            setTimeout(()=>setMsg(''), 3000)     
        }
        
        }
  return (
    <div className='w-72 bg-white rounded my-7 p-5'>
        <h1 className='text-center text-5xl font-mono'>Post</h1>

        <form onSubmit={handlePost} className='mt-7 '>
            <div className='w-full flex flex-col-reverse relative'>
                <input
                    type="text"
                    id="name"
                    ref={nameRef}
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    className="font-mono pt-0.5 peer ... border-b-2 
                    focus:outline-none w-full "
                    placeholder=' '
                />
                <label 
                htmlFor="name"
                className='
                rounded px-1 text-xs font-mono ml-0 absolute 
                peer-placeholder-shown:top-1.5 -top-3/4
            text-white bg-gray-500 duration-300 ease-in-out 
                peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:border-none
                peer-placeholder-shown:bg-transparent
                '
                >Pet Name</label>
            </div>
            
            <div className='w-full flex flex-col-reverse relative mt-7'>
                <input
                    type="number"
                    id="age"
                    autoComplete="off"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    required
                    className="font-mono pt-0.5 peer ... border-b-2 
                    focus:outline-none w-full "
                    placeholder=' '
                />
                <label 
                htmlFor="age"
                className='
                rounded px-1 text-xs font-mono ml-0 absolute 
                peer-placeholder-shown:top-1.5 -top-3/4
            text-white bg-gray-500 duration-300 ease-in-out 
                peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:border-none
                peer-placeholder-shown:bg-transparent
                '
                >Pet Age</label>
            </div>

            <input className='mt-2 block' type='file' onChange={(e)=>setPhoto(e.target.files[0])}/>

            
            <button 
            className='inline-block mt-2 border-2 w-fit rounded px-2 hover:bg-black/10 mr-2'>
            
            Post</button>
            
            {spinner}
            {msg}

        </form>
    </div>
  )
}

export default Post