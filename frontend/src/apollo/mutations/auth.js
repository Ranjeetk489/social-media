import { gql } from '@apollo/client';
import { USER_SUMMARY } from '../fragments';

export const LOG_IN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            ...UserSummary, 
            userId
        }
    },${USER_SUMMARY}
`;
