import { gql } from '@apollo/client'

const petsQuery=gql`
            query {   
                pets{
                id
                name
                photo
                }
            }
`

export default petsQuery