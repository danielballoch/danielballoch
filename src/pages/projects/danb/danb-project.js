import React from "react"
import Link from 'gatsby-plugin-transition-link'
import { graphql } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import styled from '@emotion/styled'
import Img from "gatsby-image"

import planninggif from '../menco/planningdemo.gif'
import responsivegif from '../menco/responsivedesign.gif'

const FadeDiv = styled.div`
opacity: ${props => props.theme.opacity};
transition: .3s;
`

const Wrapper = styled.div`
transition: .3s;
opacity: ${props => props.theme.opacity};
margin: 0 auto;
max-width: 960px;
min-height: 100vh;
height: 100%;
filter: brightness(33%);
background: rgba(1,1,1,.7);
padding: 100px 1.0875rem 1.45rem;
text-decoration: line-through;
img {
    float: right;
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
        transform: "translateX(0)"
    }
}

const NavOverlay = styled.div`
position: fixed;
display: flex;
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

const TextOverlay = styled.div`
position: fixed;
color: white;
text-align: center;
z-index: 1000;
h1{font-size: 8rem; border-bottom: solid white 10px;font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif}

top: 30%;
/* height: 100%; */
/* width: 100%; */
left: -10%;
width: 120%;
transform: rotate(-45deg);

`


const MencoProject = ({data, transitionStatus, entry, exit}) => {
    console.log(data)
    console.log("page2", transitionStatus, entry, exit)
    const post = data.markdownRemark.frontmatter
    var projectImages = data.images.nodes.map(image => ({original: image.childImageSharp.fluid.src}))
    return(
        <FadeDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
            <TextOverlay><h1>Coming Soon</h1></TextOverlay>
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
            <SEO title="danb" />
            
            

            <h1>{post.title}</h1>
            <a href="www.mencoapparel.com">www.mencoapparel.com</a>
            <p>{post.service}</p>
            <hr></hr>
            <AniDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
            <Img fluid={data.images.nodes[0].childImageSharp.fluid} />
            <p>{post.intro1}</p>
            <p>{post.intro2}</p>
            <p>{post.intro3} <a href="www.mencoapparel.com">www.mencoapparel.com</a></p>
                
            </AniDiv>
            <AniDiv2 theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
            <h2>{post.heading1}</h2>
            <img src={planninggif}/>
                <p>{post.paragraph1_1}</p>
                <p>{post.paragraph1_2}</p>
            </AniDiv2>
            <AniDiv3 theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
                <h2>{post.heading2}</h2>
                <ImgDiv>
                    <Img fluid={data.images.nodes[2].childImageSharp.fluid} />
                </ImgDiv>
                <p>{post.paragraph2_1}</p>
                <p>{post.paragraph2_2}</p>
            </AniDiv3>
            <AniDiv4 theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
                <h2>{post.heading3}</h2>
                <img src={responsivegif}/>
                <p>{post.paragraph3_1}</p>
                <p>{post.paragraph3_2}</p>
                <p>{post.paragraph3_3}</p>
                <p>{post.paragraph3_4}</p>
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
    markdownRemark(frontmatter: {title: {eq: "Menco" } }
        ){
        html
      frontmatter {
            title
            service
            date
            intro1
            intro2
            intro3
            heading1
            paragraph1_1
            paragraph1_2
            heading2
            paragraph2_1
            paragraph2_2
            heading3
            paragraph3_1
            paragraph3_2
            paragraph3_3
            paragraph3_4
      }
    }

    images: allFile(
        filter: {
          absolutePath: { regex: "/projects/menco/" }
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
  }
  `
