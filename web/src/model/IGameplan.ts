import IPosition from './IPosition';

export default interface IGameplan {
    id: number;
    name: string;
    positions: IPosition[];
}
