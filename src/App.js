import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import LandingPageFooter from './components/landing-page/Footer';
import LandingPageHeader from './components/landing-page/Header';

import { FAQ } from './components/faq';
import { BrandAssets } from './components/brand-assets';
import { Codebase } from './components/codebase';
import { Index } from './components/manifesto';
import { WorkerCompensation } from './components/worker-compensation';

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
                <Route exact path="/">
                    <div className="landing-body-container">
                        <AppShell toggle={mobileState}>
                            <LandingPageHeader
                                setMobileState={setMobileState}
                            />
                            <LandingPage />
                            <LandingPageFooter />
                        </AppShell>
                    </div>
                </Route>

                <Route exact path="/faq">
                    <div className="landing-body-container">
                        <AppShell toggle={mobileState}>
                            <LandingPageHeader
                                setMobileState={setMobileState}
                            />
                            <FAQ />
                            <LandingPageFooter />
                        </AppShell>
                    </div>
                </Route>

                <Route exact path="/brand-assets">
                    <div className="landing-body-container">
                        <AppShell toggle={mobileState}>
                            <LandingPageHeader
                                setMobileState={setMobileState}
                            />
                            <BrandAssets />
                            <LandingPageFooter />
                        </AppShell>
                    </div>
                </Route>

                <Route exact path="/codebase">
                    <div className="landing-body-container">
                        <AppShell toggle={mobileState}>
                            <LandingPageHeader
                                setMobileState={setMobileState}
                            />
                            <Codebase />
                            <LandingPageFooter />
                        </AppShell>
                    </div>
                </Route>
                <Route exact path="/manifesto">
                    <div className="landing-body-container">
                        <AppShell toggle={mobileState}>
                            <LandingPageHeader
                                setMobileState={setMobileState}
                            />
                            <Index />
                            <LandingPageFooter />
                        </AppShell>
                    </div>
                </Route>
                <Route exact path="/worker-compensation">
                    <div className="landing-body-container">
                        <AppShell toggle={mobileState}>
                            <LandingPageHeader
                                setMobileState={setMobileState}
                            />
                            <WorkerCompensation />
                            <LandingPageFooter />
                        </AppShell>
                    </div>
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default App;
