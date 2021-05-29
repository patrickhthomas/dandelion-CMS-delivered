import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProductInfo from '../components/ProductInfo'
import Footer from '../components/Footer'

const ProductTemplate = ({ data, pageContext }) => {
  const {
    price,
    description,
    productImage,
    productName,
  } = data.contentfulProduct



  return (
    <Layout>
     <ProductInfo
     price={price}
     description={description.childMarkdownRemark.html}
     productImage={productImage}
     productName={productName}

     />
     <Footer />
    </Layout>
  )
}

ProductTemplate.Layout = Layout 

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
        slug
        productImage {
          file {
            url
          }
        }
        description {
          childMarkdownRemark {
            html
          }
          description
        }
        price
        productName
      }
}
`

export default ProductTemplate
