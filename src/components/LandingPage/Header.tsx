import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import links from '../../links';

const NavWrapper = styled.div`
    font-family: var(--IBM);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 3.125rem 0 0.5rem 0;
    @media (max-width: 1054px) {
        padding: 1.75rem 1.25rem 1.25rem 1.25rem;
    }
    @media (max-width: 475px) {
        padding: 1.75rem 1.6875rem 2rem 1.25rem;
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
    @media (max-width: 475px) {
        padding-bottom: 0;
    }
`;
const SubMenu = styled.div`
    position: absolute;
    display: ${(prop) => (!prop.show ? 'none' : 'flex')};
    margin-top: 1rem;
    flex-direction: column;
    padding: 1.25rem;
    border: 1px solid var(--white-shade);
    border-radius: 6px;
    background: var(--white);
    box-sizing: border-box;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.04);
`;
const SubItem = styled(Link)`

    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.2px;
    text-align: left;
    color: var(--light-black);
    &:not(:last-child){
    margin-bottom:1.25rem;
    },
    ${(prop) =>
        prop.disabled ? 'pointer-events: none;opacity: 0.5;color:grey;' : ''};
    &:hover  {
    ${(prop) => (!prop.disabled ? 'color: #536DFE;' : '')};
        
}
`;

const SubHeader = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: var(--light-body-text);
    margin-bottom: 20px;
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
    @media (max-width: 475px) {
        display: none;
    }
    &:hover ${SubMenu} {
        display: flex;
    }
    &:hover {
        color: var(--blue-text);
    }
`;

const MobileMenu = styled.div`
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    display: none;
    @media (max-width: 475px) {
        display: flex;
    }
`;

const MobileNav = styled.div`
    position: absolute;
    left: 0;
    top: 57px;
    width: 100%;
    padding-left: 1.25rem;
    background: var(--white);
    flex-basis: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    border-bottom: 1px solid var(--footer-divider);
    padding-bottom: 100vh;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding-top: 2rem;
    display: ${(props) => (props.active ? 'flex' : 'none')};
    z-index: 1;
    @media (max-width: 475px) {
        box-shadow: none;
        padding-right: 1.6875rem;
    }
`;
const Arrow = styled.i`
    float: right;
    border: solid var(--black);
    border-width: 0 2px 2px 0;
    margin-top: 0.5rem;
    display: inline-block;
    padding: 0.25rem;
    transform: ${(prop) => (!prop.show ? 'rotate(45deg)' : 'rotate(-135deg)')};
    -webkit-transform: ${(prop) =>
        !prop.show ? 'rotate(45deg)' : 'rotate(-135deg)'};
`;
const MobileMenuItem = styled.div`
    animation: ease-in 5s infinite;
    font-family: var(--IBM);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-bottom: 1.5rem;
    display: block;
    color: var(--black);
    float: left;
    width: 99%;
`;
const MobileDropdown = styled.div`
    display: ${(prop) => (!prop.show ? 'none' : 'block')};
    color: var(--black);
    margin-left: 1.5rem;
    margin-top: 1.5rem;
