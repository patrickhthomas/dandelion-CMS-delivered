import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

const PageTemplate = ({ data }) => {
  const { title, metaDescription, body } = data.contentfulPage
  return (
    <Layout>
<div>Sorry, nothing here yet!</div>
<Footer />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`
PageTemplate.Layout = Layout 
export default PageTemplate
