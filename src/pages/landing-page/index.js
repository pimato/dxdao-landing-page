import React from 'react';
import styled from 'styled-components';
import links from '../../misc/links';
import MetaTags from 'react-meta-tags';

const LandingPageWrapper = styled.div`
    font-family: var(--IBM);
`;

const DXDLogo = styled.img`
    margin-bottom: 16px;
    height: 64px;
    width: 64px;
`;

const DXDSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 124px;
    @media (max-width: 475px) {
        margin-top: 84px;
    }
`;

const BannerSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 84px;
    @media (max-width: 475px) {
        margin-top: 24px;
    }
`;

const TagLine = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    text-transform: uppercase;
    color: var(--light-header-text);

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre;
`;

const BannerMessage = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 52px;
    text-align: center;
    color: var(--dark-text);
    margin-top: 8px;
    @media (max-width: 768px) {
        font-size: 32px;
        line-height: 46px;
    }
    @media (max-width: 330px) {
        font-size: 24px;
        line-height: 36px;
    }
`;

const HeavyMessage = styled.span`
    font-weight: 500;
`;

const Description = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 31px;
    text-align: center;
    letter-spacing: 0.03em;
    color: var(--light-body-text);
    margin-top: 24px;
    max-width: 614px;
`;

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
`;

const Button = styled.button`
    display: flex;
    padding: 9.5px 17px;
    font-family: var(--IBM);
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    background-color: white;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    height: 43px;
    color: var(--dark-text);
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 6px;
    margin: 0px 10px;
    &:hover {
        border: 1px solid var(--lp-border-color-onHover);
        cursor: pointer;
    }
    @media (max-width: 475px) {
        width: 47%;
        margin: 0;
    }
`;
const SwaprButton = styled(Button)`
    background-color: var(--violet-color);
    color: var(--white);
    border: 1px solid rgba(0, 0, 0, 0.075);
    border-radius: 6px;
    &:hover {
        background: var(--violet-hover);
        border: 1px solid rgba(0, 0, 0, 0.075);
        cursor: pointer;
    }
    @media (max-width: 475px) {
        width: 44%;
        margin-right: 12px;
    }
`;

const DxtrustButton = styled(Button)`
    background-color: var(--violet-color);
    color: var(--white);
    border: 1px solid rgba(0, 0, 0, 0.075);
    border-radius: 6px;
    &:hover {
        background: var(--violet-hover);
        border: 1px solid rgba(0, 0, 0, 0.075);
        cursor: pointer;
    }
    @media (max-width: 400px) {
        width: 44%;
        margin-right: 12px;
    }
`;

const ProductSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 124px;
    @media (max-width: 475px) {
        margin-top: 84px;
    }
`;

const Message = styled.div`
    font-family: var(--IBM);
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0.02em;
    text-align: center;

    color: var(--dark-text);
    margin-top: 8px;
`;

const ProductPanelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: ${(props) => props.marginTop};
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        &:nth-of-type(odd) {
            margin-top: 32px;
        }
    }
`;

const ProductClickable = styled.a`
    display: block;
    text-decoration: none;
`;

const ProductPanel = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--white);
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 3px;
    margin: 0px 10px;
    width: 424px;
    height: 218px;
    max-width: 95vw;
    padding: 32px;

    &:hover {
        border: 1px solid var(--lp-border-color-onHover);
    }
    @media (max-width: 1024px) {
        margin: 24px 0 0 0;
    }
    @media (max-width: 475px) {
        height: auto;
        margin: 16px 0 0 0;
    }
`;

const ProductNameWrapper = styled.div`
    display: flex;
`;

const ProductLogo = styled.img``;

const ProductName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    margin-left: 12px;
    letter-spacing: 0.02em;
    color: var(--dark-text);
`;

const ProductDescription = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.03em;
    margin-top: 24px;
    color: var(--light-body-text);
`;

const AboutUsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 124px;
    @media (max-width: 475px) {
        margin-top: 84px;
    }
`;

const AboutPanelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 48px;
    @media (max-width: 475px) {
        margin-top: 32px;
    }
