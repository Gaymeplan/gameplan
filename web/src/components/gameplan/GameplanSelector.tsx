import { useMutation, useQuery } from '@apollo/client';
import {
    Button,
    Classes,
    Dialog,
    H1,
    H2,
    Intent,
    Menu,
    Spinner,
} from '@blueprintjs/core';
import React, { useState } from 'react';
import { ADD_GAMEPLAN, GAMEPLANS } from '../../gql/Gameplan';
import IGameplan from '../../model/IGameplan';
import AppToaster from '../common/AppToaster';
import GameplanAdd from './GameplanAdd';
import Gameplan from './GameplanMenuItem';

type GameplanSelectorProps = {};

const GameplanSelector = (props: GameplanSelectorProps) => {
    const { loading, error, data } = useQuery(GAMEPLANS, {
        pollInterval: 5000,
    });
    const [addGameplan] = useMutation(ADD_GAMEPLAN);
    const [showGameplanAdd, setShowGameplanAdd] = useState(false);

    if (loading) return <Spinner />;
    if (error) return <p>Error...</p>;
    return (
        <div>
            <H2>Gameplan Selector</H2>
            <Button
                intent={Intent.SUCCESS}
                icon="plus"
                text="Add Gameplan"
                style={{ width: '100%' }}
                onClick={() => setShowGameplanAdd(true)}
            />
            <GameplanAdd
                showGameplanAdd={showGameplanAdd}
                setShowGameplanAdd={setShowGameplanAdd}
            />
            <Menu>
                {data.gameplans.map((gameplan: IGameplan) => {
                    return <Gameplan key={gameplan.id} gameplan={gameplan} />;
                })}
            </Menu>
        </div>
    );
};

const handleGameplanAdd = (name: string, mutation: any, toaster: any) => {
    mutation({
        variables: { name },
    })
        .then((result: any) => {
            if (result) {
                toaster.show({
                    intent: Intent.SUCCESS,
                    message: `${name} added`,
                });
            } else {
                toaster.show({
                    intent: Intent.DANGER,
                    message: `Error adding ${name}`,
                });
            }
        })
        .catch((error: any) => {
            toaster.show({
                intent: Intent.DANGER,
                message: `Something went wrong...`,
            });
        });
};

export default GameplanSelector;
