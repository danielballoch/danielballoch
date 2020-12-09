import React from "react"
import { graphql, Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import Layout from "../components/layout"
import styled from '@emotion/styled';
import TagsBlock from "../components/PostTagsBlock"
import SEO from "../components/seo"

import Nav from "../components/nav"

const FadeDiv = styled.div`
opacity: ${props => props.theme.opacity};
transition: .3s;
`
FadeDiv.defaultProps = {
    theme: {
        opacity: "1",
        transform: "translateX(0)"
    }
}

const entering = {
    opacity: "0",
    transform: "translateX(-20%)"
}
const exiting = {
    opacity: "0",
    transform: "translateX(0)"
}


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



export default function Template({transitionStatus,
  data, pageContext // this prop will be injected by the GraphQL query below.
}) {

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
          <SEO title={post.title[0].text}/>
          <FadeDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
          <Nav/>
          <Container>
            <BlogPostContainer>
                <div className="blog-post">
                    <p>{post.date}</p>
                    <h1>{post.title[0].text}</h1>
                    <p>tags: {post.tags[0].text}</p>

                    {blogContent}
                </div>
            </BlogPostContainer>
      </Container>
      </FadeDiv>
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