import React from 'react';
import styled from 'styled-components';

const ManifestoSection = styled.section`
    display: block;
    padding: 44px;
    font-style: normal;
    font-family: 'IBM Plex Sans', sans-serif;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
`;
const Headline = styled.div`
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #2b2b2b;
`;
const DateRatified = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #536dfe;
    text-decoration-line: underline;
    margin-top: 8px;
`;
const ParagraphStandard = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #616161;
    margin-top: ${(prop) => prop.marginTop}rem;
`;

const SubHeadline = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #2b2b2b;
    margin-top: ${(prop) => (prop.marginTop ? prop.marginTop : 0)}rem;
`;
const RegularBold = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-top: ${(prop) => (prop.marginTop ? prop.marginTop : 0)}rem;
    color: #616161;
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
    background-color: #616161;
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
                    href="https://etherscan.io/tx/0x7ae4b4a3dc8e8bc31a42a39f12b6c4b6a5ba3608a12b961f3f6dc006d99507b9"
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
