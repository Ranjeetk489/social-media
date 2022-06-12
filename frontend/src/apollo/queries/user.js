import { gql } from "@apollo/client";
import { USER_SUMMARY } from "./fragments/user";

export const USER_DETAILS = gql`
    {
        query ($userId: ID!) {
            user(userId: $userId) {
                ...UserSummary
            }
        }
        ${USER_SUMMARY}
    }
`