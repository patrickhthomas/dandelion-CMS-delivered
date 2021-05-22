import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ShopMenu from '../components/ShopMenu'
import Container from '../components/Container'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const MenuPage = ({ data, pageContext }) => {

  const { basePath } = pageContext


  //establishes variables for LooseLeaf BigCommerceProducts
  const looseLeaf = data.allContentfulMenuSection.edges


  return (
    <Layout>
      <SEO title={startCase(basePath)}/>
      <Container>
        <ShopMenu looseLeaf={looseLeaf} basePath={basePath}/>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query MenuQuery {
  allContentfulMenuSection(sort: {order: DESC, fields: id}) {
    edges {
      node {
        menu {
          title
        }
        sectionTitle
        description {
          internal {
            content
          }
        }
        sectionProducts {
          description {
            childMarkdownRemark {
              excerpt(pruneLength: 50)
            }
            description
          }
          productImage {
            file {
              url
            }
          }
          productName
          price
          slug
        }
      }
    }
  }
}

`

export default MenuPage
