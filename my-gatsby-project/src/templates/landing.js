import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Events from '../components/Events'
import Section3 from '../components/Section3'
import ContactCard from '../components/ContactCard'
import ApothecaryPreview from '../components/BigCommerce/ApothecaryPreview'
import Container from '../components/Container'
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

  //establishes variables for Section 2, product previews
  const subSection1 = data.contentfulSection2.subsection1
  const subSection2 = data.contentfulSection2.subsection2

  //establishes variables for Events
  const events = data.allContentfulEvent.edges

  //establishes variables for LooseLeaf BigCommerceProducts
  const looseLeaf = data.allBigCommerceProducts.edges


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
        <Section2 
          title={data.contentfulSection2.title}
          subSection1Title={subSection1.title}
          subSection1Desc={subSection1.description}
          teahouseProduct={subSection1.products}
          subSection2Title={subSection2.title}
          subSection2Desc={subSection2.description}
          apothecaryProduct={subSection2.products}
          days={days}
          isOpen={isOpen}
          address={streetNumberName}
          city={cityStateZip}
          map={map}
          link={link}
        />
        <Events
          events={events}
        />
        <Section3 
          section={data.contentfulSection3}
          title={data.contentfulSection3.title}
          content={data.contentfulSection3.content}
        />
        <ContactCard info={data.contentfulContact}/>
        <ApothecaryPreview looseLeaf={looseLeaf} />
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
  contentfulSection2 {
    title
    subsection1 {
      linkToProductPage
      title
      description {
        internal {
          content
        }
      }
      products {
        productName
        productImage {
          file {
            url
          }
          description
        }
      }
    }
    subsection2 {
      linkToProductPage
      title
      description {
        internal {
          content
        }
      }
      products {
        productName
        productImage {
          file {
            url
          }
          description
        }
      }
    }
  }
  allContentfulEvent(sort: {fields: startTime, order: ASC}) {
    edges {
      node {
      description {
        internal {
          content
        }
      }
        startTime
        endTime
        title
        image {
          file {
            url
          }
          description
        }
      }
    }
  }
  contentfulSection3 {
    title
    content {
      title
      entry {
        internal {
          content
        }
      }
    }
  }
  contentfulContact {
    email
    facebook
    instagram
    phoneNumber
  }
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

export default Landing
