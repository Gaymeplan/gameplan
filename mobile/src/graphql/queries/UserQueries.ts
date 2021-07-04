import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query {
        users {
            userName
            firstName
            lastName
            age
        }
    }
`;

export const GET_ANDREW = gql`
    {
        user(id: 1) {
            userName
            firstName
            lastName
            age
        }
    }
`;
