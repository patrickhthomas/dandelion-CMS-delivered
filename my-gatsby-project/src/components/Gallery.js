import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { TiPlusOutline } from 'react-icons/ti'
import { Link } from 'gatsby'





const Wrapper = styled.section`
display: grid;
grid-template-columns: 1fr;
max-width: 100%;
grid-gap: 2em;
padding-bottom: 3em;
.htmlContainer {
  p {
    padding: 0;
  }
}
height: ${props => props.height || 'auto'};
@media (min-width: ${props => props.theme.responsive.small}) {
  max-width: ${props => props.theme.sizes.maxWidthCentered}; 
}
a {
  text-decoration: none;
}
`
const Title = styled.h2`
`

const SubSection = styled.div`
max-width: 100%;
display: grid;
grid-template-columns: 1fr;
grid-gap: 2em;
padding-bottom: 2em;
h3, p {
  padding-bottom: .5em;
}
  @media (min-width: ${props => props.theme.responsive.small}) {
   grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${props => props.theme.responsive.medium}) {
   grid-template-columns: 1fr 1fr 1fr;
  }

`





  const Description = styled.p`
  
  `

  const GalleryImage = styled.div`
  display: flex;
  img {
      max-width: 100%;
  }
  @media (min-width: ${props => props.theme.responsive.small}) {
    img {

    }
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    img {

    }
    @media (min-width: ${props => props.theme.responsive.large}) {
      img {

      }
    }
    `
    const Frost = styled.div`
    grid-area: c;
    display: flex;
    padding-top: 1em;
    padding-bottom: .5em;
    justify-content: space-evenly;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.fadedPurple};
    `
    
    
    const ShopMenu = props => (
      
      <Wrapper>
      
      <Title>{props.gallery.title}</Title>
      <Description>{props.gallery.description.description}</Description>
      <SubSection>

      {props.gallery.images.map(( images ) => (


            <GalleryImage><img src={images.file.url}/></GalleryImage>
     
      ))}
          
          </SubSection>
          
          
          </Wrapper>
          )
          
          export default ShopMenu
          