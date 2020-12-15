import React from 'react';
import styled from 'styled-components';
import links from '../links';

const ManifestoSection = styled.section`
    display: block;
    padding: 44px;
    font-style: normal;
    font-family: var(--IBM);
    border: 1px solid var(--white-shade);
    background: #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
    border-radius: 6px;

    @media screen and (max-width: 768px) {
        padding: 1.75rem 1.5rem;
    }
    @media screen and (max-width: 1054px) {
        margin: 0rem 1.25rem 1.25rem 1.25rem;
    }
`;
const Headline = styled.div`
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.02em;
    text-align: center;
    color: var(--light-black);
`;
const DateRatified = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.01em;
    text-align: center;
    color: var(--blue-text);
    text-decoration-line: underline;
    margin-top: 8px;
`;
const ParagraphStandard = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.01em;
    text-align: left;
    color: var(--dark-text-gray);
    margin-top: ${(prop) => prop.marginTop}rem;
`;

const SubHeadline = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.02em;
    text-align: left;
    color: var(--light-black);
    margin-top: ${(prop) => (prop.marginTop ? prop.marginTop : 0)}rem;
`;
const RegularBold = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-top: ${(prop) => (prop.marginTop ? prop.marginTop : 0)}rem;
    color: var(--dark-text-gray);
`;
const ItemWrapper = styled.div`
    margin-top: ${(prop) => (prop.marginTop ? prop.marginTop : 0.625)}rem;
`;

const ListItem = styled(ParagraphStandard)`
    overflow: hidden;
`;
const Bullet = styled.div`
    height: 8px;
    width: 8px;
    background-color: var(--dark-text-gray);
    border-radius: 50%;
    float: left;
    margin-top: 10px;
    margin-right: 16px;
`;
const InlineUnderline = styled.span`
    text-decoration: underline;
`;
const InlineBold = styled.span`
    font-weight: 500;
`;
const Logo = styled.img`
    width: 28px;
`;
const FlexWrap = styled.div`
    display: flex;
    margin-top: 36px;
    justify-content: center;
`;

