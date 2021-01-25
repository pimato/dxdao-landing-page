import { Route, Switch } from 'react-router-dom';

import { LandingPage } from './landing-page';
import { FAQ } from './faq';
import { BrandAssets } from './brand-assets';
import { Codebase } from './codebase';
import { Manifesto } from './manifesto';
import { WorkerCompensation } from './worker-compensation';
import React from 'react';

export const Router = () => {
    return (
        <React.Fragment>
            <Switch>
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
                    <Manifesto />
                </Route>
                <Route exact path="/worker-compensation">
                    <WorkerCompensation />
                </Route>
            </Switch>
        </React.Fragment>
    );
};
