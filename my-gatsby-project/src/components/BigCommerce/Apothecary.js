import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { TiPlusOutline } from 'react-icons/ti'




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
  grid-gap: 2em;
  @media (min-width: ${props => props.theme.responsive.small}) {
    grid-gap: 1em;
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    
  }
`

const Product = styled.div`
 display: grid;
 grid-template-areas: 
  "a b b b"
  "a c f i"
  "a e e h";
 align-items: center;
 width: 100%;
 max-width: 1060px;
 grid-template-columns: 12em auto auto auto;
 overflow: hidden;
 .price {
   grid-area: c;
 }
 h3 {
     width: 100%;
     z-index: 1;
     grid-area: b;
     color: ${props => props.theme.colors.text};
     opacity: 100%;
     padding-top: .5em;
     padding-bottom: .5em;
     overflow: hidden;

 }
 .imageContainer {
     display: flex;
     overflow: hidden;
     width: 100%;
     height: auto;
     max-width: 200px;
     grid-area: a;

 }
  @media (min-width: ${props => props.theme.responsive.small}) {
    border-radius: .5em;
    div {
      height 4em;
    }
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    border-radius: .5em;

    h3 {
      padding-bottom: 0.2em;
    }
  }
  @media (min-width: ${props => props.theme.responsive.large}) {
    h3 {
      padding-bottom: 1.5em;
    }
  }
.addToCart {
  display: flex;
  align-items: center;
  border-radius: .3em;
  grid-area: h;
  background: ${props => props.theme.gradients.primary};
  box-shadow: ${props => props.theme.shadows.button};
}
.cart {

  color: white;
  display: block;

}
.toCart {
text-align: center;
color: white;
width: 150%;
margin: auto;
font-family: ${props => props.theme.fonts.bodyBold};
}
`
const Description = styled.p`
   display: none;
   grid-area: e;
   margin-left: -1em;
  @media (min-width: ${props => props.theme.responsive.small}) {
    display: block;
  }
`


const Apothecary = props => (

  <Wrapper>
    <SubSection1>
      <h3>Apothecary</h3>
      <p>Loose leaf teas, dry herbs, and skincare solutions produced in-house.</p>
      <Products>
      {props.looseLeaf.map(({ node }) => {
        return (
          <Product>
            <div class='imageContainer'>
              <img src={node.images[0].url_standard} />
            </div>
            <p class='price'>${node.price}.00</p>
            <h3>{node.name}</h3>
            <Description dangerouslySetInnerHTML={{
              __html: node.description.length > 150 ?
                `${node.description.substring(0, 150)}...` : node.description
            }} />
            <div class='addToCart'>
              <h2 class='cart'><TiPlusOutline /></h2>
            </div>
          </Product>
        )
      })}
      </Products>
    </SubSection1>

  </Wrapper>
)

export default Apothecary
