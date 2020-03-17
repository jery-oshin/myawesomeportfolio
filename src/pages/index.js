import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {graphql, StaticQuery} from 'gatsby';

export const data = StaticQuery(graphql`
  query {
    allWordpressPage {
      edges {
        node {
          title
          content
        }
      }
    }
  }

`)

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {
          data.allWordpressPage.edges.map( edge => (
            <div key={edge.node.id} >
              <h1>{edge.node.title}</h1>
              <div dangerouslySetInnerHTML={{__html: edge.node.content}}></div>
            </div>
          ))
        }
      </div>
      
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
