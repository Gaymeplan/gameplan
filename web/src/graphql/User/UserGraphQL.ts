import gql from 'graphql-tag';

export const GET_USERS = gql`
    {
        users {
            userName
            firstName
            lastName
            age
        }
    }
`;
