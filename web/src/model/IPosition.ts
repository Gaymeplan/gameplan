export default interface IPosition {
    id?: number;
    name: string;
    description: string;
    attribute: string;
    gameplanId?: number;
}

export interface PositionInput {
    id: number;
    name: string;
    description: string;
    attribute: string;
    gameplanId?: number;
}
