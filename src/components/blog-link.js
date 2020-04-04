import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import styled from '@emotion/styled';


const Wrapper = styled.div`
margin: 50px auto;
width: 80vw;
max-width: 1000px;
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

h1{
    margin: 1px 0;
    margin-bottom: 10px;
    text-align: left;
}
.image{
    width: 100%;
    min-width: 200px;
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
            <div>
                {
                postList.map(post => (
                    <Link to={post.path} key={post.title}>
                        <Wrapper>
                            <Image className="image" fluid={post.image.childImageSharp.fluid}/>
                            <div className="text-box">
                                <h1>{post.title}</h1>
                                <p className="sub_text">{post.excerpt.substring(0,this.state.excerptLength)}...</p>
                                
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
        )
    }
}

export default PostListing;