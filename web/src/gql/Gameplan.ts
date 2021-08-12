import gql from 'graphql-tag';

export const GAMEPLANS = gql`
    query Gameplans {
        gameplans {
            id
            name
            positions {
                id
                name
                description
                attribute
                gameplanId
            }
        }
    }
`;

export const ADD_GAMEPLAN = gql`
    mutation AddGameplan($name: String!, $positions: [IPosition]) {
        createGameplan(name: $name, positions: $positions)
    }
`;

export const DELETE_GAMEPLAN = gql`
    mutation DeleteGameplan($id: Int!) {
        deleteGameplan(id: $id)
    }
`;
