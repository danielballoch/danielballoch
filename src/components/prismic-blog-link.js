import React from "react"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const SLink = styled(TransitionLink)`
text-decoration: none;
`

const Wrapper = styled.div`
margin: 50px auto;
width: 80vw;
max-width: 1000px;
display: flex;
/* background-color: #542323; */
/* background-color:#76b2cd; */
color: white;
transition: .3s;
@media (max-width: 620px) {
        width: 80vw;
        flex-direction: column;
        h1{
            font-size:30px;
        }
        img {
            max-width: 100% !important;
            height: 120px;
            /* object-fit: fill; */
            
            object-position: top;
            object-fit: cover;
        }
        .text-box {
            p {
                /* display: none; */
            }
            .sub_text {
                display:none;
            }
        }
        
    }

h1{
    margin: 1px 0;
    margin-bottom: 10px;
    text-align: left;
    text-decoration: none;
}

img {
    max-width: 50%;
    margin-bottom: 0;
}

.text-box{
    /* margin: 20px; */
    padding: 20px;
    /* background-color:#76b2cd; */
    background-color:#49608f;
    
    text-decoration: none;
    height: auto;
}

:hover {
 filter: brightness(105%);
}
`

//Nav
const NavOverlay = styled.div`
position: fixed;
display: flex;
left: 0;
top: 0;
transform: rotate(90deg);
opacity: .4;
margin-top: calc(100px + 7%);
div{
    transform: rotate(180deg);
    margin: 0 10px;
  
    text-decoration: none;
    
}
a{
    transform: rotate(180deg);
    margin: 0 10px;
    transition: .3s;
    text-decoration: none;
}
@media (max-width:1100px){
    transform: rotate(-180deg);
    margin-top: 10px;
    z-index: 1000;
}
`
const NavLink = styled(TransitionLink)`
color: black;
border-bottom: white 2px solid;
:hover{
        border-bottom: black 2px solid;
        cursor: pointer;
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
    constructor(props) {
        super(props);

        this.state = {
            excerptLength: 290
        }
    }
    componentDidMount(){
        // if (window.innerWidth < 620) {this.setState({excerptLength: 110})};
    }

    render(){
        console.log(this.props)
        const postList = this.getPostList();
        
        return(
            <div>
            <NavOverlay>
                <NavLink to="/" 
                exit={{length: .5, state: {pass: true}}}
                entry={{length: .3, delay: .5, state: {pass: false}}}
                >
                    Home
                </NavLink>
                -
                <NavLink to="/"
                exit={{length: .5, state: {pass: true}}}
                entry={{length: .3, delay: .5, state: {pass: false}}}
                >
                    Contact
                </NavLink>
            </NavOverlay>
                {
                postList.map(post => (
                    <SLink to={"/" + post.path}
                        exit={{length: .5, state: {pass: true}}}
                        entry={{length: .3, delay: .5, state: {pass: false}}}
                    >
                        <Wrapper>
                            {/* <Image className="image" fluid={post.image.childImageSharp.fluid}/> */}
                            <img src={post.thumbnail}/>
                            <div >
                                <div className="text-box">
                                    <h1>{post.title}</h1>
                                    <p className="sub_text">{post.description}</p>
                                    <p>Tags: {post.tags}</p>
                                    <p className="sub_text">{post.date}</p>  
                                </div>                       
                            </div>
                        </Wrapper>
                    </SLink>
                ))
                }
            </div>
        )
    }
}

export default PostListing;