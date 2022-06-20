import { gql } from "@apollo/client";

export const USER_SUMMARY = gql`
    fragment UserSummary on User {
        userId
        username
        firstname
        lastname
        bio
        picture
    }
`