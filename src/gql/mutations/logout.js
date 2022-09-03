import { gql } from '@apollo/client'

const logoutMutation=gql`
            mutation deleteCookies {
              deleteTokenCookie{
                deleted
              }
              deleteRefreshTokenCookie{
                deleted
              }
            }
`

export default logoutMutation