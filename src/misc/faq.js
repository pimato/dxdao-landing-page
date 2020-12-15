import React from 'react';

const FAQ = [
    {
        question: 'What is DXdao all about?',
        answer: (
            <pre>
                The best place to learn about DXdao is to check out the{' '}
                <a href="#/manifesto">DXdao Manifesto</a>.
            </pre>
        ),
    },
    {
        question: 'What products does the DXdao currently own or operate?',
        answer:
            'DXdao’s current suite of products include Omen, a prediction market; Swapr, a governance-enabled AMM; Mesa, a front-running resistant DEX; and Rails, a Layer 2 payment rails.\n',
    },
    {
        question: 'What revenues does the DXdao have?',
        answer: (
            <pre>
                DXdao currently has two main paths of earning revenue, the first
                is directly from its products and the second is deals that DXdao
                can make with other entities. DXdao is beginning to earn
                protocol fees directly from Swapr. Also this year, DXdao has
                begun to earn revenue through an incentive program with Mesa
                structured with Gnosis. Revenue flows to DXD via the
                <a
                    href="https://dxtrust.eth.link/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {' '}
                    bonding curve
                </a>
                . Currently, DXdao’s other products do not have revenue paths
                turned on as the focus is on growing the user base.
            </pre>
        ),
    },
    {
        question:
            'How does the DXdao come to own and operate these protocols, products, or services?',
        answer:
            'DXdao has both built and been gifted products up to now. DXdao has products running on permissionless protocols deployed onto Ethereum. ',
    },
    {
        question: 'How does the Bonding curve work?',
        answer: (
            <pre>
                You can dive into the details of how the Continuous Token
                Offering (CTO) works{' '}
                <a
                    href="https://github.com/levelkdev/openraise-dapp/blob/master/docs/ContinuousOrganization.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>
                .
            </pre>
        ),
    },
    {
        question: 'Who makes up DXdao?',
        answer:
            'DXdao is made up of stakeholders, otherwise known as "reputation holders". Your proportion of the dao\'s reputation determines your voting weight. This reputation is owned by Ethereum addresses that collectively control the set of smart contracts that is the DXdao, and the projects it administers. Some DXdao members assert themselves as the owners of certain addresses, other address owners are anonymous.',
    },
    {
        question: 'How does one earn Reputation (“REP”) in DXdao?',
        answer:
            'One can earn Reputation in DXdao by contributing to DXdao itself.  This is done by a proposal which is put to a vote. For example: currently, a full-time contributor requests 0.1667% of reputation (to their Ethereum address) for work completed.  DXdao members can then cast on-chain votes weighted by reputation. If the proposal passes, the new member is automatically granted reputation.',
    },
    {
        question: 'How does decision making happen in the DXdao?',
        answer:
            "DXdao reputation holders vote on proposals on-chain, using DAOstack's Alchemy interface and holographic consensus. This means some proposals can pass by a relative majority, and other times an absolute majority is needed. This depends on the type of proposal, and if the proposal is boosted by reaching a specific staking threshold. In general, though, the DXdao coalesces around ideas and achieves rough consensus via off-chain, less formal methods, such as weekly calls, discussion forums, chat groups, etc. All of these are open to the public.",
    },

    {
        question: 'What is the difference between DXD and Reputation (“REP”)?',
        answer: (
            <pre>
                DXD is the economic token of the DXdao. It is a transferable
                ERC20 token which grants its holders a share of the revenue of
                DXdao, as well as certain privileges or premier services on
                DXdao-owned products. <br />
                Reputation (“REP”) is the governance mechanism that controls the
                DXdao. It is non-transferrable and holders have a right - and
                implicit duty - to govern and direct the collective.
                <br />
                <br />
                DXD and reputation holders need not overlap, but it is likely
                some part of each stakeholder group will hold both to more
                tightly couple their interests. As holding DXD is the more
                passive path - and the one tied to economic success - it will
                likely be the more widely owned stake in the system.
            </pre>
        ),
    },

    {
        question: 'How do I get involved?',
        answer:
            'Check out the current Worker Opportunities and Bounty Billboard for ways to contribute. Join the Telegram, Keybase chat, and follow DXdao on Twitter.',
    },
];

export default FAQ;
