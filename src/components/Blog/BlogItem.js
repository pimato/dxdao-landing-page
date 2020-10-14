import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Item = styled.div`
    margin: 20px;
    flex-basis: 27%;
    padding: 20px;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-family: var(--IBM);
`;
const Header = styled.h2`
    color: var(--black);
`;
const Paragraph = styled.p``;
const Image = styled.img`
    width: 200px;
    hight: 400px;
`;

const BlogItem = ({ data }) => {
    const history = useHistory();
    const handleClick = () => history.push(`/blog/${data.id}`);

    return (
        <Item onClick={handleClick}>
            <Header>{data.title}</Header>
            <Image src={data.image}></Image>
            <Paragraph>{data.short_description}</Paragraph>
        </Item>
    );
};

export default BlogItem;
