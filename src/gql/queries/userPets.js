import { gql } from '@apollo/client'

const userPetsQuery=gql`
            query {   
                pets:ownerPets{
                id
                name
                photo
                age
                }
            }
`

export default userPetsQuery