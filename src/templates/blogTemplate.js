import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from '@emotion/styled';
import TagsBlock from "../components/PostTagsBlock"
import SEO from "../components/seo"

const Container = styled.div`
padding: 200px 10px;
margin: auto;
max-width: 800px;
`

const BlogPostContainer = styled.div`
text-align: left;
padding-top: 10px;
h2 {
    text-align: left;
}

`

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: white;
  /* box-shadow: ${props => props.theme.colors.neutral.black}; */
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;



export default function Template({
  data, pageContext // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { next, prev } = pageContext;
  return (
      <div>
          <SEO title={frontmatter.title}/>
          <Container>
            <BlogPostContainer>
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.date}</p>
                    <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                    />

                </div>
            </BlogPostContainer>
    <TagsBlock list={frontmatter.tags || []} />
    <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
      </Container>
    </div>
  )
}

export const pageQuery = graphql`
  query blogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`