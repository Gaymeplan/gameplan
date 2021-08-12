import { useQuery } from '@apollo/client';
import { Button, H2, Intent, Menu, Spinner } from '@blueprintjs/core';
import React, { useState } from 'react';
import { GAMEPLANS } from '../../gql/Gameplan';
import IGameplan from '../../model/IGameplan';
import GameplanAdd from './GameplanAdd';
import GameplanMenuItem from './GameplanMenuItem';

type GameplanSelectorProps = {
    setGameplan: any;
};

const GameplanSelector = (props: GameplanSelectorProps) => {
    const { loading, error, data } = useQuery(GAMEPLANS, {
        pollInterval: 5000,
    });
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
                    return (
                        <GameplanMenuItem
                            key={gameplan.id}
                            gameplan={gameplan}
                            setGameplan={props.setGameplan}
                        />
                    );
                })}
            </Menu>
        </div>
    );
};

export default GameplanSelector;
