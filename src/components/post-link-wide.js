import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const Flex = styled.div`
display: flex;
justify-content: center;
max-width: 1000px;
margin: auto;
`

const Paragraph = styled.div`
text-align: left;
width: 40vw;
margin: 50px 0px;
padding: 50px;
`

const Wrapper = styled.div`
margin: 50px auto;
width: 40vw;
height: 120px;
max-width: 500px;
text-align: left;
display: flex;
background-color: #542323;
color: white;
transition: .3s;
@media (max-width: 620px) {
        width: 80vw;
        flex-direction: column;
        h1{
            font-size:30px;
        }
    }

h4{
    font-size: 18px;
    margin: 1px 0;
    text-align: left;
}
.image{
    width: 10%;
    min-width: 150px;
}
.text-box{
    margin: 20px;
}
p{
    color: #d5d5d5;
}
p:hover{
    color: #d5d5d5;
}
:hover {
 filter: brightness(110%);
}

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
            <Flex>
            <Paragraph>
            <h2>Articles</h2>
            <p>I've made a few posts in order to help me refine what I've learned, as well as put project examples out there for anyone who 
            who could use it and is learning along side me</p>
            <Link to="/blog">see all posts</Link>
            </Paragraph>
            <div>
                {
                postList.map(post => (
                    <Link to={post.path} key={post.title}>
                        <Wrapper>
                            <Image className="image" fluid={post.image.childImageSharp.fluid}/>
                            <div className="text-box">
                                <h4>{post.title}</h4>
                                {/* <p className="sub_text">{post.excerpt.substring(0,this.state.excerptLength)}...</p> */}
                                
                                {post.tags.map(post => (
                                    <span key={post}>#{post} </span>
                                ))}   
                                <p className="sub_text">{post.date} {post.timeToRead}m read</p>                            
                            </div>
                        </Wrapper>
                    </Link>
                ))
                }
            </div>
            
            </Flex>
        )
    }
}

export default PostListing;




// const PostLink = ({ post }) => (
//     <Link to={`/${post.frontmatter.path}`} key={post.title}>
//         <div className="post_div">
//             <Image fluid={post.frontmatter.image.childImageSharp.fluid}/>
//             {post.frontmatter.title}
//             <br/>
//             <p className="sub_text"> {post.frontmatter.date}</p>
//             <p className="sub_text">{post.excerpt}</p>
//             {post.frontmatter.tags}
            
//         </div>
//     </Link>
// )











// const PostLink = ({ post }) => (
//     <Link to={`/${post.frontmatter.path}`} key={post.title}>
//         <div className="post_div">
//             <Image fluid={post.frontmatter.image.childImageSharp.fluid}/>
//             {post.frontmatter.title}
//             <br/>
//             <p className="sub_text"> {post.frontmatter.date}</p>
//             <p className="sub_text">{post.excerpt}</p>
//             {post.frontmatter.tags}
            
//         </div>
//     </Link>
// )

// export default PostLink