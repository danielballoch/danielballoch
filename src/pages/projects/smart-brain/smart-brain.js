import React from "react"
import Link from 'gatsby-plugin-transition-link'
import { graphql } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import styled from '@emotion/styled'
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import homegif from '../smart-brain/sbmain.gif'
import responsivegif from '../smart-brain/sbresponsive.gif'


const FadeDiv = styled.div`
opacity: ${props => props.theme.opacity};
transition: .3s;
`

const Wrapper = styled.div`
transition: .3s;
margin: 0 auto;
max-width: 960px;
min-height: 100vh;
height: 100%;
padding: 100px 1.0875rem 1.45rem;
img {
    /* float: right; */
    padding-top: 10px;
    @media (max-width: 700px) {
    max-width: 700px;
    width: 100%;
}
}
p {
    padding: 10px 10px 0 0 ;
}
h2{
    padding-top: 80px;
}
`

FadeDiv.defaultProps = {
    theme: {
        opacity: "1",
    }
}

const NavOverlay = styled.div`
position: fixed;
display: flex;
left: 0;
transform: rotate(90deg);
opacity: .4;
margin-top: 7%;
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
const SLink = styled(TransitionLink)`
color: black;
border-bottom: white 2px solid;
:hover{
        border-bottom: black 2px solid;
        cursor: pointer;
    }
`
const ImgDiv = styled.div`
max-width: 480px;
width: 480px;
padding: 40px 0;
float: right;
@media (max-width: 700px) {
    max-width: 700px;
    width: 100%;
}
`

const AniDiv = styled.div`
transform: ${props => props.theme.translate};
opacity: ${props => props.theme.opacity};
/* background: saddlebrown;
color: white; */
transition: .3s;
h2 {padding-top: 80px;}
/* margin: 2px; */
`

const AniDiv2 = styled(AniDiv)`
transition: .5s;
`
const AniDiv3 = styled(AniDiv)`
transition: .7s;
`
const AniDiv4 = styled(AniDiv)`
transition: .9s;
`

AniDiv.defaultProps = {
    theme: {
        opacity: "1",
        translate: "translateX(0)"
    }
}

const entering = {
    opacity: "0",
    translate: "translateX(-20%)"
}
const exiting = {
    opacity: "0",
    translate: "translateX(20%)"
}

const SocialIcon = styled(Img)`
width: 50px;
margin-right: 5px;
filter: grayscale(50%);
opacity: .8;
transition: .5s;
/* scale: .6; */
`
const MainIconDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
/* justify-content: space-evenly; */
width: 100%;
`
const IconDiv = styled(MainIconDiv)`
min-width: 100px;
border: 1px solid black;
border-radius: 30px;
padding: 0 15px 3px 10px;
opacity: 0.5;
transition: .3s;

:hover{
    filter: grayscale(0);
    opacity: 1;
}
`
const IconLink = styled(OutboundLink)`
color: black;
text-decoration: none; 
:nth-of-type(1){
    margin-right: 5vw;
}
`





const MencoProject = ({data, transitionStatus, entry, exit}) => {
    console.log(data)
    console.log("page2", transitionStatus, entry, exit)
    const post = data.markdownRemark.frontmatter
    return(
        <FadeDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
            <NavOverlay>
                <SLink to="/" 
                exit={{length: .5, state: {pass: true}}}
                entry={{length: .3, delay: .5, state: {pass: false}}}
                >
                    Home
                </SLink>
                -
                <SLink to="/"
                exit={{length: .5, state: {pass: true}}}
                entry={{length: .3, delay: .5, state: {pass: false}}}
                >
                    Contact
                </SLink>
            </NavOverlay>
        <Wrapper >
            <SEO title="SmartBrain : face recognition" />
                <h1>{post.title}</h1>
                <p><b>Tasks:</b> {post.service}</p>
                <p><b>Tools:</b> React, express, PostgreSQL</p>
                <hr/>
    
            <MainIconDiv>
                <IconLink href="https://smart-braindaniel.herokuapp.com/"><IconDiv><SocialIcon fluid={data.menco.childImageSharp.fluid}/><div>View Site</div></IconDiv></IconLink>
                <IconLink href={post.gitlink}><IconDiv><SocialIcon fluid={data.github.childImageSharp.fluid}/><div>View Repo</div></IconDiv></IconLink>
            </MainIconDiv>
            <br/>
            <AniDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
            <p>{post.intro1}</p>
            <p><b>Challenge: </b>{post.intro2}</p>
            <img src={homegif}/>
            
            <p><b>Solution: </b>{post.intro3}</p>
            <p>{post.intro4}</p>
            <p>view the site live: <a href="https://smart-braindaniel.herokuapp.com/">https://smart-braindaniel.herokuapp.com/</a>  or see the process in detail below</p>

                
            </AniDiv>
            <AniDiv4 theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
                <h2>{post.heading1}</h2>
                <p>{post.paragraph1_1}</p>
                <p>{post.paragraph1_2}</p>
                <ol>
                    <li>{post.addition1}</li>
                    <li>{post.addition2}</li>
                    <li>{post.addition3}</li>
                </ol>
                <img src={responsivegif}/>
                {/* <ImgDiv></ImgDiv> */}
                <p>{post.paragraph1_3}</p>
                <p>{post.paragraph1_4}</p>
                <ImgDiv>
                    <Img fluid={data.images.nodes[0].childImageSharp.fluid} />
                </ImgDiv>
                <p>{post.paragraph1_5}</p>
                <p>view full code repos: <a href={post.gitlink + "-api"}>Here (api)</a> and <a href={post.gitlink}>Here (front-end)</a></p>
                <p>{post.paragraph1_55}</p>
                <p>{post.paragraph1_6}</p>
            </AniDiv4>
            <TransitionLink 
                to="" 
                exit={{length: .7, state: {pass: true}}}
                entry={{length: .3, delay: .7, state: {pass: false}}}
            >
                Back to the homepage
            </TransitionLink>
        </Wrapper>
        </FadeDiv>
    )
}

export default MencoProject


export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Smart-Brain" } }
        ){
        html
      frontmatter {
            title
            gitlink
            service
            date
            intro1
            intro2
            intro3
            intro4
            heading1
            paragraph1_1
            paragraph1_2
            addition1
            addition2
            addition3
            paragraph1_3
            paragraph1_4
            paragraph1_5
            paragraph1_55
            paragraph1_6
      }
    }

    images: allFile(
        filter: {
          absolutePath: { regex: "/projects/smart-brain/" }
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        }
        sort: {fields: name, order: ASC}
      ) {
        nodes {
            name
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
    }
    github: file(relativePath: { eq: "social-icons/githubRE.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    menco: file(relativePath: { eq: "social-icons/smartbrainicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
    }
  }
  `
