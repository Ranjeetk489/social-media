import { gql } from "@apollo/client";

export const USER_SUMMARY = gql`
    fragment UserSummary on User {
        username
        firstName
        lastName
        bio
        picture
    }
`