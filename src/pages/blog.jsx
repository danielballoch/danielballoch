import React from "react"
import { graphql } from "gatsby"
import PostListing from "../components/blog-link"
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

      return (
          <Container>
            <SEO title="Blog"/>
            <Header>
                <h1>Welcome to the Community</h1>
                <h3>This is where we post all insider information around mens fashion!</h3>
                <TagsBlock list={postList} pageTags={this.state.pageTags}/>
            </Header>
            <PostListing postEdges={postEdges} />
          </Container>
      );
    }
    
  }
  
  export default Index;

export const pageQuery = graphql`
    query(
        $tagName: String, 
    ) {
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