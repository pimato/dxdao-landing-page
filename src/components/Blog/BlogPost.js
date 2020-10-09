import React from 'react';
import styled from 'styled-components';
import Articles from '../../misc/blog-posts';
import ReactMarkdown from 'react-markdown';

const BlogPostWrapper = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    font-family: IBM Plex Sans;
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

const BlogPost = () => {
    //based on id i will find desired post
    const currentId = Number(window.location.hash.substring(7));

    const { title, short_description, image, markdown } = Articles.find(
        ({ id }) => currentId === id
    );

    return (
        <BlogPostWrapper>
            <Header>{title}</Header>
            <Image src={image} />
            <ReactMarkdown source={markdown} />
        </BlogPostWrapper>
    );
};

export default BlogPost;