const Manifesto = () => {
    return (
        <ManifestoSection>
            <Headline>DXdao Manifesto</Headline>
            <DateRatified>
                <a
                    href={links.ratified_manifesto_alchemy}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ratified on September 19th, 2020
                </a>
            </DateRatified>
            <ParagraphStandard marginTop={'2'}>
                DXdao is a decentralized collective that builds and governs
                decentralized products and services for the world. It aims to be
                an open community that reaches consensus in a transparent and
                fair way.
            </ParagraphStandard>
            <ParagraphStandard marginTop={'0.5'}>
                This document lays out the history, intentions and principles of
                the community to guide DXdao.
            </ParagraphStandard>
            <SubHeadline marginTop={'2.375'}>Genesis</SubHeadline>
            <ParagraphStandard marginTop={'0.75'}>
                DXdao launched on Ethereum Mainnet on May 19, 2019, through a
                collaborative effort of the teams at Gnosis and DAOStack.
                Reputation (REP) holders govern DXdao. REP is not a token; it is
                associated with an Ethereum address and cannot be transferred.
            </ParagraphStandard>
            <RegularBold marginTop={'0.75'}>
                There were 3 major ways to receive REP during the launch phase:
            </RegularBold>

            <ItemWrapper>
                <Bullet />
                <ListItem>
                    380k in lock drops rewarded for depositing ETH (80k) or
                    other ERC20 tokens (300k) for a two week period
                </ListItem>
            </ItemWrapper>

            <ItemWrapper>
                <Bullet />
                <ListItem>
                    500k from trading on the DutchX exchange and registering MGN
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                {' '}
                <Bullet />
                <ListItem>100k for purchasing REP with GEN</ListItem>
            </ItemWrapper>

            <ParagraphStandard marginTop={'0.75'}>
                399 Ethereum addresses participated in the initial REP
                distribution. Since then, one address self-slashed theirs and an
                additional 27 addresses have earned REP by contributing to
                DXdao, which has inflated total REP by 30% to 1,297,845.43 REP
                as of August 2020.
            </ParagraphStandard>
            <SubHeadline marginTop={'2.375'}>DXD Fundraiser</SubHeadline>
            <ParagraphStandard marginTop={'0.75'}>
                After the initial REP distribution, DXdao moved to launch a
                token (DXD) to raise funds for the DAO. REP holders
                <InlineUnderline>
                    {' '}
                    <a
                        href="https://alchemy.daostack.io/dao/0x519b70055af55a007110b4ff99b0ea33071c720a/proposal/0xeb9cf2b3d76664dc1e983137f33b2400ad11966b1d79399d7ca55c25ad6283fa"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        voted on April 25, 2020
                    </a>
                </InlineUnderline>{' '}
                to launch a bonding curve to mint DXD in exchange for ETH to be
                held in DXdao’s treasury, which is controlled by REP holders.
                The price to mint DXD is denominated in ETH and goes up linearly
                as more DXD is minted. DXdao has a 100k DXD pre-mint that
                unlocks continuously over three years. The full DXdao treasury
                can be seen{' '}
                <InlineUnderline>
                    <a
                        href="https://etherscan.io/tokenholdings?a=0x519b70055af55a007110b4ff99b0ea33071c720a"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                </InlineUnderline>{' '}
                .
            </ParagraphStandard>
            <ParagraphStandard marginTop={'0.75'}>
                DXD holders are entitled to the financial value created from
                DXdao products. In its current configuration, 10% of all revenue
                from DXdao products is deposited into the DXD smart contract
                buyback reserve as ETH and thus supports the price of DXD. REP
                holders can raise, but not lower, DXD holders’claim to 10% of
                revenue.
            </ParagraphStandard>
            <SubHeadline marginTop={'2.375'}>DXdao is on-chain</SubHeadline>

            <ItemWrapper marginTop={'0.75'}>
                <Bullet />
                <ListItem>
                    <InlineBold>No individual speaks for DXdao</InlineBold> -
                    DXdao is a community with many voices that contribute to its
                    permissionless, decentralized narrative. Anyone can claim to
                    speak in the best interests of DXdao, but only formal
                    proposals passed by REP holders on-chain speak for DXdao.
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                <Bullet />
                <ListItem>
                    <InlineBold>Openness and transparency</InlineBold> - The
                    entire history of DXdao can be viewed on the Ethereum
                    blockchain. Major decisions should be discussed openly and
                    ultimately resolved by REP holders on-chain.
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                <Bullet />
                <ListItem>
                    <InlineBold>
                        <InlineUnderline>Holographic Consensus</InlineUnderline>
                    </InlineBold>{' '}
                    - proposals are passed through a majority vote of REP
                    holders, but in order to scale its decision-making, DXdao
                    employs holographic consensus to pass proposals with just a
                    relative majority. With holographic consensus, when a
                    regular proposal is submitted, anyone can stake on the
                    outcome of the proposal and if it reaches a certain
                    threshold of staked tokens, it is “boosted” and can be
                    passed with a relative majority.
                </ListItem>
            </ItemWrapper>

            <SubHeadline marginTop={'2.375'}>
                Decentralization for the world
            </SubHeadline>

            <ItemWrapper marginTop={'0.75'}>
                <Bullet />
                <ListItem>
                    <InlineBold>Scaling decentralization</InlineBold> - DXdao’s
                    governance design separates financial value (DXD) from
                    voting power (REP), which allows for greater
                    decentralization. DXdao’s structure enables it to distribute
                    REP and scale to be the largest organization in the world.
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                <Bullet />
                <ListItem>
                    <InlineBold>REP is earned</InlineBold> - REP is earned by
                    community members who contribute to the DXdao. It is
                    non-transferrable and can be slashed.
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                {' '}
                <Bullet />
                <ListItem>
                    <InlineBold>Global community</InlineBold> - DXdao is a
                    collective that transcends borders as does its products,
                    which are globally accessible and permissionless. DXdao
                    strives to build an inclusive global community.
                </ListItem>
            </ItemWrapper>

            <SubHeadline marginTop={'2.375'}>
                Governance is the solution
            </SubHeadline>

            <ItemWrapper marginTop={'0.75'}>
                {' '}
                <Bullet />
                <ListItem>
                    DXdao relies on emergent structures and processes. Ideas,
                    initiatives and consensus arise from the community and it’s
                    the responsibility of DXdao governance to gather these
                    signals and guide the collective.
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                {' '}
                <Bullet />
                <ListItem>
                    At its core, DXdao aims to build tools, products and
                    processes that allow decision-making to arise from large
                    decentralized communities.
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                {' '}
                <Bullet />
                <ListItem>
                    Fearing central operators, some projects opt for no
                    governance. This leads to stagnation from decision paralysis
                    or it is co-opted by unaccountable off-chain governance.
                    DXdao recognizes the need to adapt and build new systems
                    that reach consensus in a scalable, decentralized and
                    effective way. Consensus is not an end, but a process.
                </ListItem>
            </ItemWrapper>

            <SubHeadline marginTop={'2.375'}>
                Open discourse and respect in reaching consensus
            </SubHeadline>

            <ItemWrapper marginTop={'0.75'}>
                {' '}
                <Bullet />
                <ListItem>
                    DXdao strives to reach consensus after productive debate
                    while respecting all members’ input. Discussion should be
                    based on facts and principles; arguments should not be
                    directed at specific individuals and the DXdao community
                    rejects harassment of any kind.{' '}
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                <Bullet />{' '}
                <ListItem>
                    DXdao governance and discussion should strive for
                    transparency to all community members. It is incumbent upon
                    DXdao community members to coordinate their actions and
                    communicate with each other across the DXdao forum, online
                    chats and community calls.
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                <Bullet />{' '}
                <ListItem>
                    DXdao encourages friendly and challenging discussions; this
                    open discussion is valued and crucial to the workings of
                    DXdao. Openness means building out in the open, and this
                    bleeds into everything.
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                {' '}
                <Bullet />
                <ListItem>
                    DXdao expects community members to operate and communicate
                    with integrity and respect for each other.
                </ListItem>
            </ItemWrapper>
            <ItemWrapper>
                {' '}
                <Bullet />
                <ListItem>
                    DXdao builds space for communities, while honoring the
                    individual, and accepts accountability and responsibility
                    for the actions and influences of the DXdao, in order to
                    further self-improvement.{' '}
                </ListItem>
            </ItemWrapper>

            <FlexWrap>
                <Logo src="./brand/dxdao-black.svg" />
            </FlexWrap>
        </ManifestoSection>
    );
};

export default Manifesto;
