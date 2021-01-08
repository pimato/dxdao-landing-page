import React from 'react';
import styled from 'styled-components';
import links from '../../links';
import { version } from '../../../package.json';

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0px 50px 0px;
    color: var(--footer-text-gray);
    border-top: 1px solid var(--footer-divider);
    margin-top: 124px;
    @media (max-width: 768px) {
        padding: 20px 0px;
    }
`;

const LeftFooter = styled.div`
    display: flex;
    flex-direction: row;
`;

const RighFooter = styled.div`
    display: flex;
    flex-direction: row;
`;

const FooterItem = styled.div`
    a {
        text-decoration: none;
        color: var(--footer-text-gray);
    }
    a:hover {
        color: var(--text-gray-onHover);
    }
`;

const LogoWrapper = styled.div`
    padding-left: 8px;
`;

const FooterLogo = styled.img``;

const Footer = () => {
    return (
        <FooterWrapper>
            <LeftFooter>
                <FooterItem>
                    <a href={links.footer_version} target="#">
                        Version {version}
                    </a>
                </FooterItem>
            </LeftFooter>
            <RighFooter>
                <LogoWrapper>
                    <a href={links.footer_twitter} target="#">
                        <FooterLogo src="twitter_color.svg"></FooterLogo>
                    </a>
                </LogoWrapper>
                <LogoWrapper>
                    <a href={links.footer_telegram} target="#">
                        <FooterLogo src="telegram_color.svg"></FooterLogo>
                    </a>
                </LogoWrapper>
            </RighFooter>
        </FooterWrapper>
    );
};

export default Footer;
