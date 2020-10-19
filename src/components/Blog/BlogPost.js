import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Articles from '../../misc/ipfsTestAllArticles.json';
import ReactMarkdown from 'react-markdown';

const BlogPostWrapper = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    font-family: var(--IBM);
`;
const Header = styled.div`
    text-align: center;
    margin-bottom: 20px;
    margin-top: 0px;
    font-size: 2rem;
    font-weight: 500;
`;
const Image = styled.img`
    text-align: center;
    object-fit: cover;
    margin-bottom: 40px;
`;

export const BlogPost = () => {
    const [blogState, setBlogState] = useState({
        title: '',
        image: '',
        markdown: '',
    });
    //based on id i will find desired post

    useEffect(() => {
        const currentId = Number(window.location.hash.substring(7));

        const { title, image, markdown, short_description } = Articles.find(
            ({ id }) => currentId === id
        );
        setBlogState({
            title: title,
            image: image,
            description: short_description,
            markdown: markdown,
        });
    }, []);

    return (
        <BlogPostWrapper>
            <Header>{blogState.title}</Header>
            <Image src={blogState.image} />
            <ReactMarkdown source={blogState.markdown} />
        </BlogPostWrapper>
    );
};
