import React from "react"
import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { InView } from "react-intersection-observer"


import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"

import responsivedesign from '../images/skill-gifs/responsivedesign.gif'
import ProductListing from "../components/post-link"
import PostListing from "../components/post-link-wide"

import BlogSection from "../components/BlogSection"
import BlogSectionPrismic from "../components/BlogSectionPrismic"

const FadeDiv = styled.div`
opacity: ${props => props.theme.opacity};
transition: .3s;
`

const Wrapper = styled.div`
margin: 0 auto;
min-height: 100vh;
width: 100%;
height: 100%;
padding: 100px 1.0875rem 1.45rem;
transition: .3s;
opacity: ${props => props.theme.opacity};

.visible {
    transition: 1s;
    opacity:1;
}
.hidden {
    transition: 1s;
    opacity: 0;
    transform: translateX(40px);
}
@media (max-width: 500px) {
    .hidden {
        opacity: 1;
        transform: translateX(0px);
    }
}


`

const AniDiv = styled.div`
display: flex;
margin: 0 auto;
justify-content: space-evenly;
transition: .3s;
/* max-width: 960px; */
max-width: 1080px;
height: 100vh;
`

FadeDiv.defaultProps = {
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

const Intro = styled.div`
h2 {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-weight: 700;
    margin-bottom: 0;
}
h4 {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-weight: 500;
}
p{
    margin-bottom: 100px;
}
`

const HeroText = styled.div`
position: static;
float: left;
width: 50%;
margin-top: 14%;
z-index: 100;
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
p:nth-of-type(4){
    transition:2.5s;
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
min-height: 80vh;
text-align: center;
`

const NavOverlay = styled.div`
position: fixed;
display: flex;
left: 0;
transform: rotate(90deg) translateY(40px);
opacity: .4;
margin-top: calc(100px + 7%);
div{
    transform: rotate(180deg);
    margin: 0 10px;
    :hover{
        border-bottom: black 2px solid;
        cursor: pointer;
    }
}
a{
    margin: 0 10px;
    transition: 3s;
    :hover{
        transition: 3s;
        border-color: rgba(1,1,1,1,1);
        border-bottom: 2px solid;
    }
    
}
@media (max-width:1100px){
    transform: rotate(-180deg);
    margin-top: 10px;
    z-index: 1000;
}
`
const NavLink = styled.div`
border-bottom: ${props => props.theme.borderColor} 2px solid;
transition: 1s;
`
NavLink.defaultProps = {
    theme: {
        borderColor: "white"
    }
}

const active = {
    theme: {
        borderColor: "black"
    }
}




class IndexPage extends React.Component { 
    constructor(props) {
        super(props);
        this.homeref = React.createRef();
        this.projectref = React.createRef();
        this.postsref = React.createRef();
      }

      componentDidMount() {
        //index page is currently only page which has non-top white
        //if more added, create getScrollTarget fuction 
        
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    };

    state = {
      scroll: "home",
      inView: false,
  };

  
    
    handleScroll = (event) => {
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const scrollTarget = document.getElementById('projects').offsetTop - (.5 * vh);
      const scrollTarget2 = document.getElementById('posts').offsetTop - (.5 * vh);
      if(window.pageYOffset < scrollTarget){
        if (this.state.scroll !== "home") {this.setState({scroll: "home"})}
      } 
      else if(window.pageYOffset > scrollTarget && window.pageYOffset < scrollTarget2) {
          this.setState({
              scroll: "projects"
          })
      } else {
          {this.setState({scroll: "posts"})}
      }
    //   console.log(this.state.scroll);
    //   console.log(window.pageYOffset,scrollTarget, scrollTarget2)
    };

    
    render (){
    const transitionStatus = this.props.transitionStatus;
    const entry = this.props.entry;
    const exit = this.props.exit;
    const data = this.props.data;
    const projects = data.projects.edges;
    const posts = data.posts.edges;
    const blogposts = data.blogposts.edges;
    console.log(this.props)
    console.log("index",transitionStatus, entry, exit)
    
    return (
        <FadeDiv theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined}>
            <NavOverlay >
                <NavLink onClick={() => this.homeref.current.scrollIntoView({behavior: 'smooth',block: 'start',inline: 'start',})} theme={this.state.scroll === "home" ? active : undefined}>Home</NavLink>
                {/* <div>Skills</div> */}-
                <NavLink onClick={() => this.projectref.current.scrollIntoView({behavior: 'smooth',block: 'center',inline: 'center',})} theme={this.state.scroll === "projects" ? active : undefined} >Projects</NavLink>
                -
                <NavLink onClick={() => this.postsref.current.scrollIntoView({behavior: 'smooth',block: 'center',inline: 'center',})} theme={this.state.scroll === "posts" ? active : undefined} >Articles</NavLink>
            </NavOverlay>
        <Wrapper ref={this.homeref} >
            <SEO title="Home" />
            <AniDiv >            
                <HeroText theme={transitionStatus === "entering" ? entering : transitionStatus === "exiting" ? exiting : undefined} >
                    <Intro>
                        <h2>Daniel Balloch</h2>
                        
                        <h4>Web Developer & Designer</h4>
                        {/* <hr/> */}
                        <p>Get in touch for fast, responsive and professionally tailored websites your customers will love.</p>
                    </Intro>
                    
                    {/* <p>I'm on a mission to make our digital space faster, easier and more effective one website at a time.</p>
                    <p>Fast, effective, mobile friendly websites are being made this second... as is a piping hot cup of coffee.</p> */}
                    <p><b>ph:</b> (+64) 022 0780868</p>
                    <p><b>email:</b> daniel@thoughtfulhq.com</p>
                    {/* <p><b>tools:</b> JS, React, html, css, Gatsby</p> */}
                    <SocialDiv>
                        <OutboundLink href="https://github.com/danielballoch">                     
                        <SocialIcon fluid={data.github.childImageSharp.fluid} />
                        </OutboundLink>  
                        <OutboundLink href="https://dribbble.com/danielballoch">                     
                        <SocialIcon fluid={data.dribble.childImageSharp.fluid} />
                        </OutboundLink>   
                        <OutboundLink href="https://www.instagram.com/thoughtful_hq/">
                        <SocialIcon fluid={data.insta.childImageSharp.fluid} />
                        </OutboundLink>
                        <OutboundLink href="https://www.linkedin.com/in/danielpatrickballoch/">
                            <SocialIcon fluid={data.linkedin.childImageSharp.fluid} />
                        </OutboundLink>                       
                    </SocialDiv>
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
            <ProjectSection ref={this.projectref} id="projects">
                <ProductListing postEdges={projects} />
            </ProjectSection>
            
            <div ref={this.postsref} id="posts">
            <InView as="div" 
            threshold="0.4"
            delay="0.5"
            onChange={(inView, entry) => (console.log('Inview:', inView), this.setState({inView:inView }))}
            className={this.state.inView ? "visible" : "hidden"
            } 
            >
                <BlogSectionPrismic posts={blogposts}/>
            </InView>
            </div>

            
            {/* Contact section:
            For business oportunitys and enquirys you can email: danielkingballoch@gmail.com or call: +64 022 078 0860
            Subscribe below for a notification once or twice a month when I make a new article 
            or connect with me on social media where I post a bit more frequently,
            cheers Daniel :) */}
            
            
        </Wrapper>
        </FadeDiv>
    )
}
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
      github: file(relativePath: { eq: "social-icons/githubRE.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projects: allMarkdownRemark(
          filter: {fields: {collection: {eq: "projects"}}}
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 4
          ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
                title
                path
                gitlink
                tags
                service
                tools
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
      blogposts: allPrismicBlogPost(limit: 3) {
        edges {
            node {
                uid
                data {
                    date
                    title {
                        text
                    }
                    tags {
                        text
                    }
                    thumbnail {
                        url
                    }
                    description {
                        text
                    }
                }
            }
        }
    }
    posts: allMarkdownRemark(
        filter: {fields: {collection: {eq: "posts"}}}
        limit: 3
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 125)
            timeToRead
            frontmatter {
              title
              path
              tags
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
