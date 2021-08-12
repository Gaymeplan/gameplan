import { Classes, H4, HTMLTable } from '@blueprintjs/core';
import React from 'react';
import IPosition from '../../../../model/IPosition';

type PositionsProps = {
    positions: IPosition[];
    setPositions: any;
};

const Positions = (props: PositionsProps) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '50% 50%',
                gridGap: '2em',
            }}
        >
            {props.positions.map((position: IPosition, index) => {
                return (
                    <div key={index}>
                        <H4 className={Classes.HEADING}>
                            {position.attribute} - {position.name}
                        </H4>
                        <HTMLTable striped bordered condensed>
                            <thead>
                                <tr>
                                    <th>A</th>
                                    <th>B</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Technique A</td>
                                    <td>Technique B</td>
                                </tr>
                            </tbody>
                        </HTMLTable>
                    </div>
                );
            })}
        </div>
    );
};

export default Positions;
