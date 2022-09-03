import { gql } from '@apollo/client'

export const notificationsSubscribtion=gql`
            subscription {
                subscribeNotifications{
                    content 
                }
            }
`
