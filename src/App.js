import React, { useState } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import LandingPageFooter from './components/landing-page/Footer';
import LandingPageHeader from './components/landing-page/Header';
import { Router } from './components/router';

const AppShell = styled.div`
    width: 936px;
    max-width: 100vw;
    min-height: 100vh;

    @media only screen and (max-width: 475px) {
        ${(props) => (props.toggle ? 'position:fixed;' : '')};
    }
`;

const App = () => {
    const [mobileState, setMobileState] = useState(false);

    return (
        <HashRouter>
            <Switch>
                <div className="landing-body-container">
                    <AppShell toggle={mobileState}>
                        <LandingPageHeader setMobileState={setMobileState} />
                        <Router />
                        <LandingPageFooter />
                    </AppShell>
                </div>
            </Switch>
        </HashRouter>
    );
};

export default App;
