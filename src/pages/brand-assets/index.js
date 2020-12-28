import React from 'react';
import styled from 'styled-components';
import MetaTags from 'react-meta-tags';

const Headline = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 28px;
    text-align: left;
    letter-spacing: 0.02em;
    color: var(--dark-text);
    padding-left: 3px;
    margin-top: 14px;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
        padding-left: 12px;
        margin-bottom: 10px;
    }
`;

const Subheadline = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    letter-spacing: 0.02em;
    color: var(--dark-text);
    padding-left: 3px;
    margin-top: 14px;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
        padding-left: 12px;
        margin-bottom: 10px;
    }
`;

const Description = styled.div`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 31px;
    text-align: left;
    letter-spacing: 0.03em;
    margin-bottom: 30px;
    color: var(--light-body-text);
    padding: 0px 48px 3px 3px;
    @media (max-width: 1024px) {
        padding: 12px;
    }
`;

///////

const MediaSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 60px;
    padding: 0 4px;
    @media (max-width: 1024px) {
        margin-top: 0px;
    }
`;

const MediaPanelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media(max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        margin-top: 0
        &:nth-of-type(odd) {
        }
    }
`;

const MediaPanel = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--white);
    border: 1px solid rgba(51, 51, 51, 0.2);
    margin: -1px 0 0 -1px;
    minheight: 318px;
    padding: 32px;
    width: 50%;
    @media (max-width: 1024px) {
        margin: 24px 0 0 0;
        width: 100%;
        border-radius: 3px;
    }
    @media (max-width: 475px) {
        height: auto;
        width: 100%;
    }
`;

const Assets = styled.div`
    margin: 15px 0 0 0;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: var(--light-body-text);
`;

const AsssetItemLink = styled.a`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: var(--light-body-text);
    text-decoration: none;
    color: var(--dark-button-background);
    margin: 0 4px;
`;

const AssetItem = styled.div`
    line-height: 30px;
`;

const ProductNameWrapper = styled.div`
    display: flex;
`;

const ProductLogo = styled.img`
    width: 50px;
    height: 50px;
`;

const ProductName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    margin-left: 16px;
    letter-spacing: 0.02em;
    color: var(--dark-text);
`;

const ProductDescription = styled.div`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.03em;
    margin-top: 24px;
    color: var(--light-body-text);
`;

const assets = {
    dxdao: {
        blue: {
            svg: './brand/dxdao-blue.svg',
            png: './brand/dxdao-blue.png',
            jpg: './brand/dxdao-blue.jpg',
        },
        black: {
            svg: './brand/dxdao-black.svg',
            png: './brand/dxdao-black.png',
            jpg: './brand/dxdao-black.jpg',
        },
    },
    omen: {
        blue: {
            svg: './brand/omen-blue.svg',
            png: './brand/omen-blue.png',
            jpg: './brand/omen-blue.jpg',
        },
        black: {
            svg: './brand/omen-black.svg',
            png: './brand/omen-black.png',
            jpg: './brand/omen-black.jpg',
        },
    },
    mix: {
        black: {
            svg: './brand/mix-black.svg',
            png: './brand/mix-black.png',
            jpg: './brand/mix-black.jpg',
        },
    },
    swapr: {
        purple: {
            svg: './brand/dxswap-purple.svg',
            png: './brand/dxswap-purple.png',
            jpg: './brand/dxswap-purple.jpg',
        },
        black: {
            svg: './brand/dxswap-black.svg',
            png: './brand/dxswap-black.png',
            jpg: './brand/dxswap-black.jpg',
        },
    },
    mesa: {
        black: {
            svg: './brand/mesa-black.svg',
            png: './brand/mesa-black.png',
            jpg: './brand/mesa-black.jpg',
        },
    },
    rails: {
        black: {
            svg: './brand/rails-black.svg',
            png: './brand/rails-black.png',
        },
        white: {
            svg: './brand/rails-white.svg',
            png: './brand/rails-white.png',
        },
    },
};

