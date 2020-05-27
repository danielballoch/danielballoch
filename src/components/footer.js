import React from "react"
import styled from '@emotion/styled';

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
            <a href="https://www.linkedin.com/in/danielpatrickballoch/">LinkedIn</a>
            - 
            <a href="https://dribbble.com/danielballoch">Dribble</a>
            - 
            <a href="https://www.instagram.com/danbwebdesign/">Instagram</a>
            -  
            <a href="https://github.com/danielballoch">Github</a>
        </p> 
        
        <Copyright>© {new Date().getFullYear()}, {` `}<a href="https://www.danielballoch.com">Daniel Balloch</a></Copyright>    
    </ProjectSection>
    )
}
export default blog