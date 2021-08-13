import { gql } from '@apollo/client';

export const UPDATE_POSITION = gql`
    mutation UpdatePosition(
        $id: Int!
        $name: String!
        $description: String!
        $attribute: String!
    ) {
        updatePosition(
            id: $id
            name: $name
            description: $description
            attribute: $attribute
        )
    }
`;