export const BrandAssets = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="Brand Assets">
            <MetaTags>
                <meta
                    id="meta-description"
                    name="dxdao.eth"
                    content="Official DXdao and product logos: Omen Rails Swapr Mesa"
                />
                <meta id="og-title" property="og:title" content="DXdao Brand" />
                <meta
                    name="keywords"
                    content="DXdao, BrandAssets, Omen, Dxswap, Mesa"
                />
            </MetaTags>
            <Headline>DXdao Brand</Headline>
            <Description>
                <pre>Official DXdao and product logos</pre>
            </Description>
            <Subheadline>About DXdao</Subheadline>
            <Description>
                <pre>
                    The DXdao is a decentralized organization. It develops,
                    governs, and grows DeFi protocols and products. Owned and
                    operated by the community, the DXdao has the potential to
                    significantly scale its membership.
                </pre>
            </Description>
            <MediaSection>
                <MediaPanelWrapper>
                    <MediaPanel style={{ borderTopLeftRadius: 3 }}>
                        <ProductNameWrapper>
                            <ProductLogo src="DXD.svg" />
                            <ProductName>DXdao logo</ProductName>
                        </ProductNameWrapper>
                        <ProductDescription>
                            This is the main DXdao logo and should always be
                            used as is. This logo should be used when reflecting
                            the collective or DXD token, for example when
                            partnering with us.
                        </ProductDescription>
                        <Assets>
                            <AssetItem>
                                Black:
                                <AsssetItemLink
                                    href={assets.dxdao.black.svg}
                                    target="#"
                                >
                                    svg
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.dxdao.black.png}
                                    target="#"
                                >
                                    png
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.dxdao.black.jpg}
                                    target="#"
                                >
                                    jpg
                                </AsssetItemLink>
                            </AssetItem>
                            <AssetItem>
                                Blue:
                                <AsssetItemLink
                                    href={assets.dxdao.blue.svg}
                                    target="#"
                                >
                                    svg
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.dxdao.blue.png}
                                    target="#"
                                >
                                    png
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.dxdao.blue.jpg}
                                    target="#"
                                >
                                    jpg
                                </AsssetItemLink>
                            </AssetItem>
                        </Assets>
                    </MediaPanel>
                    <MediaPanel style={{ borderTopRightRadius: 3 }}>
                        <ProductNameWrapper>
                            <ProductLogo src="Omen.svg" />
                            <ProductName>Omen logo</ProductName>
                        </ProductNameWrapper>
                        <ProductDescription>
                            This is the main Omen logo and should always be used
                            as is. This logo should be used when reflecting the
                            Omen product, for example when partnering with us.
                        </ProductDescription>
                        <Assets>
                            <AssetItem>
                                Black:
                                <AsssetItemLink
                                    href={assets.omen.black.svg}
                                    target="#"
                                >
                                    svg
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.omen.black.png}
                                    target="#"
                                >
                                    png
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.omen.black.jpg}
                                    target="#"
                                >
                                    jpg
                                </AsssetItemLink>
                            </AssetItem>
                            <AssetItem>
                                Blue:
                                <AsssetItemLink
                                    href={assets.omen.blue.svg}
                                    target="#"
                                >
                                    svg
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.omen.blue.png}
                                    target="#"
                                >
                                    png
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.omen.blue.jpg}
                                    target="#"
                                >
                                    jpg
                                </AsssetItemLink>
                            </AssetItem>
                        </Assets>
                    </MediaPanel>
                </MediaPanelWrapper>
                <MediaPanelWrapper>
                    <MediaPanel>
                        <ProductNameWrapper>
                            <ProductLogo src="Mix.svg" />
                            <ProductName>Mix logo</ProductName>
                        </ProductNameWrapper>
                        <ProductDescription>
                            This is the main Mix logo and should always be used
                            as is. This logo should be used when reflecting the
                            Mix product, for example when partnering with us.
                        </ProductDescription>
                        <Assets>
                            <AssetItem>
                                Black:
                                <AsssetItemLink
                                    href={assets.mix.black.svg}
                                    target="#"
                                >
                                    svg
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.mix.black.png}
                                    target="#"
                                >
                                    png
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.mix.black.jpg}
                                    target="#"
                                >
                                    jpg
                                </AsssetItemLink>
                            </AssetItem>
                        </Assets>
                    </MediaPanel>
                    <MediaPanel style={{ borderBottomRightRadius: 3 }}>
                        <ProductNameWrapper>
                            <ProductLogo src="Dxswap.svg" />
                            <ProductName>Swapr logo</ProductName>
                        </ProductNameWrapper>
                        <ProductDescription>
                            This is the main Swapr logo and should always be
                            used as is. This logo should be used when reflecting
                            the Swapr product, for example when partnering with
                            us.
                        </ProductDescription>
                        <Assets>
                            <AssetItem>
                                Black:
                                <AsssetItemLink
                                    href={assets.swapr.black.svg}
                                    target="#"
                                >
                                    svg
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.swapr.black.png}
                                    target="#"
                                >
                                    png
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.swapr.black.jpg}
                                    target="#"
                                >
                                    jpg
                                </AsssetItemLink>
                            </AssetItem>
                            <AssetItem>
                                Purple:
                                <AsssetItemLink
                                    href={assets.swapr.purple.svg}
                                    target="#"
                                >
                                    svg
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.swapr.purple.png}
                                    target="#"
                                >
                                    png
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.swapr.purple.jpg}
                                    target="#"
                                >
                                    jpg
                                </AsssetItemLink>
                            </AssetItem>
                        </Assets>
                    </MediaPanel>
                </MediaPanelWrapper>
                <MediaPanelWrapper>
                    <MediaPanel style={{ borderBottomLeftRadius: 3 }}>
                        <ProductNameWrapper>
                            <ProductLogo src="Mesa.svg" />
                            <ProductName>Mesa logo</ProductName>
                        </ProductNameWrapper>
                        <ProductDescription>
                            This is the main Mesa logo and should always be used
                            as is. This logo should be used when reflecting the
                            Mix product, for example when partnering with us.
                        </ProductDescription>
                        <Assets>
                            <AssetItem>
                                Black:
                                <AsssetItemLink
                                    href={assets.mesa.black.svg}
                                    target="#"
                                >
                                    svg
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.mesa.black.png}
                                    target="#"
                                >
                                    png
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.mesa.black.jpg}
                                    target="#"
                                >
                                    jpg
                                </AsssetItemLink>
                            </AssetItem>
                        </Assets>
                    </MediaPanel>
                    <MediaPanel style={{ borderBottomLeftRadius: 3 }}>
                        <ProductNameWrapper>
                            <ProductLogo src="Rails.svg" />
                            <ProductName>Rails logo</ProductName>
                        </ProductNameWrapper>
                        <ProductDescription>
                            This is the main Rails logo and should always be
                            used as is. This logo should be used when reflecting
                            the Rails product, for example when partnering with
                            us.
                        </ProductDescription>
                        <Assets>
                            <AssetItem>
                                Black:
                                <AsssetItemLink
                                    href={assets.rails.black.svg}
                                    target="#"
                                >
                                    svg
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.rails.black.png}
                                    target="#"
                                >
                                    png
                                </AsssetItemLink>
                            </AssetItem>
                            <AssetItem>
                                White:
                                <AsssetItemLink
                                    href={assets.rails.white.svg}
                                    target="#"
                                >
                                    svg
                                </AsssetItemLink>
                                /
                                <AsssetItemLink
                                    href={assets.rails.white.png}
                                    target="#"
                                >
                                    png
                                </AsssetItemLink>
                            </AssetItem>
                        </Assets>
                    </MediaPanel>
                </MediaPanelWrapper>
            </MediaSection>
        </section>
    );
};
