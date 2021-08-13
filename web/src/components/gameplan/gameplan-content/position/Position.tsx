import { useMutation } from '@apollo/client';
import { Card, H2, HotkeysTarget2, Intent, TextArea } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react';
import { UPDATE_POSITION } from '../../../../gql/Position';
import IPosition from '../../../../model/IPosition';
import AppToaster from '../../../common/AppToaster';

type PositionProps = {
    position: IPosition;
};

const Position = (props: PositionProps) => {
    const hotkeys = [
        {
            combo: 'ctrl + enter',
            global: true,
            label: 'Update Position',
            onKeyDown: () => {
                const id = !props.position.id ? 0 : props.position.id;
                handleUpdatePosition(
                    id,
                    name,
                    description,
                    attribute,
                    updatePosition
                );
            },
        },
    ];

    const [name, setName] = useState(props.position.name);
    const [description, setDescription] = useState(props.position.description);
    const [attribute, setAttribute] = useState(props.position.attribute);
    const attributeBackgroundColor =
        props.position.attribute === 'In My' ? '#20a06b' : '#d64646';

    // Update the component when the props change
    useEffect(() => {
        setName(props.position.name);
        setDescription(props.position.description);
        setAttribute(props.position.attribute);
        return () => {
            // do nothing
        };
    }, [props.position]);

    const [updatePosition] = useMutation(UPDATE_POSITION);

    return (
        <HotkeysTarget2 hotkeys={hotkeys}>
            <Card>
                <H2>
                    <span
                        style={{
                            backgroundColor: attributeBackgroundColor,
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
        </HotkeysTarget2>
    );
};

const handleUpdatePosition = (
    id: number,
    name: string,
    description: string,
    attribute: string,
    mutation: any
) => {
    mutation({ variables: { id, name, description, attribute } })
        .then((result: any) => {
            if (result) {
                AppToaster.show({
                    intent: Intent.SUCCESS,
                    message: `${name} updated`,
                });
            } else {
                AppToaster.show({
                    intent: Intent.DANGER,
                    message: `Error updating ${name}`,
                });
            }
        })
        .catch((error: any) => {
            AppToaster.show({
                intent: Intent.DANGER,
                message: `Something went wrong...`,
            });
            console.warn(error);
        });
};

export default Position;
