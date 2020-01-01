import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi I'm Daniel</h1>
    <p>A front-end developer whose always learning and building.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

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
