import React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby"




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

 .toFullMenu {
   padding-top: 1em;
   padding-left: 1em;
   font-size: 1.2em;
   text-shadow: -2px 1px 2px rgba(113, 54, 186, 0.2);
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
p {
    padding-left: 1em;
    margin: 0;
    p{
        padding-left: 0;
    }
}
@media (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
}
@media (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    padding-bottom: 2em;
    row-gap: 4em;
}


    `
    const Description = styled.p`
    
    `
    const Price = styled.p`
    
    
    `
    
    const ProductName = styled.h3`
    
    `
    const ProductImage = styled.div`
    overflow: hidden;
    display: grid;
    width: 100%;
    max-width: 600px;
    img {
        width: 100%;
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
        
        
        const ProductInfo = props => (
            
            <Wrapper>
            
            <SubSection1>

            <Title className="sectionH2">{props.productName}</Title>
            <Product>
            <ProductImage><img src={props.productImage.file.url}/></ProductImage>
            <div>
            <ProductName>{props.productName}</ProductName>
            <Description dangerouslySetInnerHTML={{ __html: props.description }}></Description>
            <Price>{props.price}</Price>
            </div>
            
            
            </Product>
            
<Link className='toFullMenu' to="/menu">&lt; Go to the FULL MENU</Link>
            
            
            </SubSection1>
            
            
            </Wrapper>
            )
            
            export default ProductInfo
            