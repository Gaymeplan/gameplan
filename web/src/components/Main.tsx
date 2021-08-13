import { Card } from '@blueprintjs/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import GameplanBody from './gameplan/gameplan-content/GameplanBody';
import GameplanSelector from './gameplan/GameplanSelector';

type MainProps = {};

const Main = (props: MainProps) => {
    const [gameplan, setGameplan] = useState();

    return (
        <Card style={{ marginTop: '31px', height: '100%' }}>
            <Container>
                <SideBar>
                    <Card>
                        <GameplanSelector setGameplan={setGameplan} />
                    </Card>
                </SideBar>
                <Body>
                    <Card>
                        <GameplanBody gameplan={gameplan} />
                    </Card>
                </Body>
                <Footer></Footer>
            </Container>
        </Card>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
        'sd sd main main main main main main main'
        'ft ft ft ft ft ft ft ft ft';
    grid-gap: 1em;
    padding: 1em;
`;

const Header = styled.div`
    grid-area: hd;
`;

const SideBar = styled.div`
    grid-area: sd;
`;

const Body = styled.div`
    grid-area: main;
`;

const Footer = styled.div`
    grid-area: ft;
`;

export default Main;
