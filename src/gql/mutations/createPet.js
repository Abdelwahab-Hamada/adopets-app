import { gql } from '@apollo/client'

const createPetMutation=gql`
                mutation create ($name:String!,$age:Int!,$photo:Upload!) {
                    createPet( name: $name,age:$age,photo:$photo) {
                        pet {
                            id
                        }
                    }
                }
`

export default createPetMutation