`;
const DropdownItem = styled(Link)`
    display: block;
    color: var(--black);
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
    border-top:1px solid var(--white-shade);
    margin-left: -1.25rem;
    margin-right:-1.25rem;
    margin-bottom:1.25rem;
    @media screen and (max-width: 475px) {
            margin-left:0;
            margin-right:1.2rem;
`;
export const StyledBurger = styled.button`
    position: absolute;
    padding: 0 0.75rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 0.9rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 1rem;
        height: 0.1rem;
        background: var(--black);
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

const NavBar = ({ setMobileState }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setMobileState(active);
    }, [active, setMobileState]);
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
                <MenuItem
                    /* tslint:disable-next-line:jsx-no-lambda */
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
                    </SubMenu>
                </MenuItem>
                <MenuItem
                    /* tslint:disable-next-line:jsx-no-lambda */
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    Contribute
                    <SubMenu show={navState.contribute}>
                        <SubHeader>Project Boards</SubHeader>
                        <SubItem
                            /* tslint:disable-next-line:jsx-no-lambda */
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            as="a"
                            href={links.landing_dxdao_codebase}
                            target="_blank"
                        >
                            DXdao
                        </SubItem>
                        <SubItem
                            /* tslint:disable-next-line:jsx-no-lambda */
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            as="a"
                            href={links.landing_omeneth_codebase}
                            target="_blank"
                        >
                            Omen
                        </SubItem>

                        <SubItem
                            /* tslint:disable-next-line:jsx-no-lambda */
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            as="a"
                            href={links.landing_dxswapeth_codebase}
                            target="_blank"
                        >
                            DXswap
                        </SubItem>
                        <Divider />
                        <SubItem
                            as="a"
                            target="_blank"
                            href={links.header_bounties}
                        >
                            Bounties
                        </SubItem>
                        <SubItem to={links.landing_codebase}>Codebase</SubItem>
                    </SubMenu>
                </MenuItem>
                <MenuItem
                    /* tslint:disable-next-line:jsx-no-lambda */
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    Community
                    <SubMenu show={navState.community}>
                        <SubItem
                            /* tslint:disable-next-line:jsx-no-lambda */
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            as="a"
                            href={links.footer_telegram}
                            target="_blank"
                        >
                            Telegram
                        </SubItem>
                        <SubItem
                            /* tslint:disable-next-line:jsx-no-lambda */
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            as="a"
                            href={links.landing_developer_chat}
                            target="_blank"
                        >
                            Keybase
                        </SubItem>
                        <SubItem
                            /* tslint:disable-next-line:jsx-no-lambda */
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            as="a"
                            href={links.header_forum}
                            target="_blank"
                        >
                            Forum
                        </SubItem>
                        <SubItem to={links.landing_blog}>Blog</SubItem>
                        <SubItem
                            /* tslint:disable-next-line:jsx-no-lambda */
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
                <MobileMenuItem
                    /* tslint:disable-next-line:jsx-no-lambda */
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
                        <DropdownItem
                            /* tslint:disable-next-line:jsx-no-lambda */
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            as="a"
                            href={links.landing_guidebook}
                            target="_blank"
                        >
                            Guidebook
                        </DropdownItem>
                    </MobileDropdown>
                </MobileMenuItem>
                <MobileMenuItem
                    /* tslint:disable-next-line:jsx-no-lambda */
                    onClick={(event) => handleNavItemClick('contribute', event)}
                >
                    Contribute <Arrow show={navState.contribute} />
                    <MobileDropdown show={navState.contribute}>
                        <DropdownItem as="a" disabled={true}>
                            Project Boards
                        </DropdownItem>
                        <DropdownItem
                            /* tslint:disable-next-line:jsx-no-lambda */
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            as="a"
                            href={links.landing_omeneth_codebase}
                            target="_blank"
                        >
                            Omen
                        </DropdownItem>
                        <DropdownItem
                            /* tslint:disable-next-line:jsx-no-lambda */
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleMenu();
                            }}
                            as="a"
                            href={links.landing_dxswapeth_codebase}
                            target="_blank"
                        >
                            DXswap
                        </DropdownItem>
                        <Divider />
                        <DropdownItem
                            /* tslint:disable-next-line:jsx-no-lambda */
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
                <MobileMenuItem
                    /* tslint:disable-next-line:jsx-no-lambda */
                    onClick={(event) => handleNavItemClick('community', event)}
                >
                    Community <Arrow show={navState.community} />
                    <MobileDropdown show={navState.community}>
                        <DropdownItem
                            /* tslint:disable-next-line:jsx-no-lambda */
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

                        <DropdownItem
                            /* tslint:disable-next-line:jsx-no-lambda */
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
                        <DropdownItem
                            /* tslint:disable-next-line:jsx-no-lambda */
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
                        {/*<DropdownItem*/}
                        {/*    to={links.landing_blog}*/}
                        {/*    onClick={toggleMenu}*/}
                        {/*>*/}
                        {/*    Blog*/}
                        {/*</DropdownItem>*/}
                        <DropdownItem
                            /* tslint:disable-next-line:jsx-no-lambda */
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
