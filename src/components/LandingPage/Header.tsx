import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import links from '../../links';

const NavWrapper = styled.div`
    font-family: IBM Plex Sans;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 3.125rem 0 0.5rem 0;
    @media (max-width: 768px) {
        padding: 1.5625rem 0 1.25rem 0;
    }
    @media (max-width: 460px) {
        padding: 1.5625rem 0.625rem 1.25rem;
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
    height: 1.75rem;
    width: 5.825rem;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    color: var(--nav-text-light);
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    padding-bottom: 2rem;
    @media (max-width: 460px) {
        padding-bottom: 0;
    }
`;
const SubMenu = styled.div`
    position: absolute;
    display: ${(prop) => (!prop.show ? 'none' : 'flex')};
    margin-top: 1rem;
    flex-direction: column;
    padding: 1.25rem;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    background: #ffffff;
`;
const SubItem = styled(Link)`

    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    color: #2B2B2B;
    &:not(:last-child){
    margin-bottom:1.25rem;
    },
    ${(prop) =>
        prop.disabled ? 'pointer-events: none;opacity: 0.5;color:grey;' : ''};
    &:hover  {
    ${(prop) => (!prop.disabled ? 'color: #536DFE;' : '')};
        
}
`;

const MenuItem = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: var(--dark-text);
    cursor: pointer;
    margin-left: 2.625rem;
    text-decoration: none;
    padding-bottom: 2rem;
    @media (max-width: 460px) {
        display: none;
    }
    &:hover ${SubMenu} {
        display: flex;
    }
    &:hover {
        color: #536dfe;
    }
`;

const MobileMenu = styled.div`
    width: 3.25rem;
    height: 2.625rem;

    box-sizing: border-box;

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
    padding-left: 1.25rem;
    background: var(--white);
    flex-basis: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    border-bottom: 1px solid var(--footer-divider);
    padding-bottom: 70vh;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding-top: 1rem;
    display: ${(props) => (props.active ? 'flex' : 'none')};
    z-index: 1;
`;
const Arrow = styled.i`
    float: right;
    border: solid #000000;
    border-width: 0 2px 2px 0;
    margin-top: 0.875rem;
    margin-right: 1.75rem;
    display: inline-block;
    padding: 0.25rem;
    transform: ${(prop) => (!prop.show ? 'rotate(45deg)' : 'rotate(-135deg)')};
    -webkit-transform: ${(prop) =>
        !prop.show ? 'rotate(45deg)' : 'rotate(-135deg)'};
`;
const MobileMenuItem = styled.div`
    font-family: IBM Plex Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-bottom: 1.5rem;
    display: block;
    color: black;
    float: left;
    width: 99%;
`;
const MobileDropdown = styled.div`
    display: ${(prop) => (!prop.show ? 'none' : 'block')};
    color: black;
    margin-left: 1.5rem;
    margin-top: 1.5rem;
`;
const DropdownItem = styled(Link)`
    display: block;
    color: black;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0.01em;
    text-align: left;
    &:not(:last-child) {
        margin-bottom: 1.25rem;
    }
    ${(prop) =>
        prop.disabled ? 'pointer-events: none;opacity: 0.5;color:grey;' : ''};
`;
const Divider = styled.div`
    border-top:1px solid #D6D6D6;
    margin-left: -1.25rem;
    margin-right:-1.25rem;
    margin-bottom:1.25rem;
    @media screen and (max-width: 460px) {
            margin-left:0;
            margin-right:1.2rem;
`;
export const StyledBurger = styled.button`
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.125rem;
    height: 0.9rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0px;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 1rem;
        height: 0.1rem;
        background: black;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) =>
                open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;

