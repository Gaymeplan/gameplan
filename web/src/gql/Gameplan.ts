import gql from 'graphql-tag';

export const GAMEPLANS = gql`
    query Gameplans {
        gameplans {
            id
            name
        }
    }
`;

export const ADD_GAMEPLAN = gql`
    mutation AddGameplan($name: String!) {
        createGameplan(name: $name)
    }
`;

export const DELETE_GAMEPLAN = gql`
    mutation DeleteGameplan($id: Int!) {
        deleteGameplan(id: $id)
    }
`;
