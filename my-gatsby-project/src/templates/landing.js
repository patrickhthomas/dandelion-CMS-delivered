import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import { startCase } from 'lodash'

const Landing = ({ data, pageContext }) => {

  const { basePath } = pageContext

  //establishes variables for the Hero section, queried from 'contentfulHero'
  const {
    title,
    subtitle,
    heroImage,
  } = data.contentfulHero
  const tagline = data.contentfulHero.tagline.tagline
  const blurb = data.contentfulHero.blurb.blurb
  const alt = data.contentfulHero.heroImage.description

  //establishes variables for the section1 (Location and Hours), queried from 'contentfulSection1'
  const {
    cityStateZip,
    streetNumberName,
    map,
    link,
  } = data.contentfulSection1
  const section1Title = data.contentfulSection1.title

  //establishes variables for respective daily hours
  const days = data.allContentfulDay.edges
  const isOpen = data.allContentfulDay.edges

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
        <Section1 
          title={section1Title}
          days={days}
          isOpen={isOpen}
          address={streetNumberName}
          city={cityStateZip}
          map={map}
          link={link}
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
      fluid {
        tracedSVG
        aspectRatio
      }
      file {
        url
      }
      description
    }
    title
    subtitle
    tagline {
      tagline
    }
  }
  contentfulSection1 {
    cityStateZip
    streetNumberName
    title
    map {
      file {
        url
      }
      description
    }
    link
  }
  allContentfulDay(sort: {fields: tag, order: ASC}) {
    edges {
      node {
        dayOfWeek
        closeTime
        areYouOpen
        openTime
      }
    }
  }
}

`

export default Landing
