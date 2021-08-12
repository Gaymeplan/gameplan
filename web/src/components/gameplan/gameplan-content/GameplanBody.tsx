import { Card, H2 } from '@blueprintjs/core';
import React from 'react';
import IGameplan from '../../../model/IGameplan';
import IPosition from '../../../model/IPosition';

type GameplanBodyProps = {
    gameplan?: IGameplan;
};

const GameplanBody = (props: GameplanBodyProps) => {
    if (!props.gameplan) {
        return <H2>Select a gameplan from the left or create one!</H2>;
    }
    return (
        <div>
            <H2>{props.gameplan?.name}</H2>
            <Card>
                {props.gameplan.positions.map((position: IPosition, index) => {
                    return <div key={index}>{position.name}</div>;
                })}
            </Card>
        </div>
    );
};

export default GameplanBody;
