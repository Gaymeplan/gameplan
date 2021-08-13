import React from 'react';
import IPosition from '../../../../model/IPosition';
import Position from './Position';

type PositionsProps = {
    positions?: IPosition[];
};

const Positions = (props: PositionsProps) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '45% 45%',
                gridGap: '2em',
                marginLeft: '4em',
            }}
        >
            {props.positions?.map((position, index) => {
                return <Position key={index} position={position} />;
            })}
        </div>
    );
};

export default Positions;
