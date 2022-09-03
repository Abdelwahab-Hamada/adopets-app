import { gql } from '@apollo/client'

const requestPetMutation=gql`
                mutation ($id:String!) {
                    reqPet(petId:$id) {
                        created
                    }
                }
`

export default requestPetMutation