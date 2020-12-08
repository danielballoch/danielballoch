import React from "react"
import styled from '@emotion/styled';
import PostListing from "./post-link-wide-prismic"

const ProjectSection = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
text-align: center;
`


const blog = ({posts}) => {
    return(
    <ProjectSection>
                    <PostListing postEdges={posts} />
    </ProjectSection>
    )
}
export default blog