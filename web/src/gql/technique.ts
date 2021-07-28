import { gql } from '@apollo/client';

export const TECHNIQUES = gql`
    query TechniqueList {
        techniques {
            id
            name
            description
        }
    }
`;

export const TECHNIQUE_BY_ID = gql`
    query TechniqueById($id: ID!) {
        technique(id: $id) {
            id
            name
            description
        }
    }
`;

export const ADD_TECHNIQUE = gql`
    mutation AddTechnique($name: String!, $description: String!) {
        addTechnique(name: $name, description: $description) {
            id
            name
            description
        }
    }
`;

export const UPDATE_TECHNIQUE = gql`
    mutation UpdateTechnique($id: Int!, $name: String!, $description: String!) {
        updateTechnique(id: $id, name: $name, description: $description)
    }
`;
