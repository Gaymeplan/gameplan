import { Classes, Dialog } from '@blueprintjs/core';
import React from 'react';

type GameplanAddProps = {
    showGameplanAdd: boolean;
    setShowGameplanAdd: any;
};

const GameplanAdd = (props: GameplanAddProps) => {
    if (!props.showGameplanAdd) return <div></div>;
    return (
        <Dialog
            isOpen={props.showGameplanAdd}
            onClose={() => props.setShowGameplanAdd(false)}
        >
            <div className={Classes.DIALOG_BODY}>
                <p>
                    <strong>
                        Data integration is the seminal problem of the digital
                        age. For over ten years, we’ve helped the world’s
                        premier organizations rise to the challenge.
                    </strong>
                </p>
            </div>
        </Dialog>
    );
};

export default GameplanAdd;