const NavBar = ({ passData }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        passData(active);
    }, [active]);
    const [navState, setNavState] = useState({
        learn: false,
        contribute: false,
        community: false,
    });

    const NavItem = withRouter(({ route, history, children }) => {
        function routerPushMethod() {
            history.push(route);
        }

        return (
            <LogoContainer onClick={routerPushMethod}>{children}</LogoContainer>
        );
    });

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

    function handleNavItemClick(navItem, event) {
        event.stopPropagation();

        const currentState = navState;

        const keysArray = Object.keys(navState);
        keysArray.forEach((item) => {
            if (navItem !== item) {
                currentState[item] = false;
            }
        });
        const changedState = !currentState[navItem];

        setNavState({
            ...currentState,
            [navItem]: changedState,
        });
    }

    return (
        <NavWrapper>
            <LeftNav>
                <NavItem route="/">
                    <DXdaoLogo src="DXdao2.svg" onClick={handleLogoClicked} />
                </NavItem>
            </LeftNav>
            <RightNav>
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <MenuItem
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    Learn
                    <SubMenu show={navState.learn}>
                        <SubItem to={links.landing_manifesto}>
                            Manifesto
                        </SubItem>
                        <SubItem to={links.landing_worker_compensation}>
                            Worker Compensation
                        </SubItem>
                        <SubItem as="a" disabled={true}>
                            DAOs
                        </SubItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <SubItem
                            as="a"
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            href={links.landing_guidebook}
                            target="_blank"
                        >
                            Guidebook
                        </SubItem>
                    </SubMenu>
                </MenuItem>
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <MenuItem
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    Contribute
                    <SubMenu show={navState.contribute}>
                        <SubItem as="a" disabled={true}>
                            Project Boards
                        </SubItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <SubItem
                            as="a"
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            href={links.landing_omeneth}
                            target="_blank"
                        >
                            Omen
                        </SubItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <SubItem
                            as="a"
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            href={links.landing_dxswapeth}
                            target="_blank"
                        >
                            DXswap
                        </SubItem>
                        <Divider />
                        <SubItem
                            as="a"
                            target="_blank"
                            to={links.landing_codebase}
                            href={links.header_bounties}
                        >
                            Bounties
                        </SubItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <SubItem
                            as="a"
                            target="_blank"
                            to={links.landing_codebase}
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                        >
                            Codebase
                        </SubItem>
                    </SubMenu>
                </MenuItem>
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <MenuItem
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    Community
                    <SubMenu show={navState.community}>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <SubItem
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            as="a"
                            href={links.footer_telegram}
                            target="_blank"
                        >
                            Telegram
                        </SubItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <SubItem
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            as="a"
                            href={links.landing_developer_chat}
                            target="_blank"
                        >
                            Keybase
                        </SubItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <SubItem
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            as="a"
                            href={links.header_forum}
                            target="_blank"
                        >
                            Forum
                        </SubItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <SubItem
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            as="a"
                            href={links.header_youtube}
                            target="_blank"
                        >
                            Youtube
                        </SubItem>
                    </SubMenu>
                </MenuItem>
                <MobileMenu onClick={toggleMenu}>
                    <StyledBurger open={active}>
                        <div />
                        <div />
                        <div />
                    </StyledBurger>
                </MobileMenu>
            </RightNav>
            <MobileNav active={active}>
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <MobileMenuItem
                    onClick={(event) => handleNavItemClick('learn', event)}
                >
                    Learn <Arrow show={navState.learn} />
                    <MobileDropdown show={navState.learn}>
                        <DropdownItem
                            to={links.landing_manifesto}
                            onClick={toggleMenu}
                        >
                            Manifesto
                        </DropdownItem>
                        <DropdownItem
                            to={links.landing_worker_compensation}
                            onClick={toggleMenu}
                        >
                            Worker Compensation
                        </DropdownItem>
                        <DropdownItem as="a" disabled={true}>
                            DAOs
                        </DropdownItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <DropdownItem
                            as="a"
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            href={links.landing_guidebook}
                            target="_blank"
                        >
                            Guidebook
                        </DropdownItem>
                    </MobileDropdown>
                </MobileMenuItem>
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <MobileMenuItem
                    onClick={(event) => handleNavItemClick('contribute', event)}
                >
                    Contribute <Arrow show={navState.contribute} />
                    <MobileDropdown show={navState.contribute}>
                        <DropdownItem as="a" disabled={true}>
                            Project Boards
                        </DropdownItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <DropdownItem
                            as="a"
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            href={links.landing_omeneth}
                            target="_blank"
                        >
                            Omen
                        </DropdownItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <DropdownItem
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            as="a"
                            href={links.landing_dxswapeth}
                            target="_blank"
                        >
                            DXswap
                        </DropdownItem>
                        <Divider />
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <DropdownItem
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            as="a"
                            href={links.header_bounties}
                            target="_blank"
                        >
                            Bounties
                        </DropdownItem>
                        <DropdownItem
                            onClick={toggleMenu}
                            to={links.landing_codebase}
                        >
                            Codebase
                        </DropdownItem>
                    </MobileDropdown>
                </MobileMenuItem>
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <MobileMenuItem
                    onClick={(event) => handleNavItemClick('community', event)}
                >
                    Community <Arrow show={navState.community} />
                    <MobileDropdown show={navState.community}>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <DropdownItem
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            as="a"
                            href={links.footer_telegram}
                            target="_blank"
                        >
                            Telegram
                        </DropdownItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <DropdownItem
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            as="a"
                            href={links.landing_developer_chat}
                            target="_blank"
                        >
                            Keybase
                        </DropdownItem>

                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <DropdownItem
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            as="a"
                            href={links.header_forum}
                            target="_blank"
                        >
                            Forum
                        </DropdownItem>
                        {/* tslint:disable-next-line:jsx-no-lambda */}
                        <DropdownItem
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            as="a"
                            href={links.header_youtube}
                            target="_blank"
                        >
                            Youtube
                        </DropdownItem>
                    </MobileDropdown>
                </MobileMenuItem>
            </MobileNav>
        </NavWrapper>
    );
};

export default NavBar;
