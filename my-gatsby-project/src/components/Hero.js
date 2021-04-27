import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  padding-bottom: 2em;
  display: grid;
  position: relative;
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
  z-index: 2;
  grid-column: 1 / 4;
  grid-row: 4 / 5;
`

const HeroImg = styled.div`
  z-index: 1;
  grid-column: 1 / 4;
  grid-row: 1 / 5; 
  overflow: hidden;
  display: block;
  position: relative;
  margin-top: -3em;
  margin-bottom: -1em;
  img {
   position: absolute;
   height: 120%;
   filter: grayscale(100%) contrast(150%) blur(0px);
  }
  ::before {
    z-index: 1;
    grid-column: 1 / 4;
    grid-row: 1 / 5; 
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.background};
    mix-blend-mode: normal;
    filter: opacity(.8);
  }
  
  @media (min-width: ${props => props.theme.responsive.small}) {

  img {
   position: absolute;
   width: 100%;
   height: auto;
  }
    
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
    <HeroImg><img src={props.image.file.url} alt={props.alt} /></HeroImg>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Tagline>{props.tagline}</Tagline>
    <Blurb>{props.blurb}</Blurb>

  </Wrapper>
)

export default Hero
