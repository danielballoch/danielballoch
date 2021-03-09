import React from "react"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
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

const SLink = styled(TransitionLink)`
text-decoration:none;
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
        max-height: 225px;
        h1{
            font-size:30px;
        }
        .image {
           min-width: 100px !important;
           max-width: 40%;
           width: 100% !important; 
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
            I find interesting or helpful along the way.   
             </p>
            <TransitionLink to="/blog/All"
                exit={{length: .5, state: {pass: true}}}
                entry={{length: .3, delay: .5, state: {pass: false}}}
            >
            see all posts
            </TransitionLink>
            </Paragraph>
            <div>
                {
                postList.map(post => (
                    <SLink to={post.path} key={post.title}
                        exit={{length: .5, state: {pass: true}}}
                        entry={{length: .3, delay: .5, state: {pass: false}}}
                    >
                        <Wrapper>
                            {/* <Image className="image" fluid={post.image.childImageSharp.fluid}/> */}
                            <img className="image" src={post.thumbnail}/>
                            <div className="text-box">
                                <h4>{post.title}</h4>
                                <span>tags: {post.tags}</span>
                                <p className="sub_text">{post.date}</p>                            
                            </div>
                        </Wrapper>
                    </SLink>
                ))
                }
            </div>
            
            </Flex>
        )
    }
}

export default PostListing;
