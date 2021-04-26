import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import { startCase } from 'lodash'

const Landing = ({ data, pageContext }) => {

  const { humanPageNumber, basePath } = pageContext
  const {
    title,
    subtitle,
    heroImage,
  } = data.contentfulHero

  const tagline = data.contentfulHero.tagline.tagline
  const blurb = data.contentfulHero.blurb.blurb
  const alt = data.contentfulHero.heroImage.description



  return (
    <Layout>
      <SEO title={startCase(basePath)}/>
      <Container>
        <Hero
          title={title}
          subtitle={subtitle}
          tagline={tagline} 
          image={heroImage}
          blurb={blurb}
          alt={alt}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  contentfulHero {
    blurb {
      blurb
    }
    heroImage {
      fluid(resizingBehavior: PAD, maxWidth: 1000) {
        tracedSVG
        aspectRatio
      }
      description
    }
    title
    subtitle
    tagline {
      tagline
    }
  }
}

`

export default Landing
