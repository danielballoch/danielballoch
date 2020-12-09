import React from "react"
import { graphql } from "gatsby"
import PostListing from "../components/blog-link"
import PostListing2 from "../components/prismic-blog-link"
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
width: 800px;
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
    constructor(props) {
        super(props);
      }
      state = {
        pageTags: ["all"],
    };
    componentDidMount(){
        const posts = this.props.data.allMarkdownRemark.edges;
        const postsByTag = {};
        posts.forEach(({ node }) => {
        if (node.frontmatter.tags) {
                node.frontmatter.tags.forEach(tag => {
                if (!postsByTag[tag]) {
                    postsByTag[tag] = [];
                }

                postsByTag[tag].push(node);
                });
            }
        });
        const pageTags = Object.keys(postsByTag);
        this.setState({pageTags: pageTags}); 
    }

    
    render() {
        console.log(this.props)
        const postEdges = this.props.data.allMarkdownRemark.edges;
        const postList = this.props.pageContext.postList;
        const blogPage = this.props.data.blog.edges[0].node.data;
        const blogPost = this.props.data.blogposts.edges;
        const transitionStatus = this.props.transitionStatus;
        console.log(blogPost)

      return (
          <Container>
            <SEO title="Blog"/>
            <FadeDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
            <Nav/>
            <Header>
                <h1>{blogPage.title[0].text}</h1>
                <Intro>
                    <p>{blogPage.subtext[0].text}</p>
                </Intro>
                
                <TagsBlock list={postList} pageTags={this.state.pageTags}/>
            </Header>
            <PostListing2 postEdges={blogPost}/>
            <PostListing postEdges={postEdges} />
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
        blogposts: allPrismicBlogPost {
            edges {
                node {
                    uid
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
        allMarkdownRemark(
            filter: {fields: {collection: {eq: "posts"}}, frontmatter: {tags: {eq: $tagName}}}
            limit: 6
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 125)
                timeToRead
                frontmatter {
                  title
                  path
                  tags
                  date(formatString: "DD MMMM, YYYY")
                  image {
                    childImageSharp {
                      fluid(
                        maxWidth: 1000
                        quality: 90
                        traceSVG: { color: "#2B2B2F" }
                      ) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;