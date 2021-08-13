import { Card, H2 } from '@blueprintjs/core';
import React from 'react';
import IGameplan from '../../../model/IGameplan';
import Positions from './position/Positions';

type GameplanBodyProps = {
    gameplan?: IGameplan;
};

const GameplanBody = (props: GameplanBodyProps) => {
    return (
        <div>
            <H2>Gameplan: {props.gameplan?.name}</H2>
            <Card>
                <Positions positions={props.gameplan?.positions} />
            </Card>
        </div>
    );
};

export default GameplanBody;