`;

const AboutPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 25%;
    padding: 0px 22px;
    @media (max-width: 1024px) {
        width: 50%;
        &:nth-of-type(3),
        &:nth-of-type(4) {
            margin-top: 32px;
        }
    }
    @media (max-width: 475px) {
        width: 100%;
        margin-top: 32px;
    }
`;

const AboutIcon = styled.img``;

const SwaprLogo = styled.img`
    margin-right: 10px;
`;

const AboutHeader = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 0.03em;
    text-align: center;
    margin-top: 32px;
    @media (max-width: 475px) {
        margin-top: 24px;
    }
`;

const AboutDescription = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: var(--light-body-text);
    margin-top: 24px;
    @media (max-width: 475px) {
        margin-top: 16px;
    }
`;

const JoinActionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
`;

const JoinAction = styled.a`
    display: flex;
    flex-direction: row;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;
    align-items: center;
    letter-spacing: 0.02em;
    color: var(--dark-button-background);
    margin-top: 8px;
    text-decoration: none;
    &:hover {
        color: var(--turquois-light);
    }
`;

const JoinActionText = styled.div`
    font-weight: 500;
`;

const JoinActionArrow = styled.img`
    margin-left: 12px;
`;

export const LandingPage = () => {
    //check if user has metamask
    //const ipfs = !!window.ethereum;

    return (
        <LandingPageWrapper>
            <BannerSection>
                <TagLine>WE DECENTRALIZE DEFI</TagLine>
                <BannerMessage>
                    <MetaTags>
                        <meta
                            id="meta-description"
                            name="dxdao.eth"
                            content="The DXdao is a decentralized organization. It develops, governs, and grows DeFi protocols and products. Owned and operated by the community, the DXdao has the potential to significantly scale its membership."
                        />
                        <meta
                            id="og-title"
                            property="og:title"
                            content="DXdao Index"
                        />
                        <meta
                            id="og-image"
                            property="og:image"
                            content="DXD.svg"
                        />
                        <meta
                            name="keywords"
                            content="DXdao, Index, Omen, Mix, Rails,Swapr, Mesa"
                        />
                    </MetaTags>
                    <HeavyMessage>DXdao </HeavyMessage>is a{' '}
                    <HeavyMessage>sovereign collective</HeavyMessage>
                </BannerMessage>
                <Description>
                    The DXdao is a decentralized organization initialized in May
                    of 2019 and has over 400 unique stakeholder addresses. It
                    develops, governs, and grows DeFi protocols and products.
                    Owned and operated by the community, the DXdao has the
                    potential to significantly scale its membership.
                </Description>
                <JoinActionWrapper>
                    <JoinAction
                        href={links.landing_create_proposal}
                        target="_blank"
                    >
                        <JoinActionText>Create a proposal</JoinActionText>
                        <JoinActionArrow src="RightArrow.svg" />
                    </JoinAction>
                    <JoinAction
                        href={links.landing_start_forum_discussion}
                        target="_blank"
                    >
                        <JoinActionText>
                            Start a forum discussion
                        </JoinActionText>
                        <JoinActionArrow src="RightArrow.svg" />
                    </JoinAction>
                </JoinActionWrapper>
            </BannerSection>

            <ProductSection>
                <TagLine>COLLECTIVELY OWNED PRODUCTS</TagLine>
                <Message>Decentralized Products Governed by DXdao</Message>
                <ProductPanelWrapper marginTop={'48px'}>
                    <ProductClickable href={links.landing_omen} target="_blank">
                        <ProductPanel>
                            <ProductNameWrapper>
                                <ProductLogo src="Omen.svg" />
                                <ProductName>Omen.eth</ProductName>
                            </ProductNameWrapper>
                            <ProductDescription>
                                Omen is a fully decentralized prediction market
                                platform built on top of the Gnosis conditional
                                token framework.
                            </ProductDescription>
                        </ProductPanel>
                    </ProductClickable>
                    <ProductClickable
                        href={links.landing_swapr}
                        target="_blank"
                    >
                        <ProductPanel>
                            <ProductNameWrapper>
                                <ProductLogo src="Swapr.svg" />
                                <ProductName>Swapr.eth</ProductName>
                            </ProductNameWrapper>
                            <ProductDescription>
                                A governance-enabled automated-market maker with
                                adjustable fees.
                            </ProductDescription>
                        </ProductPanel>
                    </ProductClickable>
                </ProductPanelWrapper>
                <ProductPanelWrapper marginTop={'20px'}>
                    <ProductClickable
                        href={links.landing_mesaeth}
                        target="_blank"
                    >
                        <ProductPanel>
                            <ProductNameWrapper>
                                <ProductLogo src="Mesa.svg" />
                                <ProductName>Mesa.eth</ProductName>
                            </ProductNameWrapper>
                            <ProductDescription>
                                Mesa is an Open Source interface for the Gnosis
                                Protocol, a fully permissionless DEX that
                                enables ring trades to maximize liquidity.
                            </ProductDescription>
                        </ProductPanel>
                    </ProductClickable>
                    <ProductClickable
                        href={links.landing_rails}
                        target="_blank"
                    >
                        <ProductPanel>
                            <ProductNameWrapper>
                                <ProductLogo src="Rails.svg" />
                                <ProductName>Rails.eth</ProductName>
                            </ProductNameWrapper>
                            <ProductDescription>
                                Rails brings fast, cheap, and hassle-free
                                cryptocurrency micropayments to the masses. Get
                                aboard.
                            </ProductDescription>
                        </ProductPanel>
                    </ProductClickable>
                </ProductPanelWrapper>
            </ProductSection>
            <DXDSection>
                <DXDLogo src={'./brand/dxdao-blue.svg'} />
                <Message>DXD powers the Decentralised Ecosystem</Message>
                <Description>
                    DXD is the DXdao native ERC20 token, DXD token holders have
                    an economic claim to the DXdao´s revenue and it also grants
                    its owners future access to a suite of services and premium
                    features in decentralised applications, such as gasless
                    transactions, feeless anonymizing of assets, reduced trading
                    fees on DEX protocols and more.
                </Description>
                <ButtonRow>
                    <SwaprButton
                        as="a"
                        href={links.landing_swapr}
                        target="_blank"
                    >
                        <SwaprLogo src="./brand/SwaprWhite.svg" /> Swapr.eth
                    </SwaprButton>
                    <DxtrustButton
                        as="a"
                        href={links.landing_dxtrust}
                        target="_blank"
                    >
                        DXtrust.eth
                    </DxtrustButton>
                </ButtonRow>
            </DXDSection>
            <AboutUsSection>
                <TagLine>About us</TagLine>
                <Message>The first super-scalable collective</Message>
                <AboutPanelWrapper>
                    <AboutPanel>
                        <AboutIcon src="No-Hierarchy.svg" />
                        <AboutHeader>No Hierarchies</AboutHeader>
                        <AboutDescription>
                            Work with a distributed collective that finds
                            consensus through voting.
                        </AboutDescription>
                    </AboutPanel>
                    <AboutPanel>
                        <AboutIcon src="Symmetry.svg" />
                        <AboutHeader>Symmetry of Information</AboutHeader>
                        <AboutDescription>
                            Equal access to information for all members.
                        </AboutDescription>
                    </AboutPanel>
                    <AboutPanel>
                        <AboutIcon src="Swarm.svg" />
                        <AboutHeader>Swarm Knowledge</AboutHeader>
                        <AboutDescription>
                            The transparent feedback system enables decision
                            making with a high degree of success.
                        </AboutDescription>
                    </AboutPanel>
                    <AboutPanel>
                        <AboutIcon src="Open.svg" />
                        <AboutHeader>Open for Everyone</AboutHeader>
                        <AboutDescription>
                            Permissionless access increases the knowledge and
                            effectiveness of the collective.
                        </AboutDescription>
                    </AboutPanel>
                </AboutPanelWrapper>
            </AboutUsSection>
        </LandingPageWrapper>
    );
};
