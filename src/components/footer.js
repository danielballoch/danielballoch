import React from "react"
import styled from '@emotion/styled';
import { OutboundLink } from "gatsby-plugin-google-analytics"

const ProjectSection = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 20vh;
text-align: center;
background-color: #f5f5f5;
padding-top: 40px;
a{
    color: black;
    text-decoration: none;
    padding: 0 8px;
}
`
const Copyright = styled.div`
margin-top: auto;
`


const blog = () => {
    return(
    <ProjectSection>
        <h2>Contact: <a href="mailto:danielkingballoch@gmail.com">danielkingballoch@gmail.com</a> </h2>
        <p>
            <OutboundLink href="https://www.linkedin.com/in/danielpatrickballoch/">LinkedIn</OutboundLink>
            - 
            <OutboundLink href="https://dribbble.com/danielballoch">Dribble</OutboundLink>
            - 
            <OutboundLink href="https://www.instagram.com/danbwebdesign/">Instagram</OutboundLink>
            -  
            <OutboundLink href="https://github.com/danielballoch">Github</OutboundLink>
        </p> 
        
        <Copyright>© {new Date().getFullYear()}, {` `}<a href="https://www.danielballoch.com">Daniel Balloch</a></Copyright>    
    </ProjectSection>
    )
}
export default blog