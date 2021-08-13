import { Field, InputType } from 'type-graphql';

export default interface IPosition {
    id?: number;
    name: string;
    description: string;
    attribute: string;
    gameplanId?: number;
}

export default interface PositionInput {
    id?: number;
    name: string;
    description: string;
    attribute: string;
    gameplanId?: number;
}
