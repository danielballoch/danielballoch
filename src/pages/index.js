import React from "react"
import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Wrapper = styled.div`
margin: 0 auto;
max-width: 960px;
height: 100vh;
padding: 100px 1.0875rem 1.45rem;
`

const AniDiv = styled.div`
opacity: ${props => props.theme.opacity};
transition: .3s;
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
position: absolute;
width: calc(70vh*0.66);
top: 100px;
right: 15%;
min-width: 240px;
@media (max-width: 500px) {
    display:none;
}
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




const IndexPage = ({data, transitionStatus, entry, exit}) => {
    console.log("index",transitionStatus, entry, exit)
    console.log(data)
    return (
        <Wrapper>
            <SEO title="Home" />
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
                        Go to page 2
                    </TransitionLink>

                </HeroText> 
                <HeroImage>
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </HeroImage>
                
                
            </AniDiv>
        </Wrapper>
    )
}

export default IndexPage



export const Query = graphql`
    query {
      placeholderImage: file(relativePath: { eq: "headshotmin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
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
    }
  `
