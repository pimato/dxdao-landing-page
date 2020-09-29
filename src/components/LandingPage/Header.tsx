import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import links from '../../links';

const NavWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 50px 0px 40px 0px;
    @media (max-width: 768px) {
        padding: 25px 0px 20px 0px;
    }
    @media (max-width: 460px) {
        padding: 25px 10px 20px;
    }
`;

const LeftNav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const RightNav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const DXdaoLogo = styled.img`
    height: 32px;
    width: 32px;
    @media (max-width: 460px) {
        height: 40px;
        width: 40px;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    color: var(--nav-text-light);
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
`;

const MenuItem = styled(Link)`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: var(--dark-text);
    cursor: pointer;
    margin-left: 42px;
    text-decoration: none;
    @media (max-width: 460px) {
        display: none;
    }
`;

const MobileMenu = styled.div`
    width: 52px;
    height: 42px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    display: none;
    @media (max-width: 460px) {
        display: flex;
    }
`;

const MobileNav = styled.div`
    position: absolute;
    left: 0;
    top: 76px;
    width: 100%;
    background: var(--white);
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--footer-divider);
    padding-bottom: 12px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
    ${(props) => {
        if (props.active) {
            return `display: flex`;
        } else {
            return `display: none`;
        }
    }}
    z-index: 1;
`;

const MobileMenuItem = styled(Link)`
    color: var(--dark-text);
    font-size: 16px;
    font-weight: 600;
    position: relative;
    height: 37px;
    margin: 8px 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: Source Sans Pro;
`;

const NavBar = ({}) => {
    const [active, setActive] = useState(false);

    const NavItem = withRouter(({ route, history, children }) => {
        return <LogoContainer onClick={routerPush}>{children}</LogoContainer>;
    });

    const routerPush = (history, route) => {
        history.push(route);
    };

    const toggleMenu = (): void => {
        if (active === true) {
            setActive(false);
        } else {
            setActive(true);
        }
    };

    const handleLogoClicked = (): void => {
        if (active === true) {
            setActive(false);
        }
    };

    return (
        <NavWrapper>
            <LeftNav>
                <NavItem route="/">
                    <DXdaoLogo
                        src="Dxdao_Landing.svg"
                        onClick={handleLogoClicked}
                    />
                </NavItem>
            </LeftNav>
            <RightNav>
                <MenuItem to={links.landing_codebase}>Codebase</MenuItem>
                <MenuItem to={links.landing_brand}>Brand Assets</MenuItem>
                <MenuItem to={links.landing_manifesto}>Manifesto</MenuItem>
                <MobileMenu onClick={toggleMenu}>
                    <img src="menu-burger.svg" alt="Menu" />
                </MobileMenu>
            </RightNav>
            <MobileNav active={active}>
                <MobileMenuItem
                    to={links.landing_codebase}
                    onClick={toggleMenu}
                >
                    Codebase
                </MobileMenuItem>
                <MobileMenuItem to={links.landing_brand} onClick={toggleMenu}>
                    Brand Assets
                </MobileMenuItem>
            </MobileNav>
        </NavWrapper>
    );
};

export default NavBar;
