import { Card, H2 } from '@blueprintjs/core';
import React, { useState } from 'react';
import IPosition from '../../../../model/IPosition';

type PositionProps = {
    position: IPosition;
};

const Position = (props: PositionProps) => {
    const [name, setName] = useState(props.position.name);
    const [description, setDescription] = useState(props.position.description);
    const [attribute, setAttribute] = useState(props.position.attribute);
    const color = props.position.attribute === 'In My' ? '#20a06b' : '#d64646';

    return (
        <Card>
            <H2>
                <span
                    style={{
                        backgroundColor: color,
                        borderRadius: '.25em',
                        width: '150%',
                    }}
                >
                    {attribute}
                </span>{' '}
                - {name}
            </H2>
        </Card>
    );
};

export default Position;
