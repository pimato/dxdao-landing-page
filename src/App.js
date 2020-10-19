import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import LandingPageFooter from './components/LandingPage/Footer';
import LandingPageHeader from './components/LandingPage/Header';

import FAQPage from 'components/FAQPage';
import BrandAssetsPage from 'components/BrandAssetsPage';
import CodebasePage from 'components/CodebasePage';
import Manifesto from './components/Manifesto';
import WorkerCompensation from './components/WorkerCompensation';
import Blog from './components/Blog/Blog';
import { BlogPost } from './components/Blog/BlogPost';

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
                            <FAQPage />
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
                            <BrandAssetsPage />
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
                            <CodebasePage />
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
                            <Manifesto />
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
                <Route exact path="/blog">
                    <div className="landing-body-container">
                        <AppShell toggle={mobileState}>
                            <LandingPageHeader
                                setMobileState={setMobileState}
                            />
                            <Blog />
                            <LandingPageFooter />
                        </AppShell>
                    </div>
                </Route>
                <Route exact path="/blog/:title">
                    <div className="landing-body-container">
                        <AppShell toggle={mobileState}>
                            <LandingPageHeader
                                setMobileState={setMobileState}
                            />
                            <BlogPost />
                            <LandingPageFooter />
                        </AppShell>
                    </div>
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default App;
