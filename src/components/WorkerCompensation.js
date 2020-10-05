import React from 'react';
import styled, { css } from 'styled-components';

const Rounded = css`
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    padding: 2rem;
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
        padding: 1.25rem;
    }
`;
const Headline = styled.div`
    margin-top: 1.25rem;
    font-family: IBM Plex Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: 0.02em;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.01em;
    }
`;
const BlueText = styled.div`
    margin-top: 0.5rem;
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #536dfe;
    text-decoration-line: underline;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-top: 0.375rem;
        line-height: 22px;
        letter-spacing: 0em;
    }
`;
const FlexWrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    font-family: IBM Plex Sans;
`;

const GuidingTenets = styled.div`
    ${Rounded};
    margin-top: 0px;
`;
const SalaryStructure = styled.div`
    ${Rounded}
`;
const MonthlyComp = styled.div`
    flex: 2;
    margin-right: 1.25rem;
    ${Rounded};
    padding: 0px;
    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        margin-right: 0rem;
        padding: 0px;
        line-height: 21px;
    }
`;
const CalculateComp = styled.div`
    flex: 1;
    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
    }
    ${Rounded}
`;

const ExperienceGuidelines = styled.div`
    ${Rounded}
`;
const ExampleCompStructure = styled.div`
    flex: 1;
    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        margin-right: 0px;
    }
    margin-right: 1rem;
    ${Rounded}
`;
const OtherItems = styled.div`
    flex: 1;
    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        margin-left: 0px;
    }

    margin-left: 0.625rem;
    ${Rounded}
`;

const SubHeader = styled.div`
    color: #2b2b2b;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.02em;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 21px;
    }
`;
const NormalText = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: ${(prop) => (prop.lineHeight ? prop.lineHeight : 22)}px;
    letter-spacing: 0.01rem;
    text-align: left;
    overflow: hidden;
    color: #616161;
`;
const ItemWrapper = styled.div`
    margin-top: ${(prop) => (prop.marginTop ? prop.marginTop : 0.625)}rem;

    @media screen and (max-width: 768px) {
        margin-top: ${(prop) => (prop.marginTop ? prop.marginTop : 0.5)}rem;
    }
`;

const Bullet = styled.div`
    height: 8px;
    width: 8px;
    background-color: #616161;
    border-radius: 50%;
    float: left;
    margin-top: 0.375rem;
    margin-right: 1rem;
`;
const SubBullet = styled(Bullet)`
    margin-left: 1.25rem;
    border: 1px solid #616161;
    background-color: white;
`;
const LevelsBullet = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;
    border: 1px solid #d6d6d6;
    float: left;
    padding: 0.25rem 0.8125rem;
    border-radius: 6px;
    margin-right: 1.25rem;
`;
const NumberBullet = styled.div`
    height: 24px;
    width: 24px;
    float: left;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #d6d6d6;
    background-color: white;
    padding-top: 3px;
    margin-right: 1.25rem;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        height: 20px;
        width: 20px;
        padding-top: 1px;
    }
`;
const Table = styled.table`
    width: 100%;
    height: 78%;
    margin-top: 1.25rem;
    border-collapse: collapse;
    @media screen and (max-width: 985px) {
        height: 81%;
    }
    @media screen and (min-width: 768px) and (max-width: 867px) {
        height: 83%;
    }
`;
const TableHeader = styled.th`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    color: #2b2b2b;
    letter-spacing: 0px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    padding: 0.625rem 2rem;

    @media screen and (max-width: 768px) {
        padding: 0.5625rem 1rem;
        font-size: 12px;
    }
`;
const TableRegular = styled(TableHeader)`
    font-weight: 400;
    border-bottom: ${(prop) =>
        prop.bottomBorder ? '0px solid #ddd' : '1px solid #ddd'};
`;
const MonthlyHeader = styled(SubHeader)`
    margin: 2rem;

    @media screen and (max-width: 768px) {
        margin: 1.25rem;
    }
