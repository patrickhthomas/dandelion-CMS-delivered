import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Clock from '../components/Icons/clock'
import Pin from '../components/Icons/pin'



const Wrapper = styled.section`
  max-width: 100%;
 .divider{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
    @media (min-width: ${props => props.theme.responsive.medium}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
 }

  .location{
    width: 100%;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2em 1fr;
    grid-template-rows: auto;
  }
  .hours {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  height: ${props => props.height || 'auto'};
  @media (min-width: ${props => props.theme.responsive.small}) {
    max-width: ${props => props.theme.sizes.maxWidthCentered}; 
  }
  clock {
      grid-column: 1 / 1;
  }
`
const Title = styled.h2`
  margin-bottom: 1em;
`

const Address = styled.h3`
`

const Map = styled.div`
  max-width: 100%;
  grid-column: 1 / 3;
  img {
      width: 100%;
  }
`
const Products = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: .5em;
`

const Product = styled.div`
 display: grid;
 align-items: end;
 max-width: 100%;
 grid-template-columns: 1fr;
 grid-template-rows: auto auto;
 overflow: hidden;
div {
         content: '';
         z-index: 0;
         width: 100%;
         justify-self: center;
         height 6em;
         grid-column: 1 / 3;
         grid-row: 1 / 1;
         top: 0;
         left: 0;
         background: linear-gradient(140.98deg, rgba(113, 54, 186, 0.5) 17.15%, rgba(14, 7, 24, 0.5) 59.18%, rgba(110, 38, 255, 0.5) 117.37%), radial-gradient(106.5% 85.16% at 73.56% 25.55%, rgba(113, 54, 186, 0.5) 6.86%, rgba(48, 23, 79, 0.5) 58.17%, rgba(14, 7, 24, 0.5) 96.14%);
         background-blend-mode: color-dodge, overlay;
         backdrop-filter: blur(3px);
     }
 h3 {
     width: 100%;
     z-index: 1;
     grid-column: 1 / 1;
     grid-row: 1 / 1;
     color: white;
     opacity: 100%;
     padding-top: .5em;
     padding-bottom: 2em;

     overflow: hidden;

 }
 img {
     width: 100%;
     grid-column: 1 / 1;
     grid-row: 1 / 2;
 }
  @media (min-width: ${props => props.theme.responsive.small}) {
    border-radius: .5em;
  }
`


const Section2 = props => (

  <Wrapper>
    <Title>{props.title}</Title>
    <h2>{props.subSection1Title}</h2>
    <p dangerouslySetInnerHTML={{ __html: props.subSection1Desc.childMarkdownRemark.html }}></p>
    {props.teahouseProduct.map(({ productImage, productName }) => (
    <Products>
      <Product>
        <img src={productImage.file.url}/>
        <div></div>
        <h3>{productName}</h3>
      </Product>
    </Products>
    ))}

    <h2>{props.subSection2Title}</h2>
    <p dangerouslySetInnerHTML={{ __html: props.subSection2Desc.childMarkdownRemark.html }}></p>
    {props.apothecaryProduct.map(({ productImage, productName }) => (
    <Products>
      <Product>
        <img src={productImage.file.url}/>
        <div></div>
        <h3>{productName}</h3>
      </Product>
    </Products>
    ))}

  </Wrapper>
)

export default Section2
