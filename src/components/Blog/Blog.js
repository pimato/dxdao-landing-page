import React from 'react';
import styled from 'styled-components';
import BlogItem from './BlogItem';
import Articles from '../../misc/blog-posts';

const BlogContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    font-family: var(--IBM);
`;

const Blog = () => {
    return (
        <BlogContainer>
            {Articles.map((articleData) => {
                return <BlogItem key={articleData.id} data={articleData} />;
            })}
        </BlogContainer>
    );
};
export default Blog;
