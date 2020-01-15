// import React from "react"
// import { graphql } from "gatsby"
// import styled from "@emotion/styled"
// import Link from 'gatsby-plugin-transition-link'
// import Img from "gatsby-image"

// import planninggif from '../projects/menco/planningdemo.gif'
// import responsivegif from '../projects/menco/responsivedesign.gif'

// const Wrapper = styled.div`
// margin: 0 auto;
// max-width: 960px;
// min-height: 100vh;
// height: 100%;
// padding: 100px 1.0875rem 1.45rem;
// img {
//     float: right;
//     padding-top: 10px;
// }
// p {
//     padding: 10px 10px 0 0 ;
// }
// h2{
//     padding-top: 80px;
// }
// `
// const NavOverlay = styled.div`
// position: fixed;
// display: flex;
// left: 0;
// transform: rotate(90deg);
// opacity: .4;
// margin-top: 7%;
// div{
//     transform: rotate(180deg);
//     margin: 0 10px;
  
//     text-decoration: none;
    
// }
// a{
//     transform: rotate(180deg);
//     margin: 0 10px;
//     transition: .3s;
//     text-decoration: none;
// }
// `
// const SLink = styled(Link)`
// color: black;
// border-bottom: white 2px solid;
// :hover{
//         border-bottom: black 2px solid;
//         cursor: pointer;
//     }
// `
// const ImgDiv = styled.div`
// max-width: 480px;
// `


// export default ({ data }) => {
//   const post = data.markdownRemark
//   console.log(data.images)

//   var projectImages = data.images.nodes.map(image => ({original: image.childImageSharp.fluid.src}))
// console.log(projectImages)
//   return (
//       <Wrapper>
//           <NavOverlay><SLink to="/">Home</SLink><SLink to="/">Contact</SLink></NavOverlay>
//         <h1>{post.frontmatter.title}</h1>
//         <a href="www.mencoapparel.com">www.mencoapparel.com</a>
//         <p>{post.frontmatter.service}</p>
        
//         <Img fluid={data.images.nodes[0].childImageSharp.fluid} />
//         <p>{post.frontmatter.intro}</p>
//         <h2>{post.frontmatter.heading1}</h2>
//         <img src={planninggif}/>
//         <p>{post.frontmatter.paragraph1}</p>

//         <h2>{post.frontmatter.heading2}</h2>
//         <ImgDiv>
//             <Img fluid={data.images.nodes[2].childImageSharp.fluid} />
//         </ImgDiv>
        
//         <p>{post.frontmatter.paragraph2}</p>

//         <h2>{post.frontmatter.heading3}</h2>
//         <img src={responsivegif}/>
//         <p>{post.frontmatter.paragraph3}</p>

//         <p>published {post.frontmatter.date}</p>
//         <Link to="/">back to hompage</Link>
//       </Wrapper>
//   )
// }
// export const query = graphql`
//   query($path: String!, $absolutePathRegex:String!) {
//     markdownRemark(frontmatter: {path: {eq: $path } }) {
//       html
//       frontmatter {
//         title
//         service
//         date
//         intro
//         heading1
//         paragraph1
//         heading2
//         paragraph2
//         heading3
//         paragraph3
//       }
//     }

//     images: allFile(
//         filter: {
//           absolutePath: { regex: $absolutePathRegex }
//           extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
//         }
//         sort: {fields: name, order: ASC}
//       ) {
//         nodes {
//             name
//             childImageSharp {
//               fluid(maxWidth: 1920, quality: 90) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//     }
//   }
//   `