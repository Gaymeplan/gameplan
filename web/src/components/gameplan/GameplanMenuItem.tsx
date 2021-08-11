import { useMutation } from '@apollo/client';
import {
    Button,
    Classes,
    Icon,
    Intent,
    MenuItem,
    Tab,
} from '@blueprintjs/core';
import React from 'react';
import { DELETE_GAMEPLAN } from '../../gql/Gameplan';
import IGameplan from '../../model/IGameplan';
import AppToaster from '../common/AppToaster';

type GameplanMenuItemProps = {
    gameplan: IGameplan;
};

const GameplanMenuItem = (props: GameplanMenuItemProps) => {
    const [deleteGameplan] = useMutation(DELETE_GAMEPLAN);

    return (
        <div>
            <MenuItem
                text={props.gameplan.name}
                icon={
                    <Button
                        icon={<Icon icon="star" color="gold" />}
                        className={Classes.SMALL}
                    />
                }
                labelElement={
                    <Button
                        icon="trash"
                        intent={Intent.DANGER}
                        className={Classes.SMALL}
                        onClick={() => {
                            handleGameplanDelete(
                                props.gameplan,
                                deleteGameplan,
                                AppToaster
                            );
                        }}
                    />
                }
            ></MenuItem>
        </div>
    );
};

const handleGameplanDelete = (
    gameplan: IGameplan,
    mutation: any,
    toaster: any
) => {
    const id: number = gameplan.id;
    mutation({
        variables: { id },
    })
        .then((result: any) => {
            if (result) {
                toaster.show({
                    intent: Intent.SUCCESS,
                    message: `${gameplan.name} deleted`,
                });
            } else {
                toaster.show({
                    intent: Intent.DANGER,
                    message: `Error deleting ${gameplan.name}`,
                });
            }
        })
        .catch((error: any) => {
            console.warn(error);
            toaster.show({
                intent: Intent.DANGER,
                message: `Something went wrong...`,
            });
        });
};

export default GameplanMenuItem;
