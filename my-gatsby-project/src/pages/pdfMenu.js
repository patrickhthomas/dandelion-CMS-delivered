import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import Container from '../components/Container'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Footer from '../components/Footer'
import styled from '@emotion/styled'

const MenuPage = styled.img`
max-width: 100%;
`


const PdfMenuPage = ({ data, pageContext }) => {

  const { basePath } = pageContext


  //establishes variables for LooseLeaf BigCommerceProducts
  const menu = data.contentfulPdfMenu


  return (
    <Layout>
      <SEO title={startCase(basePath)}/>
      <Container>
       {menu.files.map(file => (
            <MenuPage src={file.file.url}/>
        ))}
      </Container>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
query PdfMenuQuery {
  contentfulGallery {
    images {
      file {
        url
      }
      description
    }
    description {
      description
      childMarkdownRemark {
        html
      }
    }
    title
  }
  contentfulPdfMenu {
      files {
          file {
              url
          }
      }
  }
}


`


PdfMenuPage.Layout = Layout 
export default PdfMenuPage


