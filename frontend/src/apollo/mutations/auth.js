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

export const SIGN_UP_USER = gql `
    mutation registerUser($email: String!, $password: String!, $firstname: String!, $lastname: String!, $username:String!) {
        registerUser(email: $email, password: $password, firstname: $firstname, lastname: $lastname, username: $username) {
            ...UserSummary,
            userId
        }
    }, ${USER_SUMMARY}
`;