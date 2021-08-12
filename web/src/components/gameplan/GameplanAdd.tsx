import { useMutation } from '@apollo/client';
import {
    Button,
    Classes,
    Dialog,
    FormGroup,
    InputGroup,
    Intent,
} from '@blueprintjs/core';
import React, { useState } from 'react';
import { ADD_GAMEPLAN } from '../../gql/Gameplan';
import AppToaster from '../common/AppToaster';

type GameplanAddProps = {
    showGameplanAdd: boolean;
    setShowGameplanAdd: any;
};

const GameplanAdd = (props: GameplanAddProps) => {
    const [name, setName] = useState('');

    const [addGameplan] = useMutation(ADD_GAMEPLAN);

    if (!props.showGameplanAdd) return <div></div>;
    return (
        <Dialog
            isOpen={props.showGameplanAdd}
            onClose={() => props.setShowGameplanAdd(false)}
        >
            <div className={Classes.DIALOG_HEADER}>Add Gameplan</div>
            <div className={Classes.DIALOG_BODY}>
                <FormGroup
                    helperText="I.E (Naga Austin 2021)"
                    label="Name"
                    labelFor="text-input"
                    labelInfo="(required)"
                >
                    <InputGroup
                        id="text-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormGroup>
                <Button
                    disabled={name.length === 0}
                    intent={Intent.SUCCESS}
                    text="Save"
                    onClick={() => {
                        handleGameplanAdd(name, addGameplan);
                        props.setShowGameplanAdd(false);
                        setName('');
                    }}
                />
            </div>
        </Dialog>
    );
};

const handleGameplanAdd = (name: string, mutation: any) => {
    mutation({
        variables: { name },
    })
        .then((result: any) => {
            if (result) {
                AppToaster.show({
                    intent: Intent.SUCCESS,
                    message: `${name} added`,
                });
            } else {
                AppToaster.show({
                    intent: Intent.DANGER,
                    message: `Error adding ${name}`,
                });
            }
        })
        .catch((error: any) => {
            AppToaster.show({
                intent: Intent.DANGER,
                message: `Something went wrong...`,
            });
        });
};

export default GameplanAdd;
