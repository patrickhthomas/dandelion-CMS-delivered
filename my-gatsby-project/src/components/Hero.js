import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  display: grid;
  grid-gap: 1em;
  align-content: start;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2.5em 3.5em 2.5em auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    max-width: ${props => props.theme.sizes.maxWidthCentered}; 
    height: ${props => props.height || 'auto'};
    grid-template-rows: 2.5em 3.5em 1.25em auto;
  }
`
const Title = styled.h1`
  z-index: 1;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const Blurb = styled.p`
  z-index: 1;
  grid-column: 1 / 4;
  grid-row: 4 / 5;
`

const HeroImg = styled(Img)`
  position: absolute;
  grid-column: 1 / 4;
  grid-row: 1 / 5; 
  ::after {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${props => props.theme.colors.highlight};
    z-index: 0;
    mix-blend-mode: overlay;
    backdrop-filter: blur(.1em);
  }
  
  @media (min-width: ${props => props.theme.responsive.small}) {
    opacity: 100%;
    grid-column: 2 / 4;
    grid-row: 1 / 3;
    max-width: 100%;
  }
`



const Subtitle = styled.h2`
  z-index: 1;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`
const Tagline = styled.h3`
  z-index: 1;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
`

const Hero = props => (
  <Wrapper>
    <HeroImg 
      alt={props.alt}
      fluid={props.image.fluid}
      fadeIn={true}
      durationFadeIn={500}
    />
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Tagline>{props.tagline}</Tagline>
    <Blurb>{props.blurb}</Blurb>

  </Wrapper>
)

export default Hero
