import React from 'react';
import LandingPage from '../components/landing-page/LandingPage';
import LandingPageFooter from '../components/landing-page/Footer';
import LandingPageHeader from '../components/landing-page/Header';
import styled from 'styled-components';

const LandingPageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const LandingPageContainer = ({}) => {
    return (
        <LandingPageWrapper>
            <LandingPageHeader />
            <LandingPage />
            <LandingPageFooter />
        </LandingPageWrapper>
    );
};

export default LandingPageContainer;
