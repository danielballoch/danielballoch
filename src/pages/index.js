import React from "react"
import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"

import responsivedesign from '../images/skill-gifs/responsivedesign.gif'
import PostListing from "../components/post-link"

const Wrapper = styled.div`
margin: 0 auto;
min-height: 100vh;
width: 100%;
height: 100%;
padding: 100px 1.0875rem 1.45rem;
`

const AniDiv = styled.div`
display: flex;
margin: 0 auto;
justify-content: space-evenly;
opacity: ${props => props.theme.opacity};
transition: .3s;
/* max-width: 960px; */
max-width: 1080px;
height: 100vh;
`

AniDiv.defaultProps = {
    theme: {
        opacity: "1",
        transform: "translateX(0)"
    }
}



const entering = {
    opacity: "0",
    transform: "translateX(-20%)"
}
const exiting = {
    opacity: "0",
    transform: "translateX(0)"
}

const HeroText = styled.div`
position: static;
float: left;
width: 50%;
margin-top: 14%;
z-index: 100;
h2{
    margin-bottom: 100px;
}
p{
    transition: 1s;
    transform: ${props => props.theme.transform};
}
p:nth-of-type(2){
    transition:1.5s;
}
p:nth-of-type(3){
    transition:2s;
}
@media (max-width: 500px) {
    width: 100%;
}
`
HeroText.defaultProps = {
    theme: {
        transform: "translateX(0)"
    }
}
const HeroImage = styled.div`
/* position: absolute;
width: calc(70vh*0.66);
top: 100px;
right: 15%;
min-width: 240px; */
@media (max-width: 500px) {
    display:none;
}
width: calc(70vh*0.66);
/* width: 50%; */
`

const SocialDiv = styled.div`
display: flex;
flex-direction: row;
width: 40%;
@media (max-width: 500px) {
    width: 100%;
}
`
const SocialIcon = styled(Img)`
width: 50px;
margin-right: 10px;
filter: grayscale(50%);
opacity: .8;
transition: .5s;
:hover{
    filter: grayscale(0);
    opacity: 1;
}
`
const SkillsSection = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 30px;
h2{
    margin-top: 30vh;
}
h3{
    padding: 40px;
}

`
const SkillGifDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 100vh;
    width: 480px;
    background-color: #18171a;
    height: 274px;
    border: 5px solid #18171a;
    border-radius: 14px;
`

const ProjectSection = styled.div`
display: flex;
flex-direction: column;
width: 100%;
text-align: center;
`

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
    border-bottom: white 2px solid;
    :hover{
        border-bottom: black 2px solid;
    }
    
}
`




const IndexPage = ({data, transitionStatus, entry, exit}) => {
    console.log("index",transitionStatus, entry, exit)
    console.log(data)
    const postEdges = data.allMarkdownRemark.edges;
    return (
        <Wrapper>
            <SEO title="Home" />
            <NavOverlay>
                <div>Home</div>
                {/* <div>Skills</div> */}
                <div>Projects</div>
            </NavOverlay>
            <AniDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
               
                <HeroText theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
                    <h2>Hey, I'm Daniel. A front-end developer whose always learning and building.</h2>
                    <p><b>ph:</b> 022 0780868</p>
                    <p><b>mail:</b> danielkingballoch@gmail.com</p>
                    <p>
                    <SocialDiv>
                        <a href="https://dribbble.com/danielballoch">                     
                        <SocialIcon fluid={data.dribble.childImageSharp.fluid} />
                        </a>   
                        <a href="https://www.instagram.com/danbwebdesign/">
                        <SocialIcon fluid={data.insta.childImageSharp.fluid} />
                        </a>
                        <a href="https://www.linkedin.com/in/danielpatrickballoch/">
                            <SocialIcon fluid={data.linkedin.childImageSharp.fluid} />
                        </a>                       
                    </SocialDiv>
                    </p>

                    <TransitionLink 
                    to="/page-2/" 
                    exit={{length: .5, state: {pass: true}}}
                    entry={{length: .3, delay: .5, state: {pass: false}}}
                    >
                        Project Wall
                    </TransitionLink>

                </HeroText> 
                <HeroImage>
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </HeroImage>

                {/* <SkillsSection>
                    <h2>Skills:</h2>
                    <h3>- Communication & Discovery</h3>
                    <h3>- Prototyping</h3>
                    <h3>- UI/UX</h3>
                    <h3>- Responsive Design</h3>
                    <h3>- Ecommerce Solutions</h3>
                    <SkillGifDiv>
                        <div>
                            <img src={responsivedesign}></img>
                        </div>
                    </SkillGifDiv>
                </SkillsSection> */}
            
                
            </AniDiv>
            <ProjectSection>
                <PostListing postEdges={postEdges} />
            </ProjectSection>
            
            
        </Wrapper>
    )
}

export default IndexPage



export const Query = graphql`
    query {
      placeholderImage: file(relativePath: { eq: "headshotmin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      insta: file(relativePath: { eq: "social-icons/instaiconRE.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dribble: file(relativePath: { eq: "social-icons/dribbleiconRE.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "social-icons/linkediniconRE.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
                title
                path
                tags
                service
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
  `
