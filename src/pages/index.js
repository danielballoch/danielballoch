import React from "react"
import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const AniDiv = styled.div`
opacity: ${props => props.theme.opacity};
transition: .3s;
`

AniDiv.defaultProps = {
    theme: {
        opacity: "1",
    }
}

const entering = {
    opacity: "0",
}
const exiting = {
    opacity: "0",
}




const IndexPage = ({data, transitionStatus, entry, exit}) => {
    console.log("index",transitionStatus, entry, exit)
    return (
        <div>
            <SEO title="Home" />
            <h1>Hi I'm Daniel</h1>
            <hr/><br/>
            <AniDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
                <p>A front-end developer whose always learning and building.</p>
                <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </div>
                <TransitionLink 
                    to="/page-2/" 
                    exit={{length: .5, state: {pass: true}}}
                    entry={{length: .3, delay: .5, state: {pass: false}}}
                >
                    Go to page 2
                </TransitionLink>
            </AniDiv>
        </div>
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
    }
  `
