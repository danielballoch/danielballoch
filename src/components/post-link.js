import React from "react"
import TransitionLink from 'gatsby-plugin-transition-link'
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
    width: 480px;
    height: 238px;
    @media (max-width: 620px) {
        width: auto;
        height: auto;
    }
}
padding: 10px;
background: whitesmoke;
transition: .3s;
:hover {
 filter: brightness(97%);
}
`
const SubText = styled.div`
color: black;
text-decoration: none;
`
const SLink = styled(TransitionLink)`
text-decoration: none;
`
const RepoDiv = styled.div`
font-size: 20px;
font-family: 'Open Sans';
transition: .5s;
opacity: 0;
/* display: none; */
position: absolute;
z-index: 999;
background: whitesmoke;
border: 2px solid whitesmoke;
border-radius: 0 0 10px 10px;
width: 140px;
text-align: center;
transform: rotate(-90deg) translate(-120px,-50px);
color: black;
:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: rotate(-90deg) translate(-120px,-45px);
}
`
const Wrap = styled.div`
:hover {
    div {
        opacity: 1;
        /* display: block; */
    }
}
`

class PostListing extends React.Component {
    getPostList() {
        const postList = [];
        this.props.postEdges.forEach(postEdge => {
            postList.push({
                path: postEdge.node.frontmatter.path,
                gitlink: postEdge.node.frontmatter.gitlink,
                tags: postEdge.node.frontmatter.tags,
                image: postEdge.node.frontmatter.image,
                title: postEdge.node.frontmatter.title,
                service: postEdge.node.frontmatter.service,
                date: postEdge.node.frontmatter.date,
                excerpt: postEdge.node.excerpt,
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
        console.log(postList);
        return(
            <Wrapper>
                {
                postList.map(post => (
                    <Wrap>
                    {/* <a href={post.gitlink}><RepoDiv>view repo</RepoDiv></a> */}
                    <SLink to={post.path} key={post.title}
                    exit={{length: .5, state: {pass: true}}}
                    entry={{length: .3, delay: .5, state: {pass: false}}}
                    >
                        <InsideWrapper>
                            
                            <Image className="image" fluid={post.image.childImageSharp.fluid}/>
                            <SubText>
                                <h1>{post.title}</h1>
                                {post.service}                           
                            </SubText>
                        </InsideWrapper>
                    </SLink>
                    </Wrap>
                ))
                }
            </Wrapper>
        )
    }
}

export default PostListing;