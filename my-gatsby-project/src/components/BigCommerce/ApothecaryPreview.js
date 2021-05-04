import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'




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
  clock {
      grid-column: 1 / 1;
  }
`
const Title = styled.h2`
`

const SubSection1 = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 2em;
  h3, p {
    padding-bottom: .5em;
  }
 .foodDrinkLink {
   padding-top: 1em;
   align-self: flex-end;
   text-align: right;
 }
`

const SubSection2 = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 2em;
  h3, p {
    padding-bottom: .5em;
  }
 .apothecaryLink {
   padding-top: 1em;
   align-self: flex-end;
   text-align: right;
 }
`


const Products = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    grid-gap: 1em;
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
  }
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
         height 3em;
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
     padding-bottom: .5em;
     overflow: hidden;

 }
 img {
     width: 100%;
     grid-column: 1 / 1;
     grid-row: 1 / 2;
 }
  @media (min-width: ${props => props.theme.responsive.small}) {
    border-radius: .5em;
    div {
      height 4em;
    }
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    border-radius: .5em;
    flex: 1 1 0px;
    div {
      height: 3.5em;
    }
    h3 {
      padding-bottom: 0.2em;
    }
  }
  @media (min-width: ${props => props.theme.responsive.large}) {
    h3 {
      padding-bottom: 1.5em;
    }
  }
`


const ApothecaryPreview = props => (

  <Wrapper>
    <SubSection1>
      <h3>Apothecary</h3>
      <p>Loose leaf teas, dry herbs, and skincare solutions produced in-house.</p>
      <Products>
      {props.looseLeaf.slice(0,3).map(({ node }) => (
        <Product>
          <img src={node.images[0].url_standard}/>
          <div></div>
          <h3>{node.name}</h3>
        </Product>
      ))}
      </Products>
      <p class="foodDrinkLink">View all apothecary &gt;</p>
    </SubSection1>
    <SubSection2>
      <h3>Apothecary</h3>
      <p>Loose leaf teas, dry herbs, and skincare solutions produced in-house.</p>
      <Products>
      {props.looseLeaf.map(({ node }) => (
        <Product>
          <img src={node.images[0].url_standard}/>
          <div></div>
          <h3>{node.name}</h3>
        </Product>
      ))}
      </Products>
      <p class="foodDrinkLink">View all apothecary &gt;</p>
    </SubSection2>

  </Wrapper>
)

export default ApothecaryPreview
