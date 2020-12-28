import React from 'react';
import LandingPage from '../pages/landing-page';
import LandingPageFooter from '../components/footer/Footer';
import LandingPageHeader from '../components/navigation/NavigationBar';
import styled from 'styled-components';

const LandingPageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const LandingPageContainer = () => {
    return (
        <LandingPageWrapper>
            <LandingPageHeader />
            <LandingPage />
            <LandingPageFooter />
        </LandingPageWrapper>
    );
};

export default LandingPageContainer;
