import React from "react"
import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from '@emotion/styled'

const AniDiv = styled.div`
transform: ${props => props.theme.translate};
opacity: ${props => props.theme.opacity};
background: saddlebrown;
color: white;
transition: .3s;
padding: 10px;
margin: 2px;
`

const AniDiv2 = styled(AniDiv)`
transition: .5s;
`
const AniDiv3 = styled(AniDiv)`
transition: .7s;
`

AniDiv.defaultProps = {
    theme: {
        opacity: "1",
        translate: "translateX(0)"
    }
}

const entering = {
    opacity: "0",
    translate: "translateX(-100%)"
}
const exiting = {
    opacity: "0",
    translate: "translateX(100%)"
}

const SecondPage = ({transitionStatus, entry, exit}) => {

    console.log("page2", transitionStatus, entry, exit)

    return(
        <div>
            <SEO title="Page two" />
            <h1>Hi from the second page</h1>
            <hr></hr>
            <br></br>
            <AniDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
                <h2>Practice animation</h2>
                <p>little bit of text to add effect.</p>
            </AniDiv>
            <AniDiv2 theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
                <h2>Practice animation</h2>
                <p>little bit of text to add effect.</p>
            </AniDiv2>
            <AniDiv3 theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
                <h2>Practice animation</h2>
                <p>little bit of text to add effect.</p>
            </AniDiv3>
            <TransitionLink 
                to="" 
                exit={{length: .7, state: {pass: true}}}
                entry={{length: .3, delay: .7, state: {pass: false}}}
            >
                Back to the homepage
            </TransitionLink>
        </div>
    )
}

export default SecondPage
