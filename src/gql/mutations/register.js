import { gql } from '@apollo/client'

const registerMutation=gql`
            mutation register($username:String!,$password:String!) {
              register(username: $username, password: $password) {
                  user{
                    username
                  }
              }
            }
`

export default registerMutation