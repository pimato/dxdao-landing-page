import { Route } from 'react-router-dom';
import LandingPage from './landing-page/LandingPage';
import { FAQ } from './faq';
import { BrandAssets } from './brand-assets';
import { Codebase } from './codebase';
import { Index } from './manifesto';
import { WorkerCompensation } from './worker-compensation';
import React from 'react';

export const Router = () => {
    return (
        <React.Fragment>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/faq">
                <FAQ />
            </Route>
            <Route exact path="/brand-assets">
                <BrandAssets />
            </Route>
            <Route exact path="/codebase">
                <Codebase />
            </Route>
            <Route exact path="/manifesto">
                <Index />
            </Route>
            <Route exact path="/worker-compensation">
                <WorkerCompensation />
            </Route>
        </React.Fragment>
    );
};
