import {
    Alignment,
    Button,
    Classes,
    Icon,
    MenuItem,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Tab,
    TabId,
    Tabs,
} from '@blueprintjs/core';
import React, { useState } from 'react';
import './App.css';

import Techniques from './components/technique/techniques';

function App() {
    const [colorMode, setColorMode] = useState('light');
    const [colorModeIcon, setColorModeIcon] = useState(
        getColorModeIcon('light')
    );

    const [selectedTabId, setSelectedTabId] = useState<TabId>('Home');
    const handleNavbarTabChange = (navbarTabId: TabId) => {
        setSelectedTabId(navbarTabId);
    };

    return (
        <div>
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <Tabs
                        animate={true}
                        id="navbar"
                        large={true}
                        onChange={handleNavbarTabChange}
                        selectedTabId={selectedTabId}
                    >
                        <Tab id="Home">
                            <MenuItem text="Home" />
                        </Tab>
                        <Tab id="Gameplans">
                            <MenuItem text="Gameplans" />
                        </Tab>
                    </Tabs>
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                    <MenuItem text="Light Mode" />
                </NavbarGroup>
            </Navbar>
        </div>
    );
}

const handleNavbarTabChange = (navbarTabId: any, setState: any) => {
    setState({ navbarTabId });
};

const getColorModeIcon = (colorModeString: string) => {
    return colorModeString === 'light' ? 'flash' : 'moon';
};

export default App;
