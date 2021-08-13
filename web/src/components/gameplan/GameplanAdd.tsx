import { useMutation } from '@apollo/client';
import {
    Button,
    Classes,
    Dialog,
    FormGroup,
    HotkeysTarget2,
    InputGroup,
    Intent,
} from '@blueprintjs/core';
import React, { useState } from 'react';
import DEFAULT_POSITIONS from '../../DefaultPositions';
import { ADD_GAMEPLAN } from '../../gql/Gameplan';
import IPosition from '../../model/IPosition';
import AppToaster from '../common/AppToaster';
import PositionsTable from './gameplan-content/position/PositionsTable';

type GameplanAddProps = {
    showGameplanAdd: boolean;
    setShowGameplanAdd: any;
};

const GameplanAdd = (props: GameplanAddProps) => {
    const hotkeys = [
        {
            combo: 'ctrl + enter',
            global: true,
            label: 'save new gameplan',
            onKeyDown: () => {
                saveGameplan(
                    name,
                    positions,
                    addGameplan,
                    props.setShowGameplanAdd,
                    setName
                );
            },
        },
    ];

    const [name, setName] = useState('');
    const [positions, setPositions] = useState<IPosition[]>(DEFAULT_POSITIONS);

    const [addGameplan] = useMutation(ADD_GAMEPLAN);

    if (!props.showGameplanAdd) return <div></div>;
    return (
        <HotkeysTarget2 hotkeys={hotkeys}>
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
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    saveGameplan(
                                        name,
                                        positions,
                                        addGameplan,
                                        props.setShowGameplanAdd,
                                        setName
                                    );
                                }
                            }}
                        />
                    </FormGroup>
                    <PositionsTable
                        positions={positions}
                        setPositions={setPositions}
                    />
                    <Button
                        disabled={name.length === 0}
                        intent={Intent.SUCCESS}
                        text="Save"
                        onClick={() => {
                            saveGameplan(
                                name,
                                positions,
                                addGameplan,
                                props.setShowGameplanAdd,
                                setName
                            );
                        }}
                    />
                </div>
            </Dialog>
        </HotkeysTarget2>
    );
};

const saveGameplan = (
    name: string,
    positions: IPosition[],
    addGameplan: any,
    setShowGameplanAdd: any,
    setName: any
) => {
    handleGameplanAdd(name, positions, addGameplan);
    setShowGameplanAdd(false);
    setName('');
};

const handleGameplanAdd = (
    name: string,
    positions: IPosition[],
    mutation: any
) => {
    mutation({
        variables: { name, positions },
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
            console.warn(error, name, positions);
        });
};

export default GameplanAdd;
