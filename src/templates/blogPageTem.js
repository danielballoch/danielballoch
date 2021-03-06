import React from "react"
import { graphql } from "gatsby"
import PostListing from "../components/prismic-blog-link"
import Nav from "../components/nav"
import Layout from "../components/layout"
import styled from '@emotion/styled';
import TagsBlock from '../components/PostTagsBlock';
import SEO from "../components/seo"

const Header = styled.div`
margin-top: 140px;
h1 {
    margin: 40px;
}
text-align: center;
`
const Container = styled.div`
margin: auto;
`
const Intro = styled.div`
margin: auto;
padding: 0 20px;
max-width: 800px;
text-align: justify;
`

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
   

class Index extends React.Component {
    
    render() {
        console.log("props: ",this.props)
        console.log("state", this.state)
        const postList = this.props.pageContext.postList;
        const blogPage = this.props.data.blog.edges[0].node.data;
        const blogPost = this.props.data.blogposts.edges;
        const transitionStatus = this.props.transitionStatus;

       
        console.log(blogPost)

      return (
          <Container>
            <SEO title="Blog"/>
            
            <Nav/>
            <Header>
                <h1>{blogPage.title[0].text}</h1>
                <Intro>
                    <p>{blogPage.subtext[0].text}</p>
                </Intro>
                
                <TagsBlock list={postList} pageTags={this.props.pageContext.tagName}/>
            </Header>

            <FadeDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
            <PostListing postEdges={blogPost}/>
            </FadeDiv>
          </Container>
      );
    }
    
  }
  
  export default Index;

export const pageQuery = graphql`
    query(
        $tagName: String, 
    ) {
        blog: allPrismicBlogPage {
            edges {
                node {
                    data {
                        title {
                            text
                        }
                        subtext {
                            text
                        }
                    }
                }
            }
        }
        blogposts: allPrismicBlogPost(
            filter: {tags: {eq: $tagName}}
        ) {
            edges {
                node {
                    uid
                    tags
                    data {
                        date
                        title {
                            text
                        }
                        tags {
                            text
                        }
                        thumbnail {
                            url
                        }
                        description {
                            text
                        }
                    }
                }
            }
        }
        }
      `;