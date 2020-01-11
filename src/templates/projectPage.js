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


export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Wrapper>
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