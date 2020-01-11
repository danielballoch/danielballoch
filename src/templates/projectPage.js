import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Link from 'gatsby-plugin-transition-link'

const Wrapper = styled.div`
margin: 0 auto;
max-width: 960px;
min-height: 100vh;
height: 100%;
padding: 100px 1.0875rem 1.45rem;
`
const NavOverlay = styled.div`
position: fixed;
display: flex;
left: 0;
transform: rotate(90deg);
opacity: .4;
margin-top: 7%;
div{
    transform: rotate(180deg);
    margin: 0 10px;
    border-bottom: white 2px solid;
    :hover{
        border-bottom: black 2px solid;
        cursor: pointer;
    }
}
a{
    transform: rotate(180deg);
    margin: 0 10px;
    border-color: white;
    border-bottom: 2px solid;
    transition: 3s;
    :hover{
        transition: 3s;
        border-color: black;
        border-bottom: 2px solid;
    }
    
}
`
const SLink = styled(Link)`
color: black;
border-color: white;
text-decoration: none;
`


export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Wrapper>
          <NavOverlay><SLink to="/">Home</SLink><SLink to="/">Contact</SLink></NavOverlay>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.service}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>published {post.frontmatter.date}</p>
        <Link to="/">back to hompage</Link>
      </Wrapper>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        service
        date
      }
    }
  }
  `