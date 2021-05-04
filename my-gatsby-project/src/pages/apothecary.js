import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Events from '../components/Events'
import Section3 from '../components/Section3'
import ContactCard from '../components/ContactCard'
import Apothecary from '../components/BigCommerce/Apothecary'
import Container from '../components/Container'
import SEO from '../components/SEO'
import { startCase } from 'lodash'

const ApothecaryPage = ({ data, pageContext }) => {

  const { basePath } = pageContext


  //establishes variables for LooseLeaf BigCommerceProducts
  const looseLeaf = data.allBigCommerceProducts.edges


  return (
    <Layout>
      <SEO title={startCase(basePath)}/>
      <Container>
        <Apothecary looseLeaf={looseLeaf} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
query ApothecaryQuery {
  allBigCommerceProducts {
    edges {
      node {
        id
        name
        images {
          url_standard
          url_thumbnail
          image_file
        }
        price
        description
      }
    }
  }
}
`

export default ApothecaryPage
