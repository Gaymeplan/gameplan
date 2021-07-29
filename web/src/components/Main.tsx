import { Card, Classes, H1 } from '@blueprintjs/core';
import React from 'react';
import styled from 'styled-components';
import GameplanSelector from './gameplan/GameplanSelector';

type MainProps = {};

const Main = (props: MainProps) => {
    return (
        <Card style={{ marginTop: '31px', height: '1021px' }}>
            <Container>
                {/* <Header>
                    <Card>
                        <H1>Header</H1>
                    </Card>
                </Header> */}
                <SideBar>
                    <Card>
                        <GameplanSelector />
                    </Card>
                </SideBar>
                <Body>
                    <Card>
                        <H1>Body</H1>
                    </Card>
                </Body>
            </Container>
        </Card>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
        // 'hd hd hd hd hd hd hd hd hd'

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

export default Main;
