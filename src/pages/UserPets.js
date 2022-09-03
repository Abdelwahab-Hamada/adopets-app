import React from 'react'
import userPetsQuery from '../gql/queries/userPets'
import Pets from '../components/Pets'

const UserPets = () => {
    const content=(
            
        <div className='relative '>
            <Pets query={userPetsQuery}/>
        </div>
    )
    return content
}

export default UserPets