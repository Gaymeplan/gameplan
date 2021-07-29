import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Alignment,
    Classes,
    Icon,
    Menu,
    MenuItem,
    Navbar,
    NavbarGroup,
    Tab,
    TabId,
    Tabs,
} from '@blueprintjs/core';
import Main from './components/Main';
import GameplanManager from './components/Main';
import styled from 'styled-components';

function App() {
    const [colorMode, setColorMode] = useState('Light');
    const [colorModeIcon, setColorModeIcon] = useState(
        getColorModeIcon('light')
    );

    const [selectedTabId, setSelectedTabId] = useState<TabId>('Gameplans');
    const handleNavbarTabChange = (navbarTabId: TabId) => {
        setSelectedTabId(navbarTabId);
    };

    return (
        <div className={getColorModeClassName(colorMode)}>
            <Navbar fixedToTop={true}>
                <NavbarGroup align={Alignment.LEFT}>
                    <Tabs
                        animate={true}
                        id="navbar"
                        large={true}
                        onChange={handleNavbarTabChange}
                        selectedTabId={selectedTabId}
                    >
                        <Tab id="Gameplans">
                            <MenuItem text="Gameplans" />
                        </Tab>
                    </Tabs>
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                    <Menu large={false}>
                        {colorMode === 'Light' && (
                            // <Icon
                            //     icon="moon"
                            //     style={{ marginBottom: '.75em' }}
                            // />

                            <MenuItem
                                icon="moon"
                                text={`${getColorModeText(colorMode)} theme`}
                                onClick={() => {
                                    setColorMode(getColorModeText(colorMode));
                                    setColorModeIcon(
                                        getColorModeIcon(colorMode)
                                    );
                                }}
                            />
                        )}
                        {colorMode === 'Dark' && (
                            // <Icon
                            //     icon="flash"
                            //     style={{ marginBottom: '.75em' }}
                            // />
                            <MenuItem
                                icon="flash"
                                text={`${getColorModeText(colorMode)} theme`}
                                onClick={() => {
                                    setColorMode(getColorModeText(colorMode));
                                    setColorModeIcon(
                                        getColorModeIcon(colorMode)
                                    );
                                }}
                            />
                        )}
                    </Menu>
                </NavbarGroup>
            </Navbar>
            <Main />
        </div>
    );
}

const handleNavbarTabChange = (navbarTabId: any, setState: any) => {
    setState({ navbarTabId });
};

const getColorModeIcon = (colorModeString: string) => {
    return colorModeString === 'light' ? 'flash' : 'moon';
};

const getColorModeText = (colorMode: string) => {
    return colorMode === 'Light' ? 'Dark' : 'Light';
};

const getColorModeClassName = (colorMode: string) => {
    return colorMode === 'Light' ? 'bp3-light' : 'bp3-dark';
};

export default App;