`;
const WorkerCompensation = () => {
    return (
        <React.Fragment>
            <Headline>Worker Compensation Guidelines</Headline>
            <BlueText>Ratified on September 19th, 2020</BlueText>
            <FlexWrapper>
                <GuidingTenets>
                    <SubHeader>
                        Guiding Tenets
                        <ItemWrapper marginTop={'1'}>
                            <Bullet />
                            <NormalText>
                                DXdao should offer fair & competitive
                                compensation, while also attracting those
                                aligned with the mission of DXdao.
                            </NormalText>
                        </ItemWrapper>
                        <ItemWrapper>
                            <Bullet />
                            <NormalText>
                                DXdao hopes to attract the best and most
                                ambitious minds across the world.
                            </NormalText>
                        </ItemWrapper>
                        <ItemWrapper>
                            <Bullet />
                            <NormalText>
                                Transparency in structure and a clear path for
                                future growth are important.
                            </NormalText>
                        </ItemWrapper>
                        <ItemWrapper>
                            <Bullet />
                            <NormalText>
                                DXdao workers should be incentivized to drive
                                financial value to DXD; compensation in DXD is
                                meant to align worker interests with DXD
                                holders.
                            </NormalText>
                        </ItemWrapper>
                    </SubHeader>
                </GuidingTenets>
                <SalaryStructure>
                    <SubHeader>Salary Structure</SubHeader>

                    <ItemWrapper marginTop={'1'}>
                        <Bullet />
                        <NormalText>Base salary in ETH or Dai</NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Bullet />
                        <NormalText>
                            DXD compensation on top of base salary. This is
                            vested continuously for two years with a one year
                            cliff.
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Bullet />
                        <NormalText>
                            Compensation is denominated in US dollars. ETH
                            payment is determined by the price of ETH at
                            proposal submission. DXD price is the price on the
                            DXtrust buy price at proposal submission.
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Bullet />
                        <NormalText>
                            Full-time contributors receive 0.1667% REP per
                            month, capped at 4%
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Bullet />
                        <NormalText>
                            2 month Trial & Ramp up period - there is a trial
                            period during the first two months of worker
                            contributions. During Month 1, 75% of normal
                            compensation is paid; Month 2, 90% of normal
                            compensation; and Month 3 (and thereafter), 100% of
                            normal compensation. Bounties and other
                            contributions may count towards a workers’ trial
                            period.
                        </NormalText>
                    </ItemWrapper>
                </SalaryStructure>
                <MonthlyComp>
                    <MonthlyHeader>Monthly Compensation</MonthlyHeader>
                    <Table>
                        <tbody>
                            <tr>
                                <TableHeader>Experience Level</TableHeader>
                                <TableHeader>Base Salary</TableHeader>
                                <TableHeader>DXD Compensation</TableHeader>
                            </tr>
                            <tr>
                                <TableRegular>Level 1</TableRegular>
                                <TableRegular>$4,000</TableRegular>
                                <TableRegular>$2,000</TableRegular>
                            </tr>
                            <tr>
                                <TableRegular>Level 2</TableRegular>
                                <TableRegular>$5,000</TableRegular>
                                <TableRegular>$3,000</TableRegular>
                            </tr>
                            <tr>
                                <TableRegular>Level 3</TableRegular>
                                <TableRegular>$6,000</TableRegular>
                                <TableRegular>$4,000</TableRegular>
                            </tr>
                            <tr>
                                <TableRegular>Level 4</TableRegular>
                                <TableRegular>$7,000</TableRegular>
                                <TableRegular>$5,000</TableRegular>
                            </tr>
                            <tr>
                                <TableRegular bottomBorder={true}>
                                    Level 5
                                </TableRegular>
                                <TableRegular bottomBorder={true}>
                                    $8,000
                                </TableRegular>
                                <TableRegular bottomBorder={true}>
                                    $6,000
                                </TableRegular>
                            </tr>
                        </tbody>
                    </Table>
                </MonthlyComp>
                <CalculateComp>
                    <SubHeader>Calculate Compensation</SubHeader>

                    <ItemWrapper marginTop={'1.5'}>
                        <NumberBullet>1</NumberBullet>
                        <NormalText>
                            Pick your experience Level 1-5, based on experience
                            guidelines and in consultation with DXdao community
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper marginTop={'1'}>
                        <NumberBullet>2</NumberBullet>
                        <NormalText>
                            Select Base Salary + DXD from monthly compensation
                            table
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper marginTop={'1'}>
                        <NumberBullet>3</NumberBullet>
                        <NormalText>
                            If opting for part-time work, multiply these numbers
                            by % of time, or intended hrs/week divided by 40.
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper marginTop={'1'}>
                        <NumberBullet>4</NumberBullet>
                        <NormalText>
                            Determine % of full salary if during the month trial
                            period.
                        </NormalText>
                    </ItemWrapper>
                </CalculateComp>

                <ExperienceGuidelines>
                    <SubHeader>Experience Guidelines</SubHeader>
                    <ItemWrapper marginTop={'1.5'}>
                        <LevelsBullet>Level 1</LevelsBullet>
                        <NormalText lineHeight={'28'}>
                            I’m new! I don’t have many marketable life skills
                            but I’m passionate about DXdao and eager to learn
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper marginTop={'1'}>
                        <LevelsBullet>Level 2</LevelsBullet>
                        <NormalText>
                            I have some work experience, but I have not yet
                            developed specialized skills. Perhaps I have worked
                            in a related industry, but I might lack direct
                            experience in Web3/DeFi/DAOs. I’m eager to get more
                            expertise in my vertical.
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper marginTop={'1'}>
                        <LevelsBullet>Level 3</LevelsBullet>
                        <NormalText>
                            I’ve been around the block and know how to work
                            independently, but I still need help coming up with
                            a scope of work and working with people outside of
                            my area of focus. I’m eager to grow horizontally and
                            vertically.
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper marginTop={'1'}>
                        <LevelsBullet>Level 4</LevelsBullet>
                        <NormalText>
                            I know what’s going on and some (maybe even myself)
                            would consider me an “expert” on my specialty. I can
                            work with different stakeholders and drive
                            initiatives internally. I’m eager to fill gaps in my
                            skill set.
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper marginTop={'1'}>
                        <LevelsBullet>Level 5</LevelsBullet>
                        <NormalText>
                            I have deep expertise in a particular vertical or
                            have direct experience that is relevant to
                            Web3/DeFi/ DAOs. I’m eager to further the mission of
                            DXdao and work with other engaging and ambitious
                            people.
                        </NormalText>
                    </ItemWrapper>
                </ExperienceGuidelines>
                <ExampleCompStructure>
                    <SubHeader>Example Compensation Structure</SubHeader>
                    <ItemWrapper marginTop={'1'}>
                        <Bullet />
                        <NormalText>
                            4 years as full-stack web developer but just getting
                            started in Web3/DeFi/DAO
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Bullet />
                        <NormalText>Experience Level: 3</NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Bullet />
                        <NormalText>Full-time</NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Bullet />
                        <NormalText>Third Month working for DXdao</NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Bullet />
                        <NormalText>Monthly Salary:</NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <SubBullet />
                        <NormalText>
                            $6,000 (ETH) distributed monthly
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <SubBullet />
                        <NormalText>
                            $2,000 (DXD) vested for 1 year and $2,000 (DXD)
                            vested for 2 years
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <SubBullet />
                        <NormalText>
                            0.1667% REP (voting power in DXdao)
                        </NormalText>
                    </ItemWrapper>
                </ExampleCompStructure>
                <OtherItems>
                    <SubHeader>Other Items</SubHeader>
                    <ItemWrapper marginTop={'1'}>
                        <Bullet />
                        <NormalText>
                            There is no vacation policy. Contributors are
                            encouraged to rest and take vacations as
                            appropriate, but these should be clearly
                            communicated in worker proposals. It is incumbent
                            upon individual contributors to ensure other DXdao
                            workers are aware of any vacation or time-off.
                        </NormalText>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Bullet />
                        <NormalText>
                            Community consensus limits additional REP awards to
                            contributors with more than 4% of total REP. For
                            contributors with over 4% REP, DXD may be
                            substituted for the monthly REP issuance.
                        </NormalText>
                    </ItemWrapper>
                </OtherItems>
            </FlexWrapper>
        </React.Fragment>
    );
};

export default WorkerCompensation;
