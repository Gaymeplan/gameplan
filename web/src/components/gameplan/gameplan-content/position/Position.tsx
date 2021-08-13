import { Card, H2, Intent, TextArea } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react';
import IPosition from '../../../../model/IPosition';

type PositionProps = {
    position: IPosition;
};

const Position = (props: PositionProps) => {
    const [name, setName] = useState(props.position.name);
    const [description, setDescription] = useState(props.position.description);
    const [attribute, setAttribute] = useState(props.position.attribute);
    const color = props.position.attribute === 'In My' ? '#20a06b' : '#d64646';

    useEffect(() => {
        setName(props.position.name);
        setDescription(props.position.description);
        setAttribute(props.position.attribute);
        return () => {
            // do nothing
        };
    }, [props.position]);

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
            <TextArea
                growVertically={true}
                large={true}
                intent={Intent.PRIMARY}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
        </Card>
    );
};

export default Position;
