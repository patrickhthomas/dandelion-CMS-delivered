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
  max-width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 2em;
  h3, p {
    padding-bottom: .5em;
  }

`



const Products = styled.div`
  display: grid;
  max-width: 100%;
  padding-top: 2em;
  grid-gap: .5em;

`

const Product = styled.div`
width: 100%;
display: grid;
grid-gap: 2em;
justify-content: start;
@media (min-width: ${props => props.theme.responsive.small}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
@media (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
  }
.child {

width: 90%;
    border-radius: 1em;
@media (min-width: ${props => props.theme.responsive.small}) {

  }



margin: auto;
 p, h3 {
     color: white;
 }
 display: grid;
 grid-template-areas: 
  "a b c"
  "d e f"
  "g h i"
  "j k l"
  "m n o";
 align-items: center;
 max-width: 1060px;
 max-width: 100%;
 grid-template-columns: 1fr 1fr 1fr;
 grid-template-rows: 4em 3em minmax(3em,auto) minmax(3em,auto) 3em;
 overflow: hidden;
max-width: 400px;
}

`
const Description = styled.p`
grid-area: j / j / j / l;
z-index: 2;
align-self: start;

`
const Price = styled.p`
grid-area: m;
z-index: 2;

`

const ProductName = styled.h3`
grid-area: g / g / g / i;
z-index: 2;
margin-top: 0.5em;

`
const ProductImage = styled.div`
  grid-area: a / a / m / o;
  width: 100%;
  height: 300px;
  overflow: hidden;
    img {
        max-width: 400px;
    }
`
const Frost = styled.div`
  grid-area: g / a / m / o;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.gradients.primary};
 -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
`


const ShopMenu = props => (

  <Wrapper>
    
      <h1>Menu</h1>
      
      <SubSection1>
      {props.looseLeaf.map(({ node, index }) => {
        return (
        <Products key={index}>
        <Title class="sectionH2">{node.sectionTitle}</Title>
        <p>{node.description.internal.content}</p>
        <Product>
            {node.sectionProducts.map((sectionProducts, i) =>(
                <div class="child" key={i}>
                    <Frost></Frost>
                    <ProductName>{sectionProducts.productName}</ProductName>
                    <Description>{sectionProducts.description.internal.content}</Description>
                    <Price>${sectionProducts.price}</Price>
                    <ProductImage><img src={sectionProducts.productImage.file.url}/></ProductImage>
                </div>
            ))}
        </Product>
        </Products>
        )
        })}

    </SubSection1>


  </Wrapper>
)

export default ShopMenu
