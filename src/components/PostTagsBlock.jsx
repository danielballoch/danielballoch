import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TagsContainer = styled.div`
  margin:4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  a {
    margin: 0 1rem 1rem 0;
    
    padding: 0.3rem 0.6rem;
    /* border: 2px solid ${props => props.theme.colors.highlights.blue}; */
    border: 1px solid ${props => props.theme.colors.neutral.black};
    border-radius: 100px;
    transition: .3s;
    &:hover {
        /* background-color: ${props => props.theme.colors.highlights.blue};
        color: ${props => props.theme.colors.background.white}; */
        border: 1px solid ${props => props.theme.colors.highlights.blue};
    }
  }

  @media (max-width: 720px){
    width: 100%;
    margin: auto;
    flex-direction: row;
    padding: 10px;
    /* height: 140px; */
    overflow-x:scroll;
    flex-wrap: nowrap;
    /* white-space: nowrap; */
  
    
  }
`;

const TagsBlock = ({ list, pageTags }) => (
  <TagsContainer>
    {list &&
      list.map(tag => {
        const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1);
        if (!pageTags){pageTags = ["all"]}
        else if (pageTags.length)
        console.log(pageTags.length)
        return ( 
            <div>
            <Link key={tag} to={`/blog/${tag}`} className={pageTags.includes(tag) && pageTags.length > 1 && tag !== "all" ? 'active' : pageTags.length > 2 && tag === "all" ? 'active' : "" }>
                <span>{upperTag}</span>
            </Link>
          </div>
        );
      })}
  </TagsContainer>
);

export default TagsBlock;

TagsBlock.propTypes = {
  list: PropTypes.array,
};
