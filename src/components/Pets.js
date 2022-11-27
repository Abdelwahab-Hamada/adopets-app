import {useState,useRef} from 'react'
import { useQuery,useMutation,gql, } from '@apollo/client'
import requestPetMutation from '../gql/mutations/reqPet'
import {PlusIcon,ArrowCircleUpIcon,RefreshIcon } from '@heroicons/react/solid'


const Pets = ({query}) => {
    const {loading,data,error,refetch,}=useQuery(query,{fetchPolicy:'no-cache'})
    const [request,{data:response}]=useMutation(requestPetMutation,)
    const [hidden,setHidden]=useState('hidden')
    const [inner,setInner]=useState('test')
    const img=useRef()
    
    const spinner = (
        <svg role="status" className="inline mx-auto m-auto w-6 h-6 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
        </svg>
        )

    if (loading) return (
        <div className=' w-full h-full flex justify-center'>
            {spinner}
        </div>
    )

    if(!data.pets.length) return (
        
        <div className='py-11 w-full h-full flex justify-center'>
            <p>No pets yet click on pen to post a pet.</p>
        </div>
    )

    return (
    <div className=' h-full overflow-auto scrollbar p-5 py-11'>
        <div ref={img} className={` p-10 flex justify-center items-center bg-black/25 h-full absolute w-full left-0 top-0 z-10 ${hidden} cursor-pointer`} onClick={()=>setHidden('fadeOut-it-timeless-close ')}>
            {inner}
        </div>
        <div className='sm:columns-1 md:columns-2 lg:columns-3 gap-5'>
            {data?.pets.map((pet)=>(
                <div className='relative mb-5 ' key={pet.id}>
                    <h1 className=' rounded-tl-lg rounded-br-lg  absolute bg-black/25 font-bold  px-2 text-white'>{pet.name}</h1>
                    <img className=' gallery-img rounded-lg '  src={pet.photo} onClick={()=>{
                        setHidden('fadeOut-it-timeless')
                        setInner(<img className='shadowy object-cover w-fit h-fit ' src={pet.photo}/>)
                        }}/>
                    <button className='absolute  -bottom-3 shadowy rounded-full right-2 ' onClick={()=>{
                        request({variables:{id:pet.id}})
                    }}><PlusIcon className='w-7 p-1 bg-black/25 text-white  hover:w-8 ease-in-out duration-200 rounded-full'/></button>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Pets