import { gql } from '@apollo/client'

const notificationsQuery=gql`
            query {   
                notifications{
                    id
                    sender{
                      username
                    }
                    content
                    timeAgo
                }
            }
`

export default notificationsQuery