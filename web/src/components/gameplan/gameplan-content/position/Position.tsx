import { Card, H2 } from '@blueprintjs/core';
import React from 'react';
import IPosition from '../../../../model/IPosition';

type PositionProps = {
    position: IPosition;
};

const Position = (props: PositionProps) => {
    return (
        <Card>
            <H2>
                {props.position.attribute} - {props.position.name}
            </H2>
        </Card>
    );
};

export default Position;
