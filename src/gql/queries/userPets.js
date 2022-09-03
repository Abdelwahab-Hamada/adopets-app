import { gql } from '@apollo/client'

const userPetsQuery=gql`
            query {   
                pets:ownerPets{
                id
                name
                photo
                }
            }
`

export default userPetsQuery