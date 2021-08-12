import { H2 } from '@blueprintjs/core';
import React from 'react';
import IGameplan from '../../../model/IGameplan';

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
        </div>
    );
};

export default GameplanBody;
