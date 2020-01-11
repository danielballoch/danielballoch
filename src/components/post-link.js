import React from "react"
import Link from 'gatsby-plugin-transition-link'
import Image from 'gatsby-image';
import styled from '@emotion/styled';


const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 1140px;
justify-content: space-evenly;
margin: 50px auto;
width: 100%;
text-align: left;
color: black;
transition: .3s;
@media (max-width: 620px) {
        /* width: 80vw; */
        flex-direction: column;
        flex-wrap: nowrap;
        h1{
            font-size:30px;
        }
    }

h1{
    margin: 1px 0;
    margin-bottom: 10px;
    text-decoration: black underline;
}

`
const InsideWrapper =styled.div`
.image{
    width: 360px;
}
padding: 10px;
background: whitesmoke;
:hover {
 filter: brightness(97%);
}
`
const SubText = styled.div`
color: black;
text-decoration: none;
`
const SLink = styled(Link)`
text-decoration: none;
`

class PostListing extends React.Component {
    getPostList() {
        const postList = [];
        this.props.postEdges.forEach(postEdge => {
            postList.push({
                path: postEdge.node.frontmatter.path,
                tags: postEdge.node.frontmatter.tags,
                image: postEdge.node.frontmatter.image,
                title: postEdge.node.frontmatter.title,
                service: postEdge.node.frontmatter.service,
                date: postEdge.node.frontmatter.date,
                excerpt: postEdge.node.excerpt,
                timeToRead: postEdge.node.timeToRead
            });
        });
        return postList;
    }
    constructor(props) {
        super(props);

        this.state = {
            excerptLength: 290
        }
    }
    componentDidMount(){
        if (window.innerWidth < 620) {this.setState({excerptLength: 110})};
    }

    render(){
        const postList = this.getPostList();
        
        return(
            <Wrapper>
                {
                postList.map(post => (
                    <SLink to={post.path} key={post.title}>
                        <InsideWrapper>
                            <Image className="image" fluid={post.image.childImageSharp.fluid}/>
                            <SubText>
                                <h1>{post.title}</h1>
                                {post.service}                           
                            </SubText>
                        </InsideWrapper>
                    </SLink>
                ))
                }
            </Wrapper>
        )
    }
}

export default PostListing;