import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const Flex = styled.div`
display: flex;
justify-content: center;
max-width: 1000px;
margin: auto;
flex-direction: row;
@media (max-width: 900px) {
    flex-direction: column;
}

`

const Paragraph = styled.div`
text-align: left;
width: 40vw;
margin: 50px 0px;
padding: 50px;
@media (max-width: 900px) {
    width: 100%;
}
`

const Wrapper = styled.div`
margin: 50px auto;
width: 40vw;
min-height: 120px;
height: auto;
max-width: 500px;
text-align: left;
display: flex;
/* background-color: #542323; */

color: white;
transition: .3s;
@media (max-width: 900px) {
        width: 100%;
        
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
    padding: 20px;
    background-color:#3b4f75;
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
                tags: postEdge.node.data.tags[0].text,
                title: postEdge.node.data.title[0].text,
                description: postEdge.node.data.description[0].text,
                thumbnail: postEdge.node.data.thumbnail.url,
                date: postEdge.node.data.date,
                path: postEdge.node.uid,
            });
        });
        return postList;
    }

    render(){
        const postList = this.getPostList();
        return(
            <Flex>
            <Paragraph>
            <h2>Articles</h2>
             <p>Insights and innovations in UX, design, development and business. These posts are based on my journey and content, techniques or ideas
            I find interesting or helpful along the way. I'm only human so there's bound to be the odd spelleng mistake, rambling or
            unfounded certinty amoungst the troves of valuable content. Read at your own risk.     
             </p>
            <Link to="/blog">see all posts</Link>
            </Paragraph>
            <div>
                {
                postList.map(post => (
                    <Link to={post.path} key={post.title}>
                        <Wrapper>
                            {/* <Image className="image" fluid={post.image.childImageSharp.fluid}/> */}
                            <img className="image" src={post.thumbnail}/>
                            <div className="text-box">
                                <h4>{post.title}</h4>
                                <span>tags: {post.tags}</span>
                                <p className="sub_text">{post.date}</p>                            
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
