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
//   const { markdownRemark } = data 
  // data.markdownRemark holds our post data
//   const { frontmatter, html } = markdownRemark
//   const { next, prev } = pageContext;
    const post = data.prismicBlogPost.data 
    console.log(data)
    //run through content and create either text or image based on body.slice_type
    const blogContent = post.body.map((slice, index) => {
        if(slice.slice_type === 'text'){
            var textSection = slice.primary.text.map((text,i) => {
                if (text.type === "heading2") {
                    console.log("should be returning h2")
                    return <h2>{text.text}</h2>
                } else {
                    console.log("should be returning p")
                    return <p>{text.text}</p>
                }
            })
            return textSection;
            
        }
        else if (slice.slice_type === 'image'){
            return <img src={slice.primary.image.url} />
        }
    })
    

  return (
      <div>
          <SEO title={"hello"}/>
          <Container>
            <BlogPostContainer>
                <div className="blog-post">
                    <p>{post.date}</p>
                    <h1>{post.title[0].text}</h1>
                    <p>tags: {post.tags[0].text}</p>

                    {/* {post.body[0].primary.text.map(content => (
                    <p>{content.text}</p>  
                    ))}
                    <img src={post.body[1].primary.image.url} />  
                    {post.body[2].primary.text.map(content => (
                    <p>{content.text}</p>  
                    ))} */}

                    {blogContent}


                    {/* <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                    /> */}

                </div>
            </BlogPostContainer>
    {/* <TagsBlock list={frontmatter.tags || []} /> */}
    {/* <SuggestionBar>
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
      </SuggestionBar> */}
      </Container>
    </div>
  )
}

export const pageQuery = graphql`
  query prismicBlogPost($uid: String!) {
    prismicBlogPost(uid: {eq: $uid}) {
       data {
           title {
               text
           }
           tags {
               text
           }
           date 
           body {
               slice_type
               primary {
                text {
                    text
                    type
                }
                image {
                    url
                }
               }
           }
       }
  }
}
